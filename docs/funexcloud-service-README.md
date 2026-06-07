# FUNEX CLOUD

> **서비스 저장소 상세 README** — 전체 제품 지도·9개 서비스 라인업은 [루트 `README.md`](../README.md)([github.com/funexcloud](https://github.com/funexcloud) Overview)를 보세요.

**장례 SaaS 랜딩·온보딩 플랫폼** — 마케팅 랜딩, CEO 인사이트, 장례지도사 가입·심사, 포트폴리오 업로드, 활동 대시보드, 소비자 리포트 결제까지 한 저장소에서 연결합니다.

운영(공개 서비스): [https://funexcloud.com](https://funexcloud.com)  
CEO 인사이트: [https://ceo.funexcloud.com](https://ceo.funexcloud.com)  
소스: [github.com/funexcloud/funexcloud](https://github.com/funexcloud/funexcloud)  
관련 서비스: [PING (ping.funexcloud.com)](https://github.com/funexcloud/ping)

> **서비스 vs 저장소:** 위 URL은 **누구나 접속하는 공개 웹 서비스**입니다. GitHub 저장소의 Public/Private 여부는 **코드 공개 범위**이며, 서비스 배포와는 별개입니다.

---

## Funex Cloud가 하는 일

일반 랜딩 페이지와 달리, 본 저장소는 **장례 지도사 온보딩·운영 SaaS Phase 1~2**를 Next.js 단일 앱으로 제공합니다.

| 영역 | 내용 |
|------|------|
| **마케팅** | 우주 장례 브랜드 랜딩, 철학·메인넷·제품 섹션, 이용약관·개인정보 |
| **CEO 인사이트** | `/ceo` 백서·관점·지식 그래프 (`ceo.funexcloud.com` 호스트 rewrite) |
| **지도사 온보딩** | 회원가입·로그인, 사업자번호 검증(NTS), SMS OTP(Solapi), 포트폴리오 업로드 |
| **심사·운영** | 관리자 승인/반려 RPC, 대시보드·콘솔, 활동 요약 위젯 |
| **소비자 리포트** | 리포트 조회·결제(토스 콜백), 탐색·프로필 공개 페이지 (Phase 2) |
| **인프라** | Supabase Auth·Postgres·Storage·Edge Functions, Vercel `icn1` 배포 |

---

## 기술 스택

| 계층 | 기술 |
|------|------|
| **UI** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 |
| **애니메이션·시각화** | Framer Motion, Recharts, Sigma / react-force-graph-2d |
| **데이터** | Supabase Postgres + RLS, Supabase Storage |
| **인증** | Supabase Auth, 미들웨어 보호 라우트 (`/onboarding`, `/console`, `/dashboard`) |
| **검증 API** | Supabase Edge Functions + Next Route Handler (`verify-biz-number`, `send-otp`, `verify-otp`) |
| **결제** | 토스페이먼츠 콜백 (`/api/payment/toss/callback`) |
| **배포** | Vercel (`vercel.json` → `icn1`) |

---

## 아키텍처 (요약)

```
[브라우저]
    │
    ▼
Vercel — Next.js (src/app)          ← 마케팅 UI · 앱 UI · Route Handler
    │
    ├── Supabase Auth / Postgres / Storage
    ├── Edge Functions (OTP · 사업자 검증)
    └── 외부 API (Solapi · NTS · Toss)
```

- **호스트 분기:** `ceo.funexcloud.com` → `next.config.ts` rewrite로 `/ceo` 트리 서빙
- **보호 라우트:** `src/middleware.ts`에서 Supabase 세션 쿠키 검사
- **사업자 표기:** README·푸터·약관은 `src/lib/funex-company-legal.ts` 단일 출처

---

## 시작하기

### 요구 사항

- **Node.js 20** (권장)
- npm

### 설치

```bash
git clone https://github.com/funexcloud/funexcloud.git
cd funexcloud
npm install
cp .env.example .env.local
# .env.local 값을 채운 뒤 아래 dev 실행
```

### 로컬 개발

```bash
npm run dev

# Turbopack 캐시·포트 충돌 시
npm run dev:clean
```

| URL | 용도 |
|-----|------|
| `http://localhost:3000` | 메인 랜딩 |
| `http://localhost:3000/ceo` | CEO 인사이트 |
| `http://localhost:3000/login` · `/signup` · `/onboarding` | 지도사 인증·입점 |
| `http://localhost:3000/dashboard` · `/console` | 앱 콘솔 |
| `http://localhost:3000/explore` · `/report/[id]` | 소비자 탐색·리포트 |

### 검증

```bash
npm run lint
npm run build
```

---

## 환경 변수

`.env.example`에 전체 목록이 있습니다. **`.env` / `.env.local`은 git에 올리지 마세요.**

| 구분 | 대표 변수 |
|------|-----------|
| **Supabase** | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| **Solapi OTP** | `SOLAPI_API_KEY`, `SOLAPI_API_SECRET`, `SOLAPI_FROM`, `OTP_PEPPER` |
| **사업자 검증** | `NTS_API_KEY`, `NTS_STATUS_ENDPOINT` |
| **결제·입금** | `NEXT_PUBLIC_BANK_*`, 토스 관련 키 (Phase 2) |
| **사이트** | `NEXT_PUBLIC_SITE_URL` |

Edge Functions Secrets는 Supabase 대시보드 또는 `supabase secrets set`으로 별도 주입합니다.

---

## npm scripts (자주 쓰는 것)

| 명령 | 설명 |
|------|------|
| `npm run dev` | Next.js 개발 서버 (Turbopack) |
| `npm run dev:stop` | 로컬 dev 서버(3000~3005) 종료 |
| `npm run dev:clean` | dev 종료 → `.next` 삭제 → 재시작 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 |
| `npm run lint` | ESLint |

---

## 디렉터리 구조

```
funexcloud/
├── src/app/                    # Next.js App Router (마케팅 · 앱 · API)
│   ├── (marketing)/            # CEO, 약관, 제품 페이지
│   ├── (app)/                  # 로그인, 온보딩, 대시보드, 콘솔
│   ├── api/                    # OTP, 사업자검증, 결제 콜백
│   ├── explore/ · report/      # 소비자 탐색·리포트
│   └── admin/                  # 관리자 결제 화면
├── src/components/             # UI 섹션, 푸터, 앱 위젯
├── src/lib/                    # 사이트 카피, Supabase, funex-company-legal
├── src/content/ceo/            # CEO 백서 마크다운
├── supabase/
│   ├── migrations/             # Phase 1~2 스키마·RPC
│   ├── functions/              # Edge Functions
│   └── seed.sql
├── docs/                       # 배포·README 템플릿
├── scripts/                    # dev 정리·DB 점검 스크립트
├── funex_terms_of_service.md
├── funexcloud_privacy_policy.md
└── vercel.json
```

---

## Supabase

### Migrations

| 파일 | 내용 |
|------|------|
| `202606050001_phase1_funexcloud.sql` | `profiles`, `portfolios`, RLS, 기본 RPC |
| `202606060002_phase1_updates.sql` | 반려 상태, 인증·알림 테이블, 승인/반려 RPC |
| `20260606192500_phase2_consumer_payment.sql` | 소비자 리포트 결제 |

로컬 Supabase 사용 시 migration 적용 후 `supabase/seed.sql`의 UUID를 실제 `auth.users.id`로 맞춥니다.

### Edge Functions

```bash
supabase start
supabase functions serve --env-file .env.local

supabase functions deploy verify-biz-number --project-ref <ref>
supabase functions deploy send-otp --project-ref <ref>
supabase functions deploy verify-otp --project-ref <ref>
```

---

## 관리자

| 경로 | 기능 |
|------|------|
| `/admin` | 지도사 심사 (승인/반려) |
| `/admin/payments` | 결제·입금 확인 (Phase 2) |

실제 권한은 Supabase RLS·RPC 및 서버 측 검증으로 수행합니다.

---

## 배포

| 대상 | 방법 |
|------|------|
| **Next UI** | Vercel — `npx vercel deploy --prod` |
| **루트 도메인** | `funexcloud.com` → 본 프로젝트 Domains 연결 |
| **CEO 서브도메인** | `ceo.funexcloud.com` — Vercel Domains **수동 추가** + `next.config.ts` rewrite |

상세: [`docs/deploy-funexcloud-com.md`](deploy-funexcloud-com.md)

---

## 문서

| 문서 | 내용 |
|------|------|
| [`github-readme-setup.md`](github-readme-setup.md) | 조직 메인 vs 서비스 README 등록 |
| [`deploy-funexcloud-com.md`](deploy-funexcloud-com.md) | funexcloud.com · move 서브도메인 배포 |
| [`README-template.md`](README-template.md) | 서비스 저장소 README 섹션 규칙 |
| [`../funex_terms_of_service.md`](../funex_terms_of_service.md) | 이용약관 원문 |
| [`../funexcloud_privacy_policy.md`](../funexcloud_privacy_policy.md) | 개인정보처리방침 원문 |

---

## 보안

- 시크릿·API 키는 **환경 변수**만 사용 (클라이언트 번들·git 금지)
- OTP는 HMAC-SHA256 해시 저장, 상수시간 비교·오입력 제한
- 관리·심사 API는 서버·RPC에서 권한 검증

---

## Phase Notes

- **실시간 알림:** v1은 30초 주기 클라이언트 폴링 (Realtime은 Phase 3)
- **수수료·정산:** Phase 3 범위

---

## 라이선스·사업자 정보

**운영 주체:** 주식회사 동반 (대표 송지훈)

| 항목 | 내용 |
|------|------|
| 사업자등록번호 | 619-87-02012 |
| 법인등록번호 | 170111-0801549 |
| 의료기기판매업 | 2024-5050041-00015호 |
| 통신판매업신고번호 | 2024경북경주0257호 |
| 사업장주소 | 경상북도 경주시 서면 도계서오길 57-7 |
| 고객센터 | 1855-4947 |
| 민원 담당자 | 송지훈 010-4864-2401 |

주식회사 동반에서 운영하는 본 사이트의 모든 유료 서비스는 주식회사 동반에서 책임지고 제공합니다.

| 구분 | 정책 |
|------|------|
| **웹 서비스 이용** | [이용약관](https://funexcloud.com/terms) · [개인정보처리방침](https://funexcloud.com/privacy) |
| **소스 코드** | `package.json` `"private": true` — npm 패키지 미배포 |

**사업자 표기 단일 출처:** [`src/lib/funex-company-legal.ts`](../src/lib/funex-company-legal.ts)
