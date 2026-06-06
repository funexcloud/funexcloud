"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { ShineCard } from "@/components/ui/shine-card";
import SlashButton from "@/components/ui/SlashButton";
import { METRICS_FOOTNOTE } from "@/lib/site-copy";

const features = [
  {
    id: "GRID",
    name: "GRID",
    subtitle: "묘지 관리 시스템",
    description:
      "GPS 기반의 정밀한 묘지 위치 데이터화. 전국 묘지를 좌표 단위로 등록·관리하고, 실시간 현황을 지도 위에서 한눈에 파악합니다.",
    detail: "전국 128,400건+ 묘지 데이터 등록 완료",
    color: "amber",
    colorClass: "from-amber-400 to-yellow-300",
    borderColor: "border-amber-500/20",
    glowColor: "rgba(245,158,11,0.08)",
    hoverGlow: "rgba(245,158,11,0.15)",
    textColor: "text-amber-400",
    bgColor: "bg-amber-400/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stats: [
      { label: "등록 묘지", value: "128,400+" },
      { label: "정확도", value: "99.8%" },
      { label: "업데이트", value: "실시간" },
    ],
    features: ["GPS 좌표 기반 정밀 등록", "위성 지도 연동 뷰어", "묘지 상태 이력 관리", "일괄 데이터 임포트"],
  },
  {
    id: "PING",
    name: "Ping",
    subtitle: "부고 발송 시스템",
    description:
      "AI가 최적화한 부고 문구를 대량으로 즉시 발송. 수신율 분석부터 발송 이력 관리까지 부고 업무의 전 과정을 자동화합니다.",
    detail: "누적 387만 건 발송 · 평균 도달률 98.7%",
    color: "cyan",
    colorClass: "from-cyan-400 to-sky-300",
    borderColor: "border-cyan-500/20",
    glowColor: "rgba(6,182,212,0.06)",
    hoverGlow: "rgba(6,182,212,0.12)",
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    stats: [
      { label: "발송 건수", value: "387만+" },
      { label: "도달률", value: "98.7%" },
      { label: "발송 속도", value: "초당 1만" },
    ],
    features: [
      "AI 부고 문구 자동 생성",
      "Orbit Relay 대량 발송",
      "수신 확인·이력 조회",
      "카카오·SMS 멀티채널",
    ],
  },
  {
    id: "MOVE",
    name: "Move",
    subtitle: "이장 관리 시스템",
    description:
      "복잡한 이장 절차를 원스톱 디지털 프로세스로. 신청부터 현장 확인, 서류 처리, 완료 확인까지 전 과정을 체계적으로 관리합니다.",
    detail: "이장 처리 평균 소요 시간 40% 단축",
    color: "emerald",
    colorClass: "from-emerald-400 to-green-300",
    borderColor: "border-emerald-500/20",
    glowColor: "rgba(52,211,153,0.06)",
    hoverGlow: "rgba(52,211,153,0.12)",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    stats: [
      { label: "처리 건수", value: "4,200+" },
      { label: "소요 단축", value: "40%" },
      { label: "만족도", value: "4.9/5" },
    ],
    features: ["원스톱 이장 신청 워크플로우", "관련 서류 자동 생성", "현장 담당자 모바일 앱", "진행 현황 실시간 알림"],
  },
  {
    id: "ULSAN",
    name: "Ulsan",
    subtitle: "로컬 거점 플랫폼",
    description:
      "울산을 시작으로 전국으로 확장 중인 지역 기반 장례 서비스 디지털 전환 솔루션. 지역 특성에 맞는 맞춤형 인프라를 제공합니다.",
    detail: "울산 → 경남 → 전국 확장 로드맵 진행 중",
    color: "violet",
    colorClass: "from-violet-400 to-purple-300",
    borderColor: "border-violet-500/20",
    glowColor: "rgba(167,139,250,0.06)",
    hoverGlow: "rgba(167,139,250,0.12)",
    textColor: "text-violet-400",
    bgColor: "bg-violet-400/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    stats: [
      { label: "커버 지역", value: "울산 전역" },
      { label: "파트너사", value: "47개" },
      { label: "확장 예정", value: "Q3 2026" },
    ],
    features: ["지역 특화 장례 정보 DB", "로컬 파트너사 연동 허브", "지자체 연계 서비스", "지역민 부고 알림 서비스"],
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group w-full rounded-2xl"
    >
      <ShineCard className="cursor-default p-6">

      {/* Status indicator */}
      <div className="flex items-center justify-between mb-5">
        <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${feature.bgColor} ${feature.textColor}`}>
          {feature.icon}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 font-medium">ON</span>
          <div className="ml-1 w-8 h-4 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-end pr-0.5">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-1">
          <h3 className={`text-xl font-black ${feature.textColor}`}>{feature.name}</h3>
          <span className="rounded border border-white/20 px-1.5 py-0.5 font-mono text-xs text-white">
            {feature.id}
          </span>
        </div>
        <p className="text-sm font-medium text-white">{feature.subtitle}</p>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-white">{feature.description}</p>

      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {feature.stats.map((stat) => (
          <div key={stat.label} className="text-center p-2 rounded-lg bg-slate-800/40">
            <div className={`text-sm font-bold ${feature.textColor}`}>{stat.value}</div>
            <div className="mt-0.5 text-xs text-white">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Feature list */}
      <ul className="space-y-2 mb-5">
        {feature.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-white">
            <svg className={`w-3.5 h-3.5 flex-shrink-0 ${feature.textColor}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Detail badge */}
      <div className={`text-xs ${feature.textColor} ${feature.bgColor} px-3 py-1.5 rounded-lg border ${feature.borderColor}`}>
        {feature.detail}
      </div>

      </ShineCard>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.04)_0%,transparent_60%)]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="eyebrow-tv mb-3">CORE MODULES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            4대 <span className="text-tv-gradient">핵심 모듈</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-white">
            장례 비즈니스의 모든 영역을 커버하는 전문 솔루션.
            <br />
            각 모듈은 독립·통합 운영이 가능합니다. ({METRICS_FOOTNOTE})
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-sm text-white">
            모든 모듈은 Funex Console 하나로 통합 관리됩니다
          </p>
          <div className="mt-3 flex justify-center">
            <SlashButton href="#pricing" label="도입 상담" variant="gradient" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
