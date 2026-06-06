-- Development seed. Replace the UUID with an existing auth.users.id before running locally.
-- TODO: 관리자 승인 대시보드와 정산 데이터는 Phase 2~3에서 seed를 확장합니다.

insert into public.profiles (id, name, phone, email, biz_number, region, status, service_count)
values (
  '00000000-0000-0000-0000-000000000001',
  '데모 지도사',
  '010-0000-0000',
  'demo@funexcloud.com',
  '000-00-00000',
  '경북 경주',
  'active',
  2
)
on conflict (id) do nothing;
