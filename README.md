# Funex Cloud Landing

Next.js 16 App Router 기반의 Funex Cloud Phase 1 구현입니다. 마케팅 랜딩, 지도사 가입/로그인, 입점 포트폴리오 업로드, RPC 기반 활동 요약 대시보드를 포함합니다.

## Getting Started

이 프로젝트는 `package-lock.json`을 사용하는 npm 프로젝트입니다.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment

`.env.example`을 `.env.local`로 복사하고 Supabase 값을 채웁니다.

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Supabase

`supabase/migrations/202606050001_phase1_funexcloud.sql`에는 다음이 포함됩니다.

- `profiles`, `portfolios`, `service_records`, `reviews`, `withdrawal_blacklist`
- 모든 테이블 RLS 정책
- `portfolios` Storage bucket 정책
- `check_is_blacklisted`, `get_activity_summary`, `on_withdrawal` RPC

로컬 Supabase를 사용한다면 migration 적용 후 `supabase/seed.sql`의 UUID를 실제 `auth.users.id`로 바꿔 seed를 실행하세요.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Phase Notes

결제/PG, 소비자 리포트 결제, 수수료 정산, 관리자 승인 대시보드는 Phase 2~3 범위로 남겨두었습니다.
