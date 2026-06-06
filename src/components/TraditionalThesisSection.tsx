"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SlashButton from "@/components/ui/SlashButton";
import { ShineCard } from "@/components/ui/shine-card";
import {
  ARCHIVE,
  archivePublications,
  archiveQuotes,
  archiveThemes,
} from "@/lib/funex-traditional-thesis";

export default function TraditionalThesisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="archive" className="relative overflow-hidden py-28" aria-label="아카이브">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.07)_0%,transparent_50%)]" />
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,80,40,0.06)_0%,transparent_45%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center lg:mb-16">
          <p className="eyebrow-tv mb-3">{ARCHIVE.eyebrow}</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            <span className="text-tv-gradient">{ARCHIVE.titleKo}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {ARCHIVE.tagline}
          </p>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 lg:min-h-[560px]"
          >
            <Image
              src={ARCHIVE.heroImage}
              alt={ARCHIVE.heroImageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040a14] via-[#040a14]/40 to-transparent" />
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#040a14]/80 via-transparent to-transparent lg:via-[#040a14]/30" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sky-300/80">
                Tradition × Orbit
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                {ARCHIVE.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="brand-mark flex h-8 w-8 items-center justify-center rounded-lg">
                  <span className="text-[10px] font-black text-white">FX</span>
                </div>
                <span className="text-xs font-bold tracking-widest text-white/80">
                  FUNEX CLOUD
                </span>
              </div>
            </div>

            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-1/2 top-[38%] h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/60 to-transparent"
              aria-hidden
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <ShineCard className="border-amber-500/15 bg-gradient-to-br from-amber-950/30 to-slate-900/50 p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400/80">
                Editorial note
              </p>
              <blockquote className="mt-3 border-l-2 border-amber-400/40 pl-4 text-lg font-medium leading-relaxed text-white">
                {archiveQuotes[0]}
              </blockquote>
              <p className="mt-3 text-sm italic text-white/55">{archiveQuotes[1]}</p>
            </ShineCard>

            <div className="grid gap-3 sm:grid-cols-2">
              {archiveThemes.map((theme, i) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.06 }}
                >
                  <ShineCard className="h-full border-white/10 bg-slate-900/45 p-4">
                    <span className="rounded border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-amber-300">
                      {theme.tag}
                    </span>
                    <p className="mt-2 text-sm font-bold text-white">{theme.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                      {theme.description}
                    </p>
                  </ShineCard>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                아카이브 목록
              </p>
              <ul className="space-y-2">
                {archivePublications.map((pub, i) => (
                  <motion.li
                    key={pub.title}
                    initial={{ opacity: 0, x: 8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3">
                      <span className="w-14 shrink-0 font-mono text-[10px] text-sky-400/90">
                        {pub.series}
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-medium text-white group-hover:text-sky-100">
                        {pub.title}
                      </span>
                      <span
                        className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] ${
                          pub.status === "Published"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : pub.status === "In review"
                              ? "bg-amber-500/15 text-amber-400"
                              : "bg-slate-700/50 text-slate-400"
                        }`}
                      >
                        {pub.status}
                      </span>
                      <span className="hidden shrink-0 font-mono text-[10px] text-slate-500 sm:inline">
                        {pub.pages}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <SlashButton href="#archive" label="아카이브 목록" variant="gradient" />
              <SlashButton href="#philosophy" label="철학 · 궤도 읽기" variant="space" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
