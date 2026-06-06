"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SlashButton from "@/components/ui/SlashButton";
import { ShineCard } from "@/components/ui/shine-card";
import {
  FUNEX_MAINNET,
  IRIDIO_MAINNET,
  IRIDIO_TOKENOMICS_DISCLAIMER,
  iridioTokenomicsHighlights,
  mainnetAnchorPipeline,
  mainnetCapabilities,
  mainnetDesignPrinciples,
  mainnetDocLinks,
  mainnetLayers,
  mainnetRecentAnchors,
} from "@/lib/funex-mainnet";
import {
  ORBIT_ENGINE,
  orbitEngineModules,
  orbitFuneralModules,
} from "@/lib/funex-orbit-engine";

const moduleTone: Record<string, string> = {
  MISSION: "text-violet-400 bg-violet-400/10",
  GRID: "text-amber-400 bg-amber-400/10",
  PING: "text-cyan-400 bg-cyan-400/10",
  MOVE: "text-emerald-400 bg-emerald-400/10",
  CARE: "text-rose-400 bg-rose-400/10",
};

function ChainBadges({ compact = false }: { compact?: boolean }) {
  const { settlement, iridio } = FUNEX_MAINNET;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 flex flex-wrap items-center gap-3"
    >
      {!compact ? (
      <div className="flex items-center gap-2.5 rounded-xl border border-violet-400/35 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 px-3 py-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/25 font-mono text-[10px] font-black text-violet-200">
          {iridio.token.symbol}
        </span>
        <div>
          <p className="text-xs font-bold text-white">
            {iridio.nameKo}{" "}
            <span className="font-normal text-white/50">({iridio.name})</span>
          </p>
          <p className="font-mono text-[10px] text-violet-300/90">
            {iridio.token.supplyDisplay}
            {iridio.token.unitLabel} · {iridio.token.symbol}
          </p>
        </div>
      </div>
      ) : null}
      <div className="flex items-center gap-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 px-3 py-2">
        <Image
          src="/brand/polygon.svg"
          alt=""
          width={22}
          height={19}
          className="shrink-0"
        />
        <div>
          <p className="text-xs font-bold text-white">{settlement.name}</p>
          <p className="font-mono text-[10px] text-purple-300/90">
            chainId {settlement.chainId} · {settlement.symbol}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-[#627EEA]/30 bg-[#627EEA]/10 px-3 py-2">
        <Image src="/brand/evm.svg" alt="" width={28} height={28} className="shrink-0" />
        <div>
          <p className="text-xs font-bold text-white">EVM 호환</p>
          <p className="text-[10px] text-white/60">Ethereum L1이 아닌 Polygon 실행</p>
        </div>
      </div>
    </motion.div>
  );
}

type MainnetSectionProps = {
  /** landing: 토큰 가격·토크노믹스 축소, /disclosures 로 유도 */
  variant?: "landing" | "full";
};

