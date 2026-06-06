"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroAurora from "@/components/hero/HeroAurora";

const miniChartData = [38, 52, 45, 68, 55, 78, 65, 82, 70, 91, 80, 95];

function MiniChart({ color }: { color: string }) {
  const max = Math.max(...miniChartData);
  const min = Math.min(...miniChartData);
  const range = max - min;
  const w = 100;
  const h = 32;

  const points = miniChartData.map((d, i) => ({
    x: (i / (miniChartData.length - 1)) * w,
    y: h - ((d - min) / range) * h * 0.85 - h * 0.075,
  }));

  const pathD = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`chartGrad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#chartGrad-${color})`} />
      <path d={pathD} stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="2" fill={color} />
    </svg>
  );
}

const activityItems = [
  { type: "PING", desc: "부고 발송 완료 — 경기 수원 최○○", time: "방금 전", status: "success" },
  { type: "GRID", desc: "묘지 데이터 등록 — 서울 망우공원 #B-2847", time: "2분 전", status: "success" },
  { type: "MOVE", desc: "이장 접수 — 부산 → 인천 이전 요청", time: "5분 전", status: "pending" },
  { type: "PING", desc: "AI 문구 생성 완료 — 대구 달서구", time: "8분 전", status: "success" },
  { type: "ULSAN", desc: "파트너 연동 — 울산 남구 의전사", time: "12분 전", status: "success" },
];

const serviceModules = [
  { name: "GRID", uptime: "99.97%", status: "green", requests: "1,284" },
  { name: "Ping", uptime: "100%", status: "green", requests: "38,401" },
  { name: "Move", uptime: "99.82%", status: "green", requests: "147" },
  { name: "Ulsan", uptime: "99.99%", status: "green", requests: "892" },
];

export default function ConsoleMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative isolate overflow-hidden py-28" id="console">
      <HeroAurora variant="section" className="opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 z-[1] h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3">
              FUNEX CONSOLE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              하나의 콘솔로
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #06B6D4, #818CF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                전체 인프라 통합 관리
              </span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white">
              우주 미션 관제 센터처럼, 장례·추모 전문가를 위한
              <br className="hidden sm:block" />
              정밀한 대시보드를 경험하세요. 미션 상태, 서비스
              <br className="hidden sm:block" />
              가동률, 실시간 접수 현황을 단 하나의 화면에서 파악합니다.
            </p>

            <div className="space-y-3 mb-10">
              {[
                { icon: "⚡", text: "발사 윈도·기상 GO/NO-GO 실시간 모니터링" },
                { icon: "🎛️", text: "4대 모듈 가동 상태 원격 제어" },
                { icon: "📊", text: "서비스별 요청량·성공률 통계 대시보드" },
                { icon: "🔔", text: "이상 징후 즉시 알림 및 자동 대응" },
                { icon: "⛓️", text: "Orbit Anchor · Polygonscan 연동" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <span className="text-sm text-white">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 transition-colors hover:bg-cyan-500/20"
              >
                운영 콘솔 상담 →
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-cyan-500/5 rounded-3xl blur-2xl" />

            {/* Browser chrome */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-[0_32px_80px_rgba(0,0,0,0.6)] bg-[#0b1120]">
              {/* Browser top bar */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#0d1628] border-b border-slate-800/80">
                {/* Traffic lights */}
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                {/* Address bar */}
                <div className="flex-1 max-w-xs mx-auto flex items-center gap-2 bg-slate-800/60 rounded-md px-3 py-1">
                  <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-slate-400 font-mono">console.funexcloud.com</span>
                </div>
                <div className="w-16" />
              </div>

              {/* Dashboard content */}
              <div className="flex h-[420px]">
                {/* Sidebar */}
                <div className="w-12 bg-[#080e1a] border-r border-slate-800/60 flex flex-col items-center py-4 gap-5">
                  {[
                    { icon: "⊞", active: true },
                    { icon: "📍", active: false },
                    { icon: "🔔", active: false },
                    { icon: "↔️", active: false },
                    { icon: "🏙️", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] cursor-pointer transition-colors ${
                        item.active ? "bg-cyan-500/20 text-cyan-400" : "text-slate-600 hover:text-slate-400"
                      }`}
                    >
                      {item.icon}
                    </div>
                  ))}
                  <div className="mt-auto">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-cyan-500 flex items-center justify-center text-[9px] font-bold text-black">
                      R
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 overflow-hidden p-4 space-y-3">
                  {/* Top row: Balance + modules */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* Balance card */}
                    <div className="col-span-1 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 border border-amber-500/20 rounded-xl p-3">
                      <div className="text-[9px] text-amber-400/70 font-mono mb-1">LAUNCH WINDOW</div>
                      <div className="text-lg font-black text-emerald-400 leading-none">GO</div>
                      <div className="text-[8px] text-slate-600 mt-1 flex items-center gap-1">
                        <span className="text-sky-400">95%</span> 기상 확률
                      </div>
                    </div>

                    {/* Module status cards */}
                    {serviceModules.slice(0, 2).map((mod) => (
                      <div key={mod.name} className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono text-slate-500">{mod.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <div className="text-xs font-bold text-white">{mod.uptime}</div>
                        <div className="text-[8px] text-slate-600">{mod.requests} req/hr</div>
                      </div>
                    ))}
                  </div>

                  {/* Charts row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] text-slate-500 font-mono">Ping 발송량</span>
                        <span className="text-[9px] text-cyan-400">+28.1%</span>
                      </div>
                      <MiniChart color="#06B6D4" />
                    </div>
                    <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] text-slate-500 font-mono">GRID 등록</span>
                        <span className="text-[9px] text-amber-400">+12.4%</span>
                      </div>
                      <MiniChart color="#F59E0B" />
                    </div>
                  </div>

                  {/* Activity feed */}
                  <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl p-3 flex-1">
                    <div className="text-[9px] text-slate-500 font-mono mb-2 uppercase tracking-wider">실시간 활동</div>
                    <div className="space-y-1.5">
                      {activityItems.slice(0, 4).map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + i * 0.12 }}
                          className="flex items-center gap-2"
                        >
                          <span
                            className={`text-[8px] font-mono px-1 py-0.5 rounded flex-shrink-0 ${
                              item.type === "PING"
                                ? "text-cyan-400 bg-cyan-400/10"
                                : item.type === "GRID"
                                ? "text-amber-400 bg-amber-400/10"
                                : item.type === "MOVE"
                                ? "text-emerald-400 bg-emerald-400/10"
                                : "text-violet-400 bg-violet-400/10"
                            }`}
                          >
                            {item.type}
                          </span>
                          <span className="text-[9px] text-slate-500 truncate flex-1">{item.desc}</span>
                          <span className="text-[8px] text-slate-700 flex-shrink-0">{item.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300">전체 모듈 정상 가동</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
