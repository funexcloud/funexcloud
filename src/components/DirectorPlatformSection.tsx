import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, Building2, Smartphone, WalletCards } from "lucide-react";

const directorCards = [
  { name: "김도윤", region: "서울", score: "4.9", cases: "218건" },
  { name: "박서현", region: "부산", score: "4.8", cases: "176건" },
  { name: "이준호", region: "대구", score: "4.9", cases: "241건" },
];

const capabilities = [
  {
    icon: BarChart3,
    title: "데이터로 검증된 전문성",
    body: "평점, 포트폴리오, 업무 이력을 하나의 장례지도사 프로필로 묶어 실력을 설명합니다.",
  },
  {
    icon: Smartphone,
    title: "모바일 현장 보고",
    body: "현장에서 남긴 기록이 PC 대시보드로 이어져 장례식장과 장례지도사가 같은 상태를 봅니다.",
  },
  {
    icon: WalletCards,
    title: "투명한 정산 구조",
    body: "정산과 수수료는 Phase 2에서 열고, 현재는 업무 데이터 기반의 명세 구조를 준비합니다.",
  },
  {
    icon: Building2,
    title: "장례식장 단위 도입",
    body: "입점, 장례지도사 관리, 업무 연결 흐름을 설치형 워크스페이스로 확장합니다.",
  },
];

export default function DirectorPlatformSection() {
  return (
    <section id="director-platform" className="relative overflow-hidden bg-[#090807] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(49,130,246,0.18),transparent_36%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[#7bb0ff]">Funex Cloud for funeral professionals</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              당신의 전문성을 데이터로 증명하고, 일거리를 연결하세요
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              장례지도사의 포트폴리오, 업무 이력, 리뷰 데이터를 기반으로 장례식장 단위 도입과 현장 운영을 연결합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#3182F6] px-5 text-sm font-semibold text-white"
              >
                설치/도입 신청 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/12 px-5 text-sm font-semibold text-white"
              >
                데모 보기
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#11100f]/90 p-4 shadow-2xl shadow-blue-950/20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs text-zinc-500">Funeral Director Network</span>
              <span className="rounded-full bg-[#3182F6]/15 px-3 py-1 text-xs text-[#7bb0ff]">Verified</span>
            </div>
            <div className="mt-4 grid gap-3">
              {directorCards.map((director) => (
                <div key={director.name} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-zinc-800 text-sm font-semibold">
                      {director.name.slice(0, 1)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-semibold">
                        {director.name} <BadgeCheck className="h-4 w-4 text-[#3182F6]" />
                      </div>
                      <p className="text-xs text-zinc-500">{director.region} · {director.cases}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white">{director.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.03] p-5">
                <Icon className="h-5 w-5 text-[#3182F6]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.body}</p>
                <Link href="/signup" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#7bb0ff]">
                  자세히 <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
