# Funex Cloud

**장례 산업 운영·커뮤니케이션 플랫폼** — 랜딩·지도사 SaaS, AI 상담, Care, 블로그 스튜디오, 묘지·부고·이장, 울산 거점, API까지 `*.funexcloud.com` 아래 제품군으로 제공합니다. 코드는 **서비스·모듈별 저장소**에서 개발·배포합니다.

운영 포털: [https://funexcloud.com](https://funexcloud.com)  
조직: [github.com/funexcloud](https://github.com/funexcloud)

> **조직 프로필 초안** — User 계정 `@funexcloud`는 `funexcloud/funexcloud/README.md`가 Overview입니다. Organization 전환 시 `profile/README.md`로 복사하세요.

---

## 플랫폼 허브

| 제품 | 공개 URL | 설명 | 저장소 |
|------|----------|------|--------|
| **Funex Cloud** | [funexcloud.com](https://funexcloud.com) | 우주 장례 브랜드 랜딩, 지도사 온보딩·심사, 소비자 리포트, Orbit Engine 소개 | [funexcloud/funexcloud](https://github.com/funexcloud/funexcloud) |
| **CEO Insight** | [ceo.funexcloud.com](https://ceo.funexcloud.com) | 창업자 백서·관점·지식 그래프 (`funexcloud` 호스트 rewrite) | [funexcloud/funexcloud](https://github.com/funexcloud/funexcloud) |

---

## 서비스 라인업

| 서비스 | 공개 URL | 한 줄 설명 | 저장소·비고 |
|--------|----------|------------|-------------|
| **AX Contact Center** | [ax.funexcloud.com](https://ax.funexcloud.com) | AI 기반 장례 상담·콜센터, 문의 분류·응대 자동화 | 별도 배포 · 상세 README 각 repo |
| **Funex Care** | [care.funexcloud.com](https://care.funexcloud.com) | 상담 기록·직원 인계·배차·유족 안내를 하나의 Care 운영 흐름으로 연결 | 별도 배포 |
| **Blog Studio (AI)** | [blog.funexcloud.com](https://blog.funexcloud.com) | AI 블로그·템플릿 사이트 생성, SEO·Notion 연동 | 별도 배포 (`inblog_funex` 계열) |
| **아카이브** | [funexcloud.com#archive](https://funexcloud.com#archive) | 상장례·의례 지식 백서·기록 아카이브 (랜딩 내 섹션) | [funexcloud/funexcloud](https://github.com/funexcloud/funexcloud) |
| **GRID 묘지관리** | [funexcloud.com#features](https://funexcloud.com#features) | 묘지·GPS·현장 관리, Orbit Anchor·Sync 연동 SaaS 모듈 | 플랫폼 모듈 · 전용 repo 협의 |
| **Ping 부고발송** | [ping.funexcloud.com](https://ping.funexcloud.com) | 부고 URL·연락처 검증·결제·알림톡/SMS 대량 발송·안심 링크 | [funexcloud/ping](https://github.com/funexcloud/ping) |
| **Move 이장관리** | [move.funexcloud.com](https://move.funexcloud.com) | 이장·견적·묘지 연계 SaaS, e하늘 등 데이터 정규화 | `funex_grid_send` (별도 Vercel 프로젝트) |
| **Ulsan 거점서비스** | [funexcloud.com#features](https://funexcloud.com#features) | 울산 지역 기반 장례 디지털 전환·파트너 연동 거점 (전국 확장 로드맵) | 플랫폼·지역 연동 |
| **API 연동** | [docs.funexcloud.com](https://docs.funexcloud.com) | GRID·Ping·Move·Care·Mainnet 앵커 등 모듈 API·연동 가이드 | 문서 허브 · Enterprise 플랜 |

---

## 모듈이 한 줄로 이어지는 방식

```
[Funex Cloud 랜딩·온보딩]
        │
        ├── AX / Care / Blog Studio  ← 운영·콘텐츠·상담 축
        ├── GRID · Ping · Move       ← 현장·발송·이장 축
        ├── 아카이브 · CEO Insight   ← 지식·브랜드 축
        ├── Ulsan 거점               ← 지역 확장 축
        └── API · Mainnet 앵커       ← 연동·증명 축
```

Orbit Engine(궤도 엔진)이 위 모듈 이벤트를 파이프라인으로 묶고, 필요 시 Polygon에 앵커합니다.

---

## README 역할 분담

| 위치 | 파일 | 용도 |
|------|------|------|
| **Overview (메인)** | `funexcloud/funexcloud/README.md` | **전체 제품 지도** + 공통 사업자 정보 |
| **Funex Cloud 상세** | `docs/funexcloud-service-README.md` | 설치·env·Supabase·배포 |
| **조직 전환 시** | `funexcloud/.github/profile/README.md` | 이 초안 복사 |
| **PING 상세** | `funexcloud/ping/README.md` | PING형 서비스 README |

공통 섹션 규칙: [`funexcloud/funexcloud` → `docs/README-template.md`](https://github.com/funexcloud/funexcloud/blob/master/docs/README-template.md)  
등록 방법: [`funexcloud/funexcloud` → `docs/github-readme-setup.md`](https://github.com/funexcloud/funexcloud/blob/master/docs/github-readme-setup.md)

---

## 공통 원칙

- **서비스 URL** = 누구나 접속하는 공개 웹
- **GitHub Public/Private** = 코드 공개 범위 (배포와 별개)
- **사업자 표기** = 각 서비스 repo의 `*-company-legal.ts` 단일 출처 → README·푸터와 동기화

---

## 사업자 정보 (공통)

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

---

## 문서

| 문서 | 위치 |
|------|------|
| README 등록 가이드 | [funexcloud/funexcloud → `docs/github-readme-setup.md`](https://github.com/funexcloud/funexcloud) |
| Funex Cloud 배포 | [funexcloud/funexcloud → `docs/deploy-funexcloud-com.md`](https://github.com/funexcloud/funexcloud) |
| PING 대량 발송 SoT | [funexcloud/ping → `docs/ping-bulk-send-process.md`](https://github.com/funexcloud/ping) |
| Mainnet·API 설계 | [docs.funexcloud.com/mainnet](https://docs.funexcloud.com/mainnet) |
