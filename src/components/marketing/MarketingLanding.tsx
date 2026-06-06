import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronDown,
  FileText,
  Laptop,
  Menu,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";

const directors = [
  { name: "김도윤", region: "서울", score: "4.9", cases: "218건" },
  { name: "박서현", region: "부산", score: "4.8", cases: "176건" },
  { name: "이준호", region: "대구", score: "4.9", cases: "241건" },
  { name: "정하린", region: "경주", score: "4.7", cases: "132건" },
];

const features = [
  {
    icon: BarChart3,
    title: "데이터로 검증된 전문성",
    body: "평점, 업무 이력, 포트폴리오를 하나의 프로필로 묶어 장례지도사의 실력을 설명합니다.",
    visual: "평균 4.86 / 포트폴리오 3+ / 완료 767건",
  },
  {
    icon: Smartphone,
    title: "모바일 현장 보고에서 PC 대시보드까지",
    body: "현장에서 남긴 기록이 운영 화면으로 이어져 장례식장과 장례지도사가 같은 상태를 봅니다.",
    visual: "현장 보고 → 검수 → 대시보드 반영",
  },
  {
    icon: WalletCards,
    title: "투명한 정산과 수수료",
    body: "정산과 수수료는 Phase 2 범위로 분리하고, 현재는 업무 데이터 기반의 명세 구조를 준비합니다.",
    visual: "TODO Phase 2: PG, 정산, 수수료 정책",
  },
  {
    icon: Building2,
    title: "설치형 도입",
    body: "장례식장 단위로 입점, 장례지도사 관리, 업무 연결 흐름을 단계적으로 도입할 수 있습니다.",
    visual: "Enterprise workspace / funeral-home rollout",
  },
];

