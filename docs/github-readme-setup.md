# GitHub README 등록 가이드 (조직 메인 + 서비스별)

Funex는 **README가 두 층**입니다.

1. **Overview (메인)** — [github.com/funexcloud](https://github.com/funexcloud) 방문 시 보이는 프로필 (9개 서비스 지도)
2. **서비스별 상세** — Funex Cloud는 `docs/funexcloud-service-README.md`, PING은 `ping/README.md`

---

## ⚠️ 현재 funexcloud 계정 구조 (중요)

[github.com/funexcloud](https://github.com/funexcloud) Overview에 **`funexcloud/README.md`** 가 보이면, GitHub가 **`funexcloud/funexcloud` 저장소 루트 README**를 프로필로 쓰고 있는 상태입니다.

| 계정 유형 | Overview에 표시되는 파일 |
|-----------|-------------------------|
| **사용자(User)** `@funexcloud` | `funexcloud/funexcloud/README.md` ← **지금 이 경우** |
| **조직(Organization)** `funexcloud` | `funexcloud/.github/profile/README.md` |

**그래서 이렇게 나눴습니다.**

| 파일 | 역할 |
|------|------|
| `funexcloud/funexcloud/README.md` | **메인(Overview)** — 서비스 지도 9개 + 사업자 |
| `funexcloud/funexcloud/docs/funexcloud-service-README.md` | **Funex Cloud 상세** — 설치·env·배포 |
| `funexcloud/ping/README.md` | **PING 상세** |

푸시 후 Overview를 새로고침하면 메인 README가 바뀝니다.

---

## 1-A. 지금 구조 (User 계정) — 추가 작업 없음

`funexcloud/funexcloud`의 루트 `README.md`를 메인으로 유지하고, 서비스 상세는 `docs/funexcloud-service-README.md`를 봅니다.

```bash
git add README.md docs/funexcloud-service-README.md
git commit -m "docs: split main overview README from service README"
git push
```

---

## 1-B. 조직(Organization)으로 분리할 때 (선택)

GitHub **Organization** `funexcloud`를 쓰면 Overview와 저장소 README를 **완전히 분리**할 수 있습니다.

`조직이름/.github`의 `profile/README.md`만 조직 프로필에 표시됩니다.

### 최초 1회

```bash
# 1) .github 저장소 생성 (GitHub 웹)
#    https://github.com/organizations/funexcloud/repositories/new
#    이름: .github  (공개 Public 권장)

# 2) 로컬에서 클론 후 profile/README.md 추가
git clone https://github.com/funexcloud/.github.git
cd .github
mkdir -p profile
```

`profile/README.md` 내용은 본 저장소의 초안을 복사합니다.

```bash
# funexcloud 서비스 repo에서 초안 복사 (경로는 환경에 맞게)
cp ../funexcloud/docs/org-profile-README.md profile/README.md
```

```bash
git add profile/README.md
git commit -m "Add Funex organization profile README"
git push origin main
```

### 확인

- 브라우저: [https://github.com/funexcloud](https://github.com/funexcloud)
- 조직 이름 아래에 `profile/README.md` 본문이 렌더링되면 성공

### 이후 수정

`funexcloud/.github`의 `profile/README.md`만 수정·푸시합니다. **서비스 repo README와 별개**입니다.

초안 원본(복사용): [`docs/org-profile-README.md`](./org-profile-README.md)

---

## 2. 서비스별 README 등록

각 제품 저장소 **루트**의 `README.md`가 해당 repo 홈에 표시됩니다.

| 저장소 | 파일 | 형식 |
|--------|------|------|
| `funexcloud/funexcloud` | `README.md` | PING형 서비스 README (이미 적용됨) |
| `funexcloud/ping` | `README.md` | PING형 서비스 README |

### 규칙

- 섹션 순서: [`docs/README-template.md`](./README-template.md)
- 사업자 표기: `src/lib/funex-company-legal.ts` 또는 `src/lib/ping-company-legal.ts`
- 조직 지도·다른 서비스 링크는 **짧게** — 상세는 조직 `profile/README.md`에

### 커밋

```bash
cd funexcloud   # 또는 ping
git add README.md
git commit -m "docs: align service README with Funex template"
git push origin main
```

---

## 3. 저장소 About(설명) 등록

README와 별도로, GitHub repo 우측 **About** 박스에 요약을 넣습니다.

### 웹 UI

1. 저장소 → **⚙ Settings** → **General**
2. **Repository details** → **Description** · **Website** · **Topics**

| 저장소 | Description 예시 | Website |
|--------|------------------|---------|
| `funexcloud` | Funex Cloud 랜딩·지도사 온보딩·CEO 인사이트 (Next.js + Supabase) | `https://funexcloud.com` |
| `ping` | 부고 커뮤니케이션·대량 발송·안심 링크 (Next.js + Firebase) | `https://ping.funexcloud.com` |
| `.github` | Funex Cloud organization profile & shared docs | `https://funexcloud.com` |

**Topics 예시:** `nextjs`, `funeral-tech`, `supabase`, `vercel`, `funexcloud`

### CLI (gh 설치 시)

```bash
gh repo edit funexcloud/funexcloud \
  --description "Funex Cloud 랜딩·지도사 온보딩·CEO 인사이트" \
  --homepage "https://funexcloud.com" \
  --add-topic nextjs --add-topic supabase --add-topic funexcloud

gh repo edit funexcloud/ping \
  --description "PING 부고·대량 발송 플랫폼" \
  --homepage "https://ping.funexcloud.com" \
  --add-topic nextjs --add-topic funexcloud
```

---

## 4. 역할이 헷갈릴 때

| 질문 | 답 |
|------|-----|
| `github.com/funexcloud` 첫 화면을 바꾸고 싶다 | `funexcloud/.github` → `profile/README.md` |
| Funex Cloud 설치·env·배포 문서를 바꾸고 싶다 | `funexcloud/funexcloud` → `README.md` |
| PING 9단계 플로·Solapi 설정을 바꾸고 싶다 | `funexcloud/ping` → `README.md` |
| 모든 서비스 README 형식을 통일하고 싶다 | `funexcloud/funexcloud` → `docs/README-template.md` 수정 후 각 repo 반영 |

---

## 5. 체크리스트

- [ ] `funexcloud/.github` 저장소 생성
- [ ] `profile/README.md` ← `docs/org-profile-README.md` 반영
- [ ] `funexcloud/funexcloud` 루트 `README.md` (서비스 상세)
- [ ] `funexcloud/ping` 루트 `README.md` (PING 형식 — ping repo에서 별도 정리)
- [ ] 각 repo **About** Description · Website · Topics
- [ ] 조직 프로필 [github.com/funexcloud](https://github.com/funexcloud)에서 렌더 확인
