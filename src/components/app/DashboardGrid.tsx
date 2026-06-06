import { cn } from "@/lib/utils";

export function DashboardGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("grid gap-4 md:grid-cols-3", className)}>{children}</div>;
}

export function WidgetShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-md border border-[var(--border)] bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-zinc-950">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function WidgetMessage({ message }: { message: string }) {
  return (
    <div className="grid min-h-40 place-items-center rounded-md bg-zinc-50 p-5 text-center text-sm leading-6 text-zinc-600">
      {message}
    </div>
  );
}
