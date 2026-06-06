"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SlashButton from "@/components/ui/SlashButton";
import { ShineCard } from "@/components/ui/shine-card";
import {
  FUNEX_AX,
  axChannels,
  axServices,
  axWorkflowSteps,
} from "@/lib/funex-ax";

export default function AxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ax" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(41,98,255,0.08)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(213,0,249,0.05)_0%,transparent_50%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/35 to-transparent"
      />

      <motion.div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow-tv mb-3">AX FUNEXCLOUD</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            <span className="text-tv-gradient">AX</span> · AI Contact Center
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {FUNEX_AX.description}
            <br className="hidden sm:block" />
            장례 업종 템플릿은{" "}
            <a href="#care" className="text-cyan-400 underline-offset-2 hover:underline">
              Funex Care
            </a>
            로, 미션·추모 인프라는 GRID·Ping·Move·Mainnet과 연결됩니다.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-3 rounded-3xl bg-indigo-500/10 blur-2xl" />
            <ShineCard className="relative overflow-hidden bg-[#0b1120] p-0">
              <div className="border-b border-slate-800/80 bg-[#0d1628] px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                      {FUNEX_AX.name}
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">{FUNEX_AX.tagline}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 font-mono text-[10px] text-violet-300">
                    MVP · Webchat
                  </span>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex flex-wrap gap-2">
                  {axChannels.map((ch) => (
                    <span
                      key={ch.id}
                      className="rounded-lg border border-white/10 bg-slate-900/50 px-2.5 py-1.5"
                    >
                      <span className="block font-mono text-[9px] text-indigo-400">{ch.id}</span>
                      <span className="text-[11px] font-semibold text-white">{ch.label}</span>
                    </span>
                  ))}
                </div>

                <div className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-4">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                    Live conversation · tenant: funeral-demo
                  </p>
                  <div className="space-y-2 text-xs">
                    <p className="text-slate-400">
                      <span className="text-cyan-400">고객</span> 발인 일정 문의드립니다.
                    </p>
                    <p className="text-slate-300">
                      <span className="text-violet-400">AI</span> 안내 가능 시간대를 정리해
                      드렸습니다. 상담원 연결이 필요하시면 말씀해 주세요.
                    </p>
                    <p className="text-slate-400">
                      <span className="text-amber-400">Agent</span> 핸드오프 수락 · 티켓 #AX-2847
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {axServices.map((svc) => (
                    <div
                      key={svc.name}
                      className="rounded-lg border border-slate-800/50 bg-slate-950/50 px-2 py-2 text-center"
                    >
                      <p className="text-[11px] font-bold text-white">{svc.name}</p>
                      <p className="mt-0.5 text-[9px] text-slate-500">{svc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ShineCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Omnichannel flow
            </p>
            <ol className="space-y-4">
              {axWorkflowSteps.map((item, i) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 font-mono text-xs font-bold text-indigo-400">
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <SlashButton href={FUNEX_AX.url} label="AX 플랫폼 보기" variant="gradient" />
              <a
                href={FUNEX_AX.url}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 font-mono text-xs text-white/80 transition-colors hover:border-indigo-500/40 hover:text-white"
              >
                ax.funexcloud.com
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