export default function MainnetSection({ variant = "full" }: MainnetSectionProps) {
  const isLanding = variant === "landing";
  const ref = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const designInView = useInView(designRef, { once: true, margin: "-60px" });
  const { settlement } = FUNEX_MAINNET;

  return (
    <section id="mainnet" className="relative overflow-hidden py-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(130,71,229,0.1)_0%,transparent_55%)]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(41,98,255,0.06)_0%,transparent_50%)]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/35 to-transparent"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow-tv mb-3">
              {isLanding ? "ON-CHAIN INFRA" : `${IRIDIO_MAINNET.nameKo} MAINNET · ${IRIDIO_MAINNET.token.symbol}`}
            </p>
            <h2 className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              {isLanding ? (
                <>
                  <span className="text-tv-gradient">Polygon 앵커</span>
                  <br />
                  <span className="text-2xl text-white/90 sm:text-3xl lg:text-4xl">
                    · {ORBIT_ENGINE.name}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-tv-gradient">{IRIDIO_MAINNET.nameKo}</span>
                  <br />
                  <span className="text-2xl text-white/90 sm:text-3xl lg:text-4xl">
                    {IRIDIO_MAINNET.name} Mainnet
                  </span>
                </>
              )}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-white">
              {isLanding ? (
                <>
                  Funex Cloud는 장례·상조 운영 데이터의 무결성 증명을 위해{" "}
                  <span className="font-semibold text-purple-300">Polygon PoS</span>
                  (chainId{" "}
                  <span className="font-mono text-cyan-400">{settlement.chainId}</span>)에 해시만
                  앵커합니다. 실행 파이프라인은{" "}
                  <span className="font-semibold text-cyan-300">{ORBIT_ENGINE.name}</span>가
                  담당합니다. 메인넷·토큰({IRIDIO_MAINNET.token.symbol}) 구조는 별도 고지
                  페이지에서 확인할 수 있습니다.
                </>
              ) : (
                <>
                  Funex Cloud의 메인넷 이름은{" "}
                  <span className="font-semibold text-violet-300">
                    {IRIDIO_MAINNET.nameKo} ({IRIDIO_MAINNET.name})
                  </span>
                  , 네이티브 토큰은{" "}
                  <span className="font-mono font-semibold text-cyan-300">
                    {IRIDIO_MAINNET.token.symbol}
                  </span>
                  입니다. 총{" "}
                  <span className="text-white/90">
                    {IRIDIO_MAINNET.token.supplyDisplay}
                    {IRIDIO_MAINNET.token.unitLabel}
                  </span>
                  를 기준가{" "}
                  <span className="font-semibold text-amber-300">
                    {IRIDIO_MAINNET.pricing.issueDisplay}
                  </span>
                  /{IRIDIO_MAINNET.token.unitLabel}에서 장기 목표{" "}
                  <span className="font-semibold text-fuchsia-300">
                    {IRIDIO_MAINNET.pricing.targetDisplay}
                  </span>
                  /{IRIDIO_MAINNET.token.unitLabel}까지 설계합니다. 실행·앵커는{" "}
                  <span className="font-semibold text-cyan-300">{ORBIT_ENGINE.name}</span>와{" "}
                  <span className="font-semibold text-purple-300">Polygon PoS</span>
                  (chainId{" "}
                  <span className="font-mono text-cyan-400">{settlement.chainId}</span>)가
                  담당합니다.
                </>
              )}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-white/75">
              우주·궤도 비유는 브랜드 철학이고, 실제 제품은{" "}
              <span className="text-white/90">부고·묘지·이장·상담·미션</span> 같은 전국
              장례·상조 현장 운영입니다. 상담 원문·PII는 DB에만 두고 Polygon에는 해시만
              올립니다.
            </p>

            {isInView ? <ChainBadges compact={isLanding} /> : null}

            {isLanding ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mb-8 rounded-2xl border border-violet-500/20 bg-slate-900/50 p-4 sm:p-5"
              >
                <p className="text-sm leading-relaxed text-white/80">
                  {IRIDIO_MAINNET.nameKo}({IRIDIO_MAINNET.token.symbol}) 토큰·공급·가격 관련
                  수치는 <strong className="text-white">투자 권유가 아닌</strong> 기술·로드맵
                  공시 목적입니다. 상세 수치와 면책은 고지 페이지를 참고하세요.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <SlashButton href="/disclosures" label="IRI 공시 · 고지" variant="gradient" />
                  <SlashButton
                    href={FUNEX_MAINNET.urls.explorer}
                    label="Polygonscan"
                    variant="space"
                  />
                </div>
              </motion.div>
            ) : null}

            {!isLanding ? (
            <motion.div
              id="iridio-tokenomics"
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-8 rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-950/50 to-slate-900/60 p-4 sm:p-5"
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/90">
                {IRIDIO_MAINNET.token.symbol} Tokenomics
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {iridioTokenomicsHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-black/25 px-3 py-2.5 text-center sm:text-left"
                  >
                    <p className="text-[9px] uppercase tracking-wider text-white/50">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-white">{item.value}</p>
                    <p className="mt-0.5 font-mono text-[10px] text-violet-300/80">{item.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <motion.div className="mb-1.5 flex justify-between font-mono text-[10px] text-white/50">
                  <span>기준가 {IRIDIO_MAINNET.pricing.issueDisplay}</span>
                  <span>목표 {IRIDIO_MAINNET.pricing.targetDisplay}</span>
                </motion.div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 via-violet-400 to-fuchsia-400"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "0.83%" } : {}}
                    transition={{ duration: 1.2, delay: 0.35 }}
                    title={`기준가 대비 목표 (${IRIDIO_MAINNET.pricing.issueDisplay} → ${IRIDIO_MAINNET.pricing.targetDisplay})`}
                  />
                </div>
                <p className="mt-2 text-[10px] leading-relaxed text-white/45">
                  {IRIDIO_TOKENOMICS_DISCLAIMER}
                </p>
              </div>
            </motion.div>
            ) : null}

            <motion.div
              id="orbit-engine"
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mb-8 rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-4 sm:p-5"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/90">
                  {ORBIT_ENGINE.name} · subsystems
                </p>
                <span className="rounded border border-white/10 px-2 py-0.5 font-mono text-[9px] text-white/50">
                  ping: Messaging Engine → Orbit Relay
                </span>
              </div>
              <div className="space-y-2">
                {orbitEngineModules.map((mod) => (
                  <a
                    key={mod.id}
                    href={mod.href}
                    className={`block rounded-xl border p-3 transition-colors hover:bg-white/5 ${mod.accent}`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-bold text-white">{mod.codeName}</p>
                      <p className="font-mono text-[10px] text-white/45">{mod.legacyName}</p>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-cyan-300/90">{mod.role}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      {mod.description}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {[
                { label: "Polygon", value: `chain ${FUNEX_MAINNET.metrics.chainId}` },
                { label: "블록 시간", value: FUNEX_MAINNET.metrics.blockTime },
                { label: "앵커 가스", value: FUNEX_MAINNET.metrics.settlementGas },
                { label: "앵커 방식", value: FUNEX_MAINNET.metrics.anchorModel },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/10 bg-slate-900/50 px-3 py-3 text-center"
                >
                  <div className="font-mono text-sm font-bold text-cyan-400">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
                    {m.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-8 space-y-4"
            >
              {mainnetCapabilities.map((cap) => (
                <li key={cap.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-sm font-semibold text-white">{cap.title}</p>
                    <p className="mt-0.5 text-sm text-white/80">{cap.description}</p>
                  </motion.div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <SlashButton
                href={FUNEX_MAINNET.urls.explorer}
                label="Polygonscan"
                variant="gradient"
              />
              <SlashButton
                href={FUNEX_MAINNET.urls.polygonDocs}
                label="Polygon PoS 문서"
                variant="space"
              />
              <SlashButton
                href={FUNEX_MAINNET.urls.funexDocs}
                label="Funex 앵커 설계"
                variant="space"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="grid gap-2 sm:grid-cols-3"
            >
              {mainnetDocLinks.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-slate-900/40 p-3 transition-colors hover:border-purple-500/30 hover:bg-slate-900/70"
                >
                  <p className="text-xs font-semibold text-white">{doc.title}</p>
                  <p className="mt-1 text-[10px] leading-snug text-white/60">
                    {doc.description}
                  </p>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-purple-500/10 blur-2xl" />
            <ShineCard className="relative overflow-hidden bg-[#0b1120] p-0">
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0d1628] px-4 py-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/brand/polygon.svg"
                    alt=""
                    width={18}
                    height={16}
                    className="opacity-90"
                  />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-emerald-400">IRIDIO LIVE</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  {IRIDIO_MAINNET.token.symbol} · {settlement.shortName} {settlement.chainId}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-px border-b border-slate-800/80 bg-slate-800/40 text-center font-mono text-[10px]">
                <motion.div className="bg-[#0d1628] px-2 py-2">
                  <p className="text-slate-500">Supply</p>
                  <p className="font-bold text-violet-300">{IRIDIO_MAINNET.token.supplyDisplay}</p>
                </motion.div>
                <motion.div className="bg-[#0d1628] px-2 py-2">
                  <p className="text-slate-500">Issue</p>
                  <p className="font-bold text-amber-300/90">{IRIDIO_MAINNET.pricing.issueDisplay}</p>
                </motion.div>
                <motion.div className="bg-[#0d1628] px-2 py-2">
                  <p className="text-slate-500">Target</p>
                  <p className="font-bold text-fuchsia-300/90">{IRIDIO_MAINNET.pricing.targetDisplay}</p>
                </motion.div>
              </div>

              <motion.div className="space-y-2 p-4 font-mono text-[11px] sm:text-xs">
                <div className="mb-3 flex items-center justify-between text-slate-500">
                  <span>최근 앵커 트랜잭션</span>
                  <a
                    href={FUNEX_MAINNET.urls.explorer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 transition-colors hover:text-purple-300"
                  >
                    Polygonscan →
                  </a>
                </div>
                {mainnetRecentAnchors.map((row, i) => (
                  <motion.div
                    key={row.tx}
                    initial={{ opacity: 0, x: 12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-900/40 px-3 py-2.5"
                  >
                    <span className="w-[4.5rem] shrink-0 text-purple-400/90">{row.tx}</span>
                    <span
                      className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold ${
                        moduleTone[row.module] ?? "text-slate-400 bg-slate-800"
                      }`}
                    >
                      {row.module}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-slate-400">{row.label}</span>
                    <span className="shrink-0 text-slate-600">{row.gas}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="border-t border-slate-800/60 bg-slate-950/50 px-4 py-3">
                <p className="text-[10px] leading-relaxed text-slate-500">
                  GRID · Ping · Move · Mission · Care 이벤트가 Polygon PoS에 배치
                  앵커됩니다. 실행 환경은{" "}
                  <a
                    href={FUNEX_MAINNET.urls.polygonArchitecture}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400/90 hover:underline"
                  >
                    Heimdall + Bor
                  </a>{" "}
                  아키텍처를 따릅니다.
                </p>
              </div>
            </ShineCard>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 rounded-xl border border-purple-500/30 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <Image src="/brand/polygon.svg" alt="" width={14} height={12} />
                <span className="text-[10px] font-mono text-purple-300">
                  Polygon PoS · finalized
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 장례 모듈 ↔ Orbit */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-white/10 bg-slate-950/40 p-5 sm:p-6"
        >
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Funeral operations · not just space theme
          </p>
          <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
            전국 <span className="text-cyan-400">장례·상조</span> 모듈이 Orbit 위를 돕니다
          </h3>
          <p className="mb-5 max-w-3xl text-sm leading-relaxed text-white/70">
            {ORBIT_ENGINE.tagline}. 미션·궤도 스토리는 유족에게 ‘귀환과 연결’을 전하는
            언어이고, 아래 표는 실제로 연동·운영 중인 SaaS 축입니다.
          </p>
          <motion.div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-slate-500">
                  <th className="pb-2 pr-4 font-medium">모듈</th>
                  <th className="pb-2 pr-4 font-medium">장례 현장 역할</th>
                  <th className="pb-2 font-medium">Orbit Engine</th>
                </tr>
              </thead>
              <tbody>
                {orbitFuneralModules.map((row) => (
                  <tr key={row.code} className="border-b border-white/5 text-white/85">
                    <td className="py-2.5 pr-4 font-mono font-bold text-cyan-400">
                      {row.code}
                    </td>
                    <td className="py-2.5 pr-4">{row.label}</td>
                    <td className="py-2.5 font-mono text-[11px] text-purple-300/90 sm:text-xs">
                      {row.engine}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>

        {/* 설계 방식 */}
        <motion.div
          id="mainnet-design"
          ref={designRef}
          initial={{ opacity: 0, y: 40 }}
          animate={designInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mt-24 border-t border-white/10 pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={designInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="eyebrow-tv mb-3">ARCHITECTURE</p>
            <h3 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
              <span className="text-tv-gradient">설계 방식</span> · {ORBIT_ENGINE.name} → Polygon
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              {ORBIT_ENGINE.nameKo}가 발송·동기화·앵커를 실행하고,{" "}
              <span className="text-purple-300">Polygon</span>은 불변 증명·정산만 담당합니다.
              장례 현장 데이터는 오프체인, 감사용 해시만 온체인 — 하이브리드 구조입니다.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={designInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Layer stack (top → bottom)
              </p>
              <div className="space-y-3">
                {mainnetLayers.map((layer, i) => (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={designInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.08 }}
                  >
                    <ShineCard className={`bg-gradient-to-r p-4 sm:p-5 ${layer.accent}`}>
                      <div className="flex items-start gap-3">
                        <span className="shrink-0 rounded border border-white/15 bg-black/30 px-2 py-0.5 font-mono text-[10px] font-bold text-white/90">
                          {layer.id}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-white">{layer.name}</p>
                          <p className="mt-0.5 font-mono text-[10px] text-cyan-400/90">
                            {layer.subtitle}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                    </ShineCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={designInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-8"
            >
              <motion.div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Design principles
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {mainnetDesignPrinciples.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={designInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="rounded-xl border border-white/10 bg-slate-900/40 p-4"
                    >
                      <p className="text-sm font-semibold text-white">{p.title}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                        {p.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Anchor pipeline
                </p>
                <ShineCard className="bg-[#0b1120] p-4 sm:p-5">
                  <div className="relative">
                    <motion.div
                      className="absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-purple-500/50 via-indigo-500/40 to-cyan-500/30"
                      aria-hidden
                    />
                    <ol className="space-y-4">
                      {mainnetAnchorPipeline.map((item, i) => (
                        <motion.li
                          key={item.step}
                          initial={{ opacity: 0, x: 8 }}
                          animate={designInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.35 + i * 0.07 }}
                          className="relative flex gap-4 pl-1"
                        >
                          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-500/40 bg-slate-950 font-mono text-[10px] font-bold text-purple-300">
                            {item.step}
                          </span>
                          <div className="min-w-0 pt-0.5">
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                            <p className="font-mono text-[11px] text-slate-500">{item.detail}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                </ShineCard>
              </div>

              <p className="text-center text-xs text-white/60 sm:text-left">
                Polygon PoS 개요·노드·아키텍처는{" "}
                <a
                  href={FUNEX_MAINNET.urls.polygonDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline-offset-2 hover:underline"
                >
                  공식 문서
                </a>
                를, Funex 앵커·ABI는{" "}
                <a
                  href={FUNEX_MAINNET.urls.funexDocs}
                  className="text-cyan-400 underline-offset-2 hover:underline"
                >
                  내부 기술 문서
                </a>
                에서 확인할 수 있습니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
