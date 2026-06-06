"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SlashButton from "@/components/ui/SlashButton";
import { ShineCard } from "@/components/ui/shine-card";
import {
  FUNEX_CARE,
  careCapabilities,
  careWorkflowSteps,
} from "@/lib/funex-care";

export default function CareSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="care" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow-tv mb-3">FUNEX CARE</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            <span className="text-tv-gradient">Care</span> 프로그램
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {FUNEX_CARE.description}
            <br className="hidden sm:block" />
            우주 미션의 정밀함 뒤에서,{" "}
            <span className="text-emerald-400">유족과 장례지도사를 잇는 따뜻한 운영 레이어</span>
            입니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              One workflow
            </p>
            <ol className="space-y-4">
              {careWorkflowSteps.map((item, i) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 font-mono text-xs font-bold text-emerald-400">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <SlashButton href={FUNEX_CARE.url} label="Care 바로가기" variant="gradient" />
              <a
                href={FUNEX_CARE.url}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 font-mono text-xs text-white/80 transition-colors hover:border-emerald-500/40 hover:text-white"
              >
                care.funexcloud.com
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-emerald-500/10 blur-2xl" />
            <ShineCard className="relative overflow-hidden bg-[#0b1120] p-0">
              <div className="border-b border-slate-800/80 bg-[#0d1628] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      {FUNEX_CARE.name}
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">{FUNEX_CARE.tagline}</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    LIVE
                  </span>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "긴급 상담", value: "2", tone: "text-rose-400" },
                    { label: "콜백 필요", value: "5", tone: "text-amber-400" },
                    { label: "출동 확정", value: "3", tone: "text-emerald-400" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-slate-800/60 bg-slate-900/50 p-3 text-center"
                    >
                      <div className={`text-lg font-black ${m.tone}`}>{m.value}</div>
                      <div className="mt-0.5 text-[9px] text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-slate-800/60 bg-slate-900/30 p-4">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                    진행 중 상담 · 김○○ 유가족
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["요약 완료", "인계 대기", "배차 확인중"].map((tag, i) => (
                      <span
                        key={tag}
                        className={`rounded px-2 py-0.5 text-[10px] font-medium ${
                          i === 0
                            ? "bg-emerald-500/15 text-emerald-400"
                            : i === 1
                              ? "bg-violet-500/15 text-violet-400"
                              : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-slate-400">
                    안심 안내 페이지 · 공유 링크 발급 준비됨
                  </p>
                </div>

                <ul className="space-y-2">
                  {careCapabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs text-white/75">
                      <svg
                        className="h-3.5 w-3.5 shrink-0 text-emerald-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </ShineCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
