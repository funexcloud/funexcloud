import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <header className="border-b border-[var(--border)] bg-white/85 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/dashboard" className="font-semibold tracking-[0.16em] text-zinc-900">
            FUNEX
          </Link>
          <div className="flex items-center gap-4 text-sm text-zinc-600">
            <Link href="/onboarding">입점</Link>
            <Link href="/dashboard">대시보드</Link>
            <Link href="/">홈</Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}
