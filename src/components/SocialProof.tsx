"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

import { ShineCard } from "@/components/ui/shine-card";
import { METRICS_FOOTNOTE } from "@/lib/site-copy";

interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  trend: string;
  trendUp: boolean;
}

const stats: StatItem[] = [
  {
    value: 128400,
    suffix: "건",
    label: "전국 묘지 데이터",
    sublabel: "GPS 좌표 기반 정밀 등록",
    color: "from-amber-400 to-yellow-300",
    trend: "+12.4%",
    trendUp: true,
  },
  {
    value: 3870000,
    suffix: "건",
    label: "부고 문자 누적 발송",
    sublabel: "AI 최적화 발송 완료",
    color: "from-cyan-400 to-sky-300",
    trend: "+28.1%",
    trendUp: true,
  },
  {
    value: 94,
    suffix: "%",
    label: "서비스 가동률",
    sublabel: "99.97% SLA 보장",
    color: "from-emerald-400 to-green-300",
    trend: "안정",
    trendUp: true,
  },
  {
    value: 312,
    suffix: "개",
    label: "연결된 장례 파트너사",
    sublabel: "전국 17개 시도 커버리지",
    color: "from-violet-400 to-purple-300",
    trend: "+7개",
    trendUp: true,
  },
];

function CountUp({ value, suffix, prefix = "", color }: { value: number; suffix: string; prefix?: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const display = useTransform(motionVal, (v) => {
    const rounded = Math.round(v);
    return `${prefix}${rounded.toLocaleString("ko-KR")}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, motionVal, value]);

  return (
    <motion.span
      ref={ref}
      className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent tabular-nums`}
    >
      {display}
    </motion.span>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" id="social-proof">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative mb-16 overflow-hidden border-y border-slate-800/60 bg-slate-900/20 py-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex gap-12">
              {[
                { label: "GRID.서울", val: "12,847건", up: true },
                { label: "Ping.경기", val: "28.3만건", up: true },
                { label: "Move.부산", val: "처리중 14건", up: false },
                { label: "GRID.인천", val: "5,291건", up: true },
                { label: "Ping.대구", val: "9.1만건", up: true },
                { label: "Ulsan.울산", val: "연동완료", up: true },
                { label: "Move.대전", val: "처리중 3건", up: false },
                { label: "GRID.광주", val: "3,804건", up: true },
                { label: "Ping.전국", val: "실시간발송", up: true },
                { label: "Polygon", val: "chain 137", up: true },
                { label: "AX.Webchat", val: "핸드오프 12", up: true },
                { label: "Care.상담", val: "콜백 5건", up: false },
                { label: "Blog.AI", val: "템플릿발급", up: true },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-500">{item.label}</span>
                  <span className={item.up ? "text-emerald-400" : "text-amber-400"}>{item.val}</span>
                  <span className={`text-xs ${item.up ? "text-emerald-500" : "text-amber-500"}`}>
                    {item.up ? "▲" : "▶"}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            PLATFORM METRICS
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            전국 장례 인프라 지표
          </h2>
          <p className="mt-2 text-sm text-white/80">
            운영·발송·파트너 규모 요약 ({METRICS_FOOTNOTE})
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group w-full rounded-2xl"
            >
              <ShineCard className="bg-slate-900/50 p-6">

              {/* Trend badge */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} mt-1`} />
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                    stat.trendUp
                      ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"
                      : "text-amber-400 bg-amber-400/10 border border-amber-400/20"
                  }`}
                >
                  {stat.trend}
                </span>
              </div>

              {/* Count */}
              <div className="mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} color={stat.color} />
              </div>

              {/* Labels */}
              <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-white">{stat.sublabel}</p>

              {/* Animated bar */}
              <div className="mt-4 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "75%" } : { width: 0 }}
                  transition={{ duration: 1.8, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                />
              </div>
              </ShineCard>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-white/45">{METRICS_FOOTNOTE}</p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-widest text-white/70">협력 네트워크</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {[
              "서울아산병원장례식장",
              "삼성서울병원장례식장",
              "아주대병원장례식장",
            ].map((name) => (
              <span
                key={name}
                className="select-none text-sm font-semibold tracking-tight text-slate-500 sm:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
