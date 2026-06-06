"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { ShineCard } from "@/components/ui/shine-card";
import { philosophyPillars } from "@/lib/philosophy";

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof philosophyPillars)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      id={pillar.id}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <ShineCard
        shineOnHover={false}
        className={`bg-gradient-to-br p-6 sm:p-8 lg:p-10 ${pillar.accent}`}
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-black text-white/25">{pillar.index}</span>
            <span className="rounded border border-white/15 bg-black/25 px-2 py-0.5 font-mono text-[10px] tracking-widest text-white/70">
              {pillar.tag}
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            {pillar.titleEn}
          </p>
        </div>

        <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
          {pillar.titleKo}
        </h3>

        <blockquote className="mt-4 border-l-2 border-cyan-400/50 pl-4 text-base font-medium leading-relaxed text-white sm:text-lg">
          {pillar.quote}
        </blockquote>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Philosophical ground
            </p>
            <p className="text-sm leading-relaxed text-white/75">{pillar.background}</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-400/80">
              Funex Cloud
            </p>
            <p className="text-sm leading-relaxed text-white">{pillar.branding}</p>
          </div>
        </div>
      </ShineCard>
    </motion.article>
  );
}

export default function PhilosophySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05)_0%,transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow-tv mb-3">OUR PHILOSOPHY</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            우주장례의 <span className="text-tv-gradient">3대 핵심 철학</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            장례지도사의 깊은 도메인 지식과 테크 기반의 정교함이 만나는 지점입니다.
            <br className="hidden sm:block" />
            차가운 다크 UI와 우주선 애셋은 이 프레임 위에서 비로소 생명력을 얻습니다.
          </p>
        </motion.div>

        <div className="space-y-8 lg:space-y-10">
          {philosophyPillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 text-center text-sm text-white/60"
        >
          귀환 · 궤도 · 프로토콜 — 세 철학이 GRID, Ping, Move, Console, Mainnet을 하나의
          미션으로 엮습니다.
        </motion.p>
      </div>
    </section>
  );
}
