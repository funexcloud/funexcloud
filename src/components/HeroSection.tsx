"use client";

import { motion } from "framer-motion";
import HeroAurora from "@/components/hero/HeroAurora";
import SpaceHeroArt from "@/components/hero/SpaceHeroArt";
import HeroWordmark from "@/components/hero/HeroWordmark";
import HeroMissionCard from "@/components/hero/HeroMissionCard";
import SlashButton from "@/components/ui/SlashButton";
import { HERO_TAGLINE } from "@/lib/site-copy";

export default function HeroSection() {
  return (
    <section className="space-hero relative isolate z-0 flex min-h-[100svh] items-center justify-center overflow-hidden pt-16 text-center">
      <div className="space-hero__sky" aria-hidden="true" />
      <HeroAurora variant="hero" />
      <SpaceHeroArt />

      <div className="space-hero__content -translate-y-[1vh] px-6 sm:px-8">
        <motion.div className="mx-auto max-w-[620px]">
          <h1 className="m-0 grid justify-items-center gap-[clamp(16px,2.3vh,28px)]">
            <HeroWordmark />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[clamp(1.05rem,2vw,1.5rem)] font-medium leading-[1.45] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)]"
            >
              {HERO_TAGLINE}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="max-w-md text-sm leading-relaxed text-white/70"
            >
              GRID · Ping · Move · Care — 전국 장례·상조 현장을 하나의 운영 체계로 연결합니다.
            </motion.p>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="cta mt-[clamp(28px,4vh,42px)] grid justify-items-center"
          >
            <SlashButton href="#pricing" label="무료 상담 예약" variant="space" className="cta__button" />
          </motion.div>
        </motion.div>
      </div>

      <HeroMissionCard />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-white/45" />
        </motion.div>
      </motion.div>
    </section>
  );
}
