import Link from "next/link";
import { ActivitySummaryWidget } from "@/components/app/ActivitySummaryWidget";
import { DashboardGrid, WidgetMessage, WidgetShell } from "@/components/app/DashboardGrid";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#3182F6]">Funex Cloud</p>
          <h1 className="mt-1 text-3xl font-semibold text-zinc-950">장례지도사 대시보드</h1>
        </div>
        <Link href="/onboarding" className="inline-flex h-10 items-center justify-center rounded-md bg-[#3182F6] px-4 text-sm font-semibold text-white">
          입점 정보 업데이트
        </Link>
      </div>
      <DashboardGrid>
        <div className="md:col-span-2">
          <ActivitySummaryWidget />
        </div>
        <WidgetShell title="포트폴리오 상태">
          <WidgetMessage message="포트폴리오 사진 3장 이상 등록 후 검증을 기다려주세요." />
        </WidgetShell>
      </DashboardGrid>
    </main>
  );
}
