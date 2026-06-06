"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  IRIDIO_MAINNET,
  IRIDIO_TOKENOMICS_DISCLAIMER,
  iridioTokenomicsHighlights,
} from "@/lib/funex-mainnet";
import { METRICS_FOOTNOTE } from "@/lib/site-copy";

const legalBullets = [
  "본 문서는 Funex Cloud 플랫폼·메인넷 설계를 설명하기 위한 기술 공시이며, 특정 금융상품·가상자산의 매매·권유를 구성하지 않습니다.",
  "표시된 목표 가격·공급 구조는 내부 로드맵 가정이며, 실제 시장 가격·유동성·상장·규제 승인을 보장하지 않습니다.",
  "투자 판단은 본 페이지만으로 이루어져서는 안 되며, 관련 법령·규정·전문가 자문을 따르십시오.",
  `운영·발송 등 플랫폼 지표는 ${METRICS_FOOTNOTE}이며, 본 페이지의 토큰 수치와 별도입니다.`,
];

export default function IridioDisclosures() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        id="iridio-tokenomics"
        className="rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-950/50 to-slate-900/60 p-5 sm:p-6"
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/90">
          {IRIDIO_MAINNET.nameKo} ({IRIDIO_MAINNET.name}) · {IRIDIO_MAINNET.token.symbol}
        </p>
        <motion.div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {iridioTokenomicsHighlights.map((item) => (
            <motion.div
              key={item.label}
              className="rounded-xl border border-white/10 bg-black/25 px-3 py-2.5"
            >
              <p className="text-[9px] uppercase tracking-wider text-white/50">{item.label}</p>
              <p className="mt-0.5 text-sm font-bold text-white">{item.value}</p>
              <p className="mt-0.5 font-mono text-[10px] text-violet-300/80">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-4 text-xs leading-relaxed text-white/55">{IRIDIO_TOKENOMICS_DISCLAIMER}</p>
      </motion.div>

      <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/75">
        {legalBullets.map((text) => (
          <li key={text} className="flex gap-2">
            <span className="text-violet-400">·</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
