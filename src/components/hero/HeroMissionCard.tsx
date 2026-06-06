import Link from "next/link";

import RocketIcon from "@/components/icons/RocketIcon";

export default function HeroMissionCard() {
  return (
    <aside
      className="hero-mission-card absolute z-20 flex w-[min(100%-2rem,360px)] max-w-[calc(100%-2rem)] flex-col gap-2 sm:max-w-[390px]"
      aria-label="우주장례 비전"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/45 px-3 py-2.5 backdrop-blur-md sm:gap-[13px] sm:px-4 sm:py-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-gradient-to-br from-sky-500/30 to-indigo-600/40 sm:h-12 sm:w-12"
          aria-hidden="true"
        >
          <RocketIcon className="h-5 w-5 text-sky-200 sm:h-6 sm:w-6" />
        </div>
        <span className="min-w-0 flex-1 grid gap-0.5 text-left">
          <strong className="text-[13px] font-bold leading-tight text-white sm:text-sm">
            우주장례의 비전
          </strong>
          <small className="text-[11px] leading-snug text-white/75 sm:text-xs">
            지상의 정돈에서 궤도 추모까지, Funex Cloud가 그리는 미래
          </small>
        </span>
        <Link
          href="#philosophy"
          className="mission-link shrink-0"
          aria-label="철학 섹션에서 비전 읽기"
        >
          <RocketIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="hidden sm:inline">비전 읽기</span>
        </Link>
      </div>
    </aside>
  );
}
