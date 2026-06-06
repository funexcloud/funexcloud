"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SlashButton from "@/components/ui/SlashButton";
import { PRICING_INTRO, saasPlans } from "@/lib/pricing-plans";

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow-tv mb-3">{PRICING_INTRO.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            <span className="text-tv-gradient">{PRICING_INTRO.title}</span> {PRICING_INTRO.titleAccent}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/85">
            {PRICING_INTRO.description}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/55">{PRICING_INTRO.footnote}</p>
        </motion.div>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {saasPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-sm ${plan.color} ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#2962ff]/10 to-slate-900/60"
                  : "bg-slate-900/40"
              }`}
              style={
                plan.highlight
                  ? { boxShadow: "0 0 50px rgba(41,98,255,0.15), 0 0 0 1px rgba(41,98,255,0.08)" }
                  : {}
              }
            >
              {plan.badge ? (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full border border-[#2962ff]/30 bg-[#2962ff]/15 px-2.5 py-1 text-xs font-medium text-[#7eb6ff]">
                    {plan.badge}
                  </span>
                </div>
              ) : null}

              {plan.highlight ? (
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-[#00bce6] via-[#2962ff] to-[#d500f9]" />
              ) : null}

              <div className="mb-5">
                <div className="mb-1 flex items-baseline gap-2">
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <span className="text-xs text-white/60">{plan.tag}</span>
                </div>
                <p className="text-sm text-white/80">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl font-black text-white sm:text-3xl">{plan.price}</span>
                  {plan.priceCompare ? (
                    <span className="text-sm text-white/45 line-through">{plan.priceCompare}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-xs font-medium text-cyan-400/80">{plan.priceNote}</p>
              </div>

              <ul className="mb-7 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? "text-[#00bce6]" : "text-white/70"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <SlashButton
                href="#pricing"
                label={plan.cta}
                variant={plan.highlight ? "gradient" : "space"}
                className="w-full justify-center [&_.slash-button__content]:w-full"
              />
            </motion.div>
          ))}
        </div>

        <p className="mb-20 text-center text-sm text-white/50">
          Move(묘지·이장) 단독도 월 ₩49,000~ 가이드 · Ping 단독과 동일 요금대 · 통합 시 할인 적용
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0d1f3a] to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          <div className="relative px-8 py-16 text-center">
            <p className="eyebrow-tv mb-4">도입 문의</p>
            <h3 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              장례식장·장례지도사 운영에 맞춘
              <br />
              <span className="text-tv-gradient">모듈·플랜</span>을 안내드립니다
            </h3>
            <p className="mx-auto mb-10 max-w-lg text-white/80">
              필요 모듈(Ping / Move / GRID 등)과 화이트라벨·쿼터 옵션을 확인한 뒤,
              <br />
              통합 플랜 견적과 도입 일정을 투명하게 공유합니다.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <SlashButton href="#pricing" label="도입 상담 예약" variant="space" />
              <SlashButton href="#features" label="모듈 기능 보기" variant="gradient" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
