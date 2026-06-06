"use client";

import type { ReactNode } from "react";

import { TV_SHINE_COLORS } from "@/lib/tv-colors";
import { cn } from "@/lib/utils";

import { ShineBorder } from "./shine-border";

type ShineCardProps = {
  children: ReactNode;
  className?: string;
  /** Show animated border only on hover (default true) */
  shineOnHover?: boolean;
  duration?: number;
  borderWidth?: number;
};

export function ShineCard({
  children,
  className,
  shineOnHover = true,
  duration = 10,
  borderWidth = 2,
}: ShineCardProps) {
  return (
    <div
      className={cn(
        "shine-card relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(41,98,255,0.14)]",
        className,
      )}
    >
      <ShineBorder
        borderWidth={borderWidth}
        duration={duration}
        shineColor={[...TV_SHINE_COLORS]}
        className={cn("shine-border z-20", shineOnHover ? "opacity-0" : "opacity-100")}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}
