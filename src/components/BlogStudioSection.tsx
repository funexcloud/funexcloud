"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SlashButton from "@/components/ui/SlashButton";
import { ShineCard } from "@/components/ui/shine-card";
import {
  FUNEX_BLOG_STUDIO,
  blogStudioAiFeatures,
  blogStudioSteps,
  blogTemplates,
} from "@/lib/funex-blog-studio";

export default function BlogStudioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog-studio" className="relative overflow-hidden py-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow-tv mb-3">BLOG STUDIO · AI</p>
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            <span className="text-tv-gradient">블로그</span>와 템플릿 사이트,
            <br className="hidden sm:block" />
            AI가 만들어 드립니다
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {FUNEX_BLOG_STUDIO.description}
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              AI site builder flow
            </p>
            <ol className="space-y-4">
              {blogStudioSteps.map((item, i) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-white/10 bg-slate-900/40 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 font-mono text-xs font-bold text-amber-400">
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
              <SlashButton
                href={FUNEX_BLOG_STUDIO.url}
                label="블로그 만들기"
                variant="gradient"
              />
              <a
                href={FUNEX_BLOG_STUDIO.url}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 font-mono text-xs text-white/80 transition-colors hover:border-amber-500/40 hover:text-white"
              >
                blog.funexcloud.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-amber-500/10 blur-2xl" />
            <ShineCard className="relative overflow-hidden bg-[#0b1120] p-0">
              <div className="border-b border-slate-800/80 bg-[#0d1628] px-5 py-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  AI Template Preview
                </p>
                <p className="mt-1 text-sm text-white">
                  입력: &quot;울산 기반 우주 추모·장례 안내 블로그&quot;
                </p>
              </div>

              <div className="space-y-4 p-5">
                <div className="grid grid-cols-2 gap-2">
                  {blogTemplates.map((tpl) => (
                    <div
                      key={tpl.id}
                      className={`rounded-lg border p-3 ${
                        tpl.id === "magazine"
                          ? "border-amber-500/40 bg-amber-500/10"
                          : "border-slate-800/60 bg-slate-900/40"
                      }`}
                    >
                      <p className="text-xs font-bold text-white">{tpl.name}</p>
                      <p className="mt-0.5 text-[10px] text-slate-500">{tpl.desc}</p>
                      {tpl.id === "magazine" && (
                        <p className="mt-1 font-mono text-[9px] text-amber-400">AI 추천</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-slate-800/60 bg-slate-900/30 p-4 font-mono text-[10px] leading-relaxed text-slate-400">
                  <p className="text-amber-400">{"// generated meta"}</p>
                  <p className="mt-1 text-slate-300">
                    title: 울산 우주 추모 가이드 | Funex
                  </p>
                  <p>canonical: /blog/ulsan-memorial</p>
                  <p>sitemap: ready · json-ld: Article</p>
                  <p className="mt-2 text-emerald-400">publish: launch_ready (92%)</p>
                </div>

                <ul className="space-y-2">
                  {blogStudioAiFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-white/75">
                      <svg
                        className="h-3.5 w-3.5 shrink-0 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </ShineCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
