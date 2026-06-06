create extension if not exists pgcrypto;

do $$ begin
  create type public.profile_status as enum ('pending', 'active', 'suspended');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  phone text,
  email text,
  biz_number text unique not null,
  region text,
  status public.profile_status not null default 'pending',
  service_count int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.portfolios (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  image_url text not null,
  thumb_url text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.service_records (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  completed_at timestamptz not null,
  amount numeric(12, 0) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  service_record_id uuid not null references public.service_records(id) on delete cascade,
  kindness int not null check (kindness between 1 and 5),
  embalming int not null check (embalming between 1 and 5),
  punctuality int not null check (punctuality between 1 and 5),
  created_at timestamptz not null default now()
);

create table if not exists public.withdrawal_blacklist (
  id uuid primary key default gen_random_uuid(),
  biz_number_hash text not null,
  reason text,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '1 year'),
  removed_by_admin bool not null default false
);

create unique index if not exists withdrawal_blacklist_hash_active_idx
  on public.withdrawal_blacklist (biz_number_hash)
  where removed_by_admin = false;

alter table public.profiles enable row level security;
alter table public.portfolios enable row level security;
alter table public.service_records enable row level security;
alter table public.reviews enable row level security;
alter table public.withdrawal_blacklist enable row level security;

create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "portfolios_select_own"
  on public.portfolios for select
  using (auth.uid() = profile_id);

create policy "portfolios_insert_own"
  on public.portfolios for insert
  with check (auth.uid() = profile_id);

create policy "service_records_select_own"
  on public.service_records for select
  using (auth.uid() = profile_id);

create policy "reviews_select_own"
  on public.reviews for select
  using (
    exists (
      select 1 from public.service_records sr
      where sr.id = reviews.service_record_id and sr.profile_id = auth.uid()
    )
  );

create policy "withdrawal_blacklist_no_direct_select"
  on public.withdrawal_blacklist for select
  using (false);

create policy "withdrawal_blacklist_no_direct_write"
  on public.withdrawal_blacklist for all
  using (false)
  with check (false);

insert into storage.buckets (id, name, public)
values ('portfolios', 'portfolios', true)
on conflict (id) do nothing;

create policy "portfolio_storage_select_public"
  on storage.objects for select
  using (bucket_id = 'portfolios');

create policy "portfolio_storage_insert_own_folder"
  on storage.objects for insert
  with check (
    bucket_id = 'portfolios'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "portfolio_storage_update_own_folder"
  on storage.objects for update
  using (
    bucket_id = 'portfolios'
    and auth.uid()::text = (storage.foldername(name))[1]
  )
  with check (
    bucket_id = 'portfolios'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create or replace function public.check_is_blacklisted(input_biz_number text)
returns bool
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.withdrawal_blacklist wb
    where wb.biz_number_hash = encode(digest(regexp_replace(input_biz_number, '\D', '', 'g'), 'sha256'), 'hex')
      and wb.expires_at > now()
      and wb.removed_by_admin = false
  );
$$;

create or replace function public.get_activity_summary(p_profile_id uuid)
returns json
language sql
security definer
set search_path = public
as $$
  with owned_profile as (
    select id from public.profiles where id = p_profile_id and id = auth.uid()
  ),
  records as (
    select sr.*
    from public.service_records sr
    join owned_profile op on op.id = sr.profile_id
  ),
  review_scores as (
    select ((r.kindness + r.embalming + r.punctuality)::numeric / 3) as score
    from public.reviews r
    join records sr on sr.id = r.service_record_id
  )
  select json_build_object(
    'service_count', coalesce((select count(*) from records), 0),
    'total_revenue', coalesce((select sum(amount) from records), 0),
    'avg_rating', (select round(avg(score), 2) from review_scores),
    'this_month_count', coalesce((
      select count(*) from records
      where completed_at >= date_trunc('month', now())
    ), 0)
  );
$$;

create or replace function public.on_withdrawal(p_profile_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_biz_number text;
begin
  select biz_number into v_biz_number
  from public.profiles
  where id = p_profile_id and id = auth.uid();

  if v_biz_number is null then
    raise exception 'profile not found';
  end if;

  update public.profiles
  set status = 'suspended'
  where id = p_profile_id and id = auth.uid();

  insert into public.withdrawal_blacklist (biz_number_hash, reason, expires_at)
  values (
    encode(digest(regexp_replace(v_biz_number, '\D', '', 'g'), 'sha256'), 'hex'),
    'user withdrawal',
    now() + interval '1 year'
  )
  on conflict do nothing;
end;
$$;

grant execute on function public.check_is_blacklisted(text) to anon, authenticated;
grant execute on function public.get_activity_summary(uuid) to authenticated;
grant execute on function public.on_withdrawal(uuid) to authenticated;