const testimonials = [
  {
    quote: "장례지도사 이력과 포트폴리오를 한 화면에서 확인하니 배정 기준이 훨씬 명확해졌습니다.",
    name: "동행장례문화원",
    role: "운영팀",
  },
  {
    quote: "내가 쌓아온 현장 경험을 숫자와 사진으로 설명할 수 있어서 신규 의뢰 대응이 편해졌습니다.",
    name: "최민재",
    role: "장례지도사",
  },
  {
    quote: "모바일에서 입력한 기록이 대시보드로 정리되어 반복 보고 시간이 줄었습니다.",
    name: "경북 파트너 장례식장",
    role: "시설 관리자",
  },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-5xl rounded-lg border border-white/12 bg-[#11100f]/90 p-3 shadow-2xl shadow-blue-950/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs text-zinc-500">Funex Cloud Dashboard</span>
      </div>
      <div className="grid gap-3 pt-3 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-md border border-white/10 bg-black/30 p-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-500">Activity Summary</p>
              <h3 className="mt-1 text-xl font-semibold text-white">이번 달 완료 42건</h3>
            </div>
            <span className="rounded-full bg-[#3182F6]/15 px-3 py-1 text-xs text-[#7bb0ff]">Verified</span>
          </div>
          <div className="flex h-44 items-end gap-2">
            {[42, 74, 58, 90, 66, 112, 86, 128].map((value) => (
              <div key={value} className="flex flex-1 items-end rounded bg-[#3182F6]/12">
                <div
                  className="w-full rounded bg-[#3182F6]"
                  style={{ height: `${Math.max(24, value)}px` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {["평균 평점 4.86", "누적 매출 8,420만원", "포트폴리오 18장"].map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-zinc-400">{item}</p>
              <div className="mt-3 h-2 rounded bg-white/10">
                <div className="h-2 w-2/3 rounded bg-[#3182F6]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MarketingLanding() {
  return (
    <div className="marketing-shell min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090807]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-white">
            FUNEX
          </Link>
          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <button className="inline-flex items-center gap-1 text-white">
              Product <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <Link href="#enterprise">도입</Link>
            <Link href="#pricing">요금제</Link>
            <Link href="#resources">Resources</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden px-3 py-2 text-sm text-zinc-300 sm:inline-flex">
              로그인
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-[#3182F6] px-4 py-2 text-sm font-semibold text-white"
            >
              도입 문의
            </Link>
            <button className="rounded-md border border-white/10 p-2 text-zinc-300 md:hidden" aria-label="메뉴">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative px-4 pb-20 pt-20 md:px-6 md:pb-28 md:pt-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(49,130,246,0.18),transparent_34%),linear-gradient(180deg,#090807_0%,#11100f_64%,#090807_100%)]" />
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-5 text-sm font-medium text-[#7bb0ff]">Funex Cloud for funeral professionals</p>
            <h1 className="mx-auto max-w-5xl text-balance text-4xl font-semibold leading-tight text-white md:text-7xl">
              당신의 전문성을 데이터로 증명하고, 일거리를 연결하세요
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              장례지도사의 포트폴리오, 업무 이력, 리뷰 데이터를 기반으로 장례식장 단위 도입과 현장 운영을 연결합니다.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/signup" className="inline-flex h-11 items-center gap-2 rounded-md bg-[#3182F6] px-5 text-sm font-semibold text-white">
                설치/도입 신청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#demo" className="inline-flex h-11 items-center rounded-md border border-white/12 px-5 text-sm font-semibold text-white">
                데모 보기
              </Link>
              <Link href="#resources" className="inline-flex h-11 items-center rounded-md px-5 text-sm font-semibold text-zinc-300">
                소비자 리포트
              </Link>
            </div>
            <DashboardMockup />
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-4 py-8 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-zinc-300">
              <ShieldCheck className="h-4 w-4 text-[#3182F6]" />
              전국 장례지도사가 매일 사용
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {directors.map((director) => (
                <div key={director.name} className="rounded-md border border-white/10 bg-[#11100f] p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-zinc-800 text-sm font-semibold">
                      {director.name.slice(0, 1)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-semibold text-white">
                        {director.name} <BadgeCheck className="h-4 w-4 text-[#3182F6]" />
                      </div>
                      <p className="text-xs text-zinc-500">{director.region} · {director.cases} · {director.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="px-4 py-20 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-2 md:items-center">
                  <div className={index % 2 ? "md:order-2" : ""}>
                    <Icon className="mb-5 h-6 w-6 text-[#3182F6]" />
                    <h2 className="text-2xl font-semibold text-white md:text-4xl">{feature.title}</h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">{feature.body}</p>
                    <Link href="/signup" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7bb0ff]">
                      자세히 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-[#11100f] p-5">
                    <div className="rounded-md bg-black/35 p-5">
                      <p className="text-xs uppercase text-zinc-500">Workflow</p>
                      <p className="mt-4 text-xl font-semibold text-white">{feature.visual}</p>
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        <span className="h-16 rounded bg-[#3182F6]/20" />
                        <span className="h-16 rounded bg-white/8" />
                        <span className="h-16 rounded bg-white/8" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#11100f] px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold text-white">현장의 말로 검증합니다</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure key={item.name} className="rounded-md border border-white/10 bg-black/25 p-5">
                  <blockquote className="text-sm leading-7 text-zinc-300">“{item.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-zinc-700" />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-zinc-500">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="px-4 py-16 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <FileText className="mb-4 h-6 w-6 text-[#3182F6]" />
              <h2 className="text-3xl font-semibold text-white">업데이트와 체인지로그</h2>
              <p className="mt-4 text-zinc-400">입점, 포트폴리오, 대시보드 기능의 출시 기록을 투명하게 공개합니다.</p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">2026.06 Phase 1</p>
              <p className="mt-2 text-sm text-zinc-400">장례지도사 가입, 입점 폼, Activity Summary 위젯, Supabase RPC 기반 검증 준비.</p>
            </div>
          </div>
        </section>

        <section id="enterprise" className="px-4 pb-20 md:px-6">
          <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[#3182F6] p-8 text-white md:p-12">
            <Laptop className="mb-5 h-7 w-7" />
            <h2 className="text-3xl font-semibold md:text-5xl">지금 도입하기</h2>
            <p className="mt-4 max-w-2xl text-blue-50">장례식장 단위 도입, 장례지도사 입점, 데이터 기반 운영 대시보드를 한 흐름으로 시작하세요.</p>
            <Link href="/signup" className="mt-8 inline-flex h-11 items-center rounded-md bg-white px-5 text-sm font-semibold text-[#1455af]">
              도입 문의
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-12 text-sm text-zinc-400 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-5">
          {[
            ["제품", "프로필", "대시보드", "입점"],
            ["리소스", "체인지로그", "소비자 리포트", "도입 가이드"],
            ["회사", "Funex Cloud", "Enterprise", "문의"],
          ].map(([title, ...items]) => (
            <div key={title}>
              <h3 className="mb-3 font-semibold text-white">{title}</h3>
              <div className="grid gap-2">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
          <div>
            <h3 className="mb-3 font-semibold text-white">법적고지</h3>
            <div className="grid gap-2">
              <Link href="/terms">이용약관</Link>
              <Link href="/privacy">개인정보처리방침</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-white">연락처</h3>
            <p>주식회사 동반</p>
            <p>사업자등록번호 619-87-02012</p>
            <p>통신판매업 제2024-경북경주-0257호</p>
            <p>help@funexcloud.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
