# Funex 저장소 README 공통 템플릿

## README 두 종류

| 종류 | 위치 | 용도 |
|------|------|------|
| **Overview (메인)** | `funexcloud/funexcloud/README.md` | 제품 지도 9개·공통 사업자 |
| **Funex Cloud 상세** | `docs/funexcloud-service-README.md` | 설치·스택·배포 (PING형, 길음) |
| **조직 전환 시** | `funexcloud/.github/profile/README.md` | 초안: [`org-profile-README.md`](./org-profile-README.md) |
| **PING 상세** | `ping/README.md` | PING형 서비스 README |

등록 방법: [`github-readme-setup.md`](./github-readme-setup.md)

---

PING·Funex Cloud 등 **서비스 저장소** README는 아래 섹션 순서를 따릅니다.

1. **제목 + 한 줄 소개** — 제품이 무엇을 연결하는지
2. **운영 URL · 소스 URL** — 서비스 vs 저장소 구분 인용문
3. **제품이 하는 일** — 표로 영역·내용 정리
4. **기술 스택** — 계층별 표
5. **아키텍처 (요약)** — ASCII 다이어그램 + 불릿
6. **시작하기** — 요구 사항, 설치, 로컬 개발(URL 표), 검증
7. **환경 변수** — 표 + `.env` git 금지
8. **npm scripts** — 자주 쓰는 명령 표
9. **디렉터리 구조** — 트리
10. **관리자** — 경로·권한 (해당 시)
11. **배포** — 대상별 방법 + handoff 문서 링크
12. **문서** — `docs/` 인덱스 표
13. **보안** — 시크릿·권한·파기 정책
14. **라이선스·사업자 정보** — 운영 주체 표, 약관 링크, **사업자 표기 단일 출처** TS 경로

## 사업자 표기 단일 출처

| 저장소 | 파일 |
|--------|------|
| PING | `src/lib/ping-company-legal.ts` |
| Funex Cloud | `src/lib/funex-company-legal.ts` |

README·푸터·약관은 위 파일을 import 하여 표기를 맞춥니다.
