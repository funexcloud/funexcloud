# funexcloud.com 배포 · move 서브도메인 이전

| 도메인 | Vercel 프로젝트 | 용도 |
|--------|-----------------|------|
| `funexcloud.com` | `funexcloud_landing` | 우주 장례 랜딩 |
| `move.funexcloud.com` | `funex_grid_send` | 이장·견적 SaaS (기존 루트 데이터) |

## DNS (funexcloud.com 존 → Vercel)

- Apex `funexcloud.com` → Vercel A/CNAME (대시보드 안내 따름)
- `move` → `cname.vercel-dns.com` 또는 프로젝트별 CNAME

## Supabase (호스팅 프로젝트)

Dashboard → **Authentication → URL Configuration**:

- **Site URL**: `https://move.funexcloud.com`
- **Redirect URLs**: `https://move.funexcloud.com/auth/callback` (+ 로컬)

## Vercel CLI (요약)

```bash
# 1) Move 앱 — 서브도메인 + env
cd funex_grid_send
npx vercel@latest domains add move.funexcloud.com
# NEXT_PUBLIC_SITE_URL=https://move.funexcloud.com (production)
npx vercel@latest deploy --prod

# 2) 랜딩 — 루트 도메인
cd funexcloud_landing
npx vercel@latest link --yes
npx vercel@latest env add NEXT_PUBLIC_SITE_URL production   # https://funexcloud.com
npx vercel@latest deploy --prod
npx vercel@latest domains add funexcloud.com
```

`funexcloud.com`을 랜딩 프로젝트에 연결하면 `funex_grid_send`에서는 해당 alias가 해제됩니다.
