import Link from "next/link";

export default function ChangelogPage() {
  return (
    <main className="marketing-shell min-h-screen px-4 py-16 text-white md:px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#7bb0ff]">← 홈</Link>
        <h1 className="mt-6 text-4xl font-semibold">체인지로그</h1>
        <article className="mt-8 rounded-md border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-zinc-500">2026.06</p>
          <h2 className="mt-2 text-xl font-semibold">Phase 1 기반</h2>
          <p className="mt-3 text-zinc-400">
            가입 제한 RPC, 입점 포트폴리오 업로드, Activity Summary 대시보드 골격을 준비했습니다.
          </p>
        </article>
      </div>
    </main>
  );
}
