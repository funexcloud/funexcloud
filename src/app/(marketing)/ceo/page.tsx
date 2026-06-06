import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Cpu,
  FileText,
  Film,
  Gauge,
  Rocket,
  ShieldCheck,
  Telescope,
  Wrench,
} from "lucide-react";

import SlashButton from "@/components/ui/SlashButton";
import { ShineCard } from "@/components/ui/shine-card";
import { getPublishedPosts } from "@/lib/ceo-content";

const pillars = [
  {
    title: "추진력",
    label: "THRUST",
    description: "장례 현장의 오래된 공백을 끝까지 밀어붙이는 실행 속도.",
    icon: Rocket,
  },
  {
    title: "준비",
    label: "READINESS",
    description: "정책, 운영, 데이터, 고객 응대를 한 번에 받아낼 수 있는 기반.",
    icon: ShieldCheck,
  },
  {
    title: "도구",
    label: "TOOLS",
    description: "지도사가 바로 쓸 수 있는 화면과 자동화, 그리고 반복 가능한 시스템.",
    icon: Wrench,
  },
];

const chips = [
  "Founder",
  "CEO",
  "Funex Cloud",
  "장례 DX",
  "Product Builder",
  "Operations",
  "AI Workflow",
  "Brand System",
];

const gallery = [
  {
    src: "/hero/ceo-hero-main.png",
    title: "Launch",
    desc: "빈틈을 발견한 순간",
    position: "42% 52%",
  },
  {
    src: "/hero/funex-pilot-hero.jpg",
    title: "Cockpit",
    desc: "현장을 보는 조종석",
    position: "50% 50%",
  },
  {
    src: "/hero/ceo-hero-main.png",
    title: "Orbit",
    desc: "브랜드가 궤도에 오르는 장면",
    position: "58% 38%",
  },
  {
    src: "/hero/funex-pilot-hero.png",
    title: "Signal",
    desc: "다음 제품으로 이어지는 신호",
    position: "50% 58%",
  },
];

const finalCards = [
  {
    title: "CEO Note",
    desc: "장례 산업을 기술 산업으로만 보지 않고, 마지막을 다루는 운영 산업으로 해석합니다.",
    icon: Telescope,
  },
  {
    title: "Operating System",
    desc: "상담, 배차, 공유, 정산, 사후 케어가 하나의 흐름으로 연결되는 구조를 만듭니다.",
    icon: Cpu,
  },
  {
    title: "Whitepaper",
    desc: "철학과 실행 기록을 백서로 남기고, 공개 가능한 글만 엄선해 발행합니다.",
    icon: FileText,
  },
];

export default function CeoPage() {
  const posts = getPublishedPosts();

  return (
    <main className="marketing-shell min-h-screen bg-[#050505] text-white">
      <style>
        {`
          @keyframes ceo-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .ceo-marquee-track {
            animation: ceo-marquee 42s linear infinite;
          }
        `}
      </style>

      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <Image
          src="/hero/ceo-hero-main.png"
          alt="A rocket launching into a starry night sky"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[43%_50%]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-8 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="eyebrow-tv mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              FUNEX CLOUD CEO INSIGHT
            </p>
            <h1 className="text-4xl font-black leading-[1.05] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.82)] sm:text-5xl lg:text-7xl">
              장례 산업의 다음 궤도를
              <br />
              <span className="text-tv-gradient">기술과 철학으로 설계합니다</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.92)] sm:text-lg">
              현장의 품격을 지키면서 운영 속도와 투명성을 높이는 일. 이 페이지는 그
              방향에 대한 창업자의 관점, 실행 기록, 그리고 백서를 하나의 항로로 묶습니다.
            </p>
          </div>
        </div>

        <a
          href="#ceo-intro"
          className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/72 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] transition-colors hover:text-white sm:bottom-3"
        >
          <span>Scroll for more</span>
          <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </a>
      </section>

      <section
        id="ceo-intro"
        className="relative flex min-h-[82svh] items-center overflow-hidden border-t border-white/10 bg-[#050505] py-24"
      >
        <Image
          src="/hero/ceo-section-2.png"
          alt="A spacecraft above Earth in deep space"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.04)_0%,rgba(5,5,5,0.08)_45%,rgba(5,5,5,0.48)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-right">
            <p className="text-base leading-8 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.92)] sm:text-lg">
              어떤 이들은 고인의 마지막 가시는 길을 지키고, 또 어떤 이들은 복잡한 장례 행정을
              자동화하거나 시공간을 넘어 추모를 연결하고 전통의 무게에 도전합니다.
            </p>
            <p className="mt-10 text-2xl font-black leading-snug text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.92)] sm:text-3xl">
              우리 모두를 하나로 묶는 것은{" "}
              <span className="text-tv-gradient">무엇일까요?</span>
            </p>
            <p className="mt-10 text-base leading-8 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.92)] sm:text-lg">
              가장 엄숙한 순간을 위한 완벽한 계획, 기술로 내일을 바꾸겠다는 명확한 목적, 그리고
              완고한 산업의 내일을 혁신할 용기입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(49,130,246,0.10)_0%,transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow-tv mb-3">FLIGHT SYSTEM</p>
              <h2 className="text-3xl font-black text-white sm:text-5xl">
                다음 궤도는 <span className="text-tv-gradient">세 가지 힘</span>으로 오릅니다
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/68">
              창업자의 감각을 제품 언어로 바꾸고, 제품을 다시 현장의 운영 도구로 되돌리는
              순환 구조입니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <ShineCard key={pillar.title} className="bg-[#0b1120] p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3182F6]">
                      {pillar.label}
                    </span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#3182F6]/25 bg-[#3182F6]/10 text-[#3182F6]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{pillar.description}</p>
                </ShineCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-5">
        <div className="flex w-max ceo-marquee-track">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-4 px-2">
              {[...Array(8)].map((__, index) => (
                <span
                  key={`${groupIndex}-${index}`}
                  className="whitespace-nowrap font-mono text-xl font-black uppercase tracking-[0.18em] text-white/88 sm:text-3xl"
                >
                  장례식장 직원에서 실무자 · 장례법인과 공동운영기업의 대표이사 ≠ 독창적 서사를 가진 창업자
                  <span className="mx-4 text-[#3182F6]">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(49,130,246,0.10)_0%,transparent_54%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="eyebrow-tv mb-3">INFLECTION POINT</p>
            <h2 className="text-3xl font-black text-white sm:text-5xl">
              <span className="text-tv-gradient">50,000</span> 월간 사용자
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72">
              시장이 말을 걸기 시작한 변곡점. 이제 질문은 “가능한가”가 아니라 “어떤
              운영 체계로 확장할 것인가”입니다.
            </p>
          </div>

          <ShineCard className="bg-[#0b1120] p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Monthly signal
                </p>
                <p className="mt-2 text-5xl font-black text-white sm:text-7xl">50K</p>
              </div>
              <Gauge className="h-10 w-10 text-[#3182F6]" aria-hidden="true" />
            </div>
            <div className="flex h-36 items-end gap-2">
              {[28, 34, 31, 42, 48, 56, 64, 70, 82, 92, 100].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#3182F6] to-cyan-300"
                  style={{ height: `${height}%`, opacity: 0.35 + index * 0.055 }}
                />
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/62">
              숫자는 결과가 아니라 방향을 확인하는 계기입니다. 다음 단계는 제품의 속도가
              아니라 운영의 신뢰를 키우는 일입니다.
            </p>
          </ShineCard>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#080808] py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow-tv mb-3">FOUNDER STORY</p>
              <h2 className="text-3xl font-black text-white sm:text-5xl">
                장례 DX의 공백에서 시작했습니다
              </h2>
            </div>
            <div className="space-y-5">
              {[
                ["01", "현장은 이미 복잡했다", "상담, 일정, 이동, 문서, 정산이 서로 다른 도구와 기억에 흩어져 있었습니다."],
                ["02", "그러나 제품은 현장 밖에 있었다", "장례 산업의 언어를 이해하는 운영 소프트웨어는 충분하지 않았습니다."],
                ["03", "그래서 직접 조종석을 만들었다", "지도사와 운영자가 다음 행동을 바로 볼 수 있는 시스템을 설계하기 시작했습니다."],
              ].map(([step, title, desc]) => (
                <div key={step} className="grid gap-4 border-t border-white/10 py-5 sm:grid-cols-[80px_1fr]">
                  <span className="font-mono text-2xl font-black text-[#3182F6]">{step}</span>
                  <div>
                    <h3 className="text-xl font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex gap-2 overflow-x-auto pb-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="shrink-0 rounded-lg border border-white/12 bg-white/[0.04] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white/72"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-4 overflow-x-auto pb-3">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="relative h-72 w-[78vw] shrink-0 overflow-hidden rounded-lg border border-white/10 sm:w-[420px]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 78vw, 420px"
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3182F6]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-lg font-black text-white">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(213,0,249,0.07)_0%,transparent_58%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow-tv mb-4">PHILOSOPHY</p>
          <h2 className="text-4xl font-black leading-tight text-white sm:text-6xl">
            우주의 실수는
            <br />
            <span className="text-tv-gradient">마지막의 빈틈</span>입니다
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70">
            모두가 피하고 싶은 마지막 순간에도 운영은 필요합니다. Funex Cloud는 그 빈틈을
            기술로 메우되, 사람의 존엄과 현장의 판단을 지우지 않는 방향을 선택합니다.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#080808] py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow-tv mb-3">BRAND FILM</p>
              <h2 className="text-3xl font-black text-white sm:text-5xl">
                브랜드 필름이 들어갈 자리
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-white/62">
              발사 장면에서 조종석으로, 조종석에서 현장의 화면으로 이어지는 브랜드 필름
              슬롯입니다.
            </p>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
            <Image
              src="/hero/ceo-hero-main.png"
              alt="Brand film placeholder"
              fill
              sizes="100vw"
              quality={100}
              className="object-cover object-[50%_48%] opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm">
                <Film className="h-8 w-8" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(49,130,246,0.12)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ShineCard className="bg-[#0b1120] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow-tv mb-3">TAKE THE COCKPIT</p>
                <h2 className="text-3xl font-black text-white sm:text-5xl">
                  조종석에 앉으세요
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                  Funex Cloud는 관망하는 브랜드가 아니라, 현장과 함께 움직이는 운영
                  조종석입니다. 다음 백서와 제품 화면에서 그 구조를 확인하세요.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#insights"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#3182F6] px-6 text-sm font-bold text-white transition-colors hover:bg-[#256bd1]"
                >
                  백서 읽기
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <SlashButton href="https://funexcloud.com" label="메인으로" variant="gradient" />
              </div>
            </div>
          </ShineCard>
        </div>
      </section>

      <section id="insights" className="relative overflow-hidden border-t border-white/10 py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow-tv mb-3">CEO INSIGHTS</p>
            <h2 className="text-3xl font-black text-white sm:text-5xl">
              백서 <span className="text-tv-gradient">· 인사이트</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Funex Cloud가 바라보는 장례 산업의 운영, 기술, 브랜드 전환에 대한 기록입니다.
            </p>
          </div>

          <div className="mb-12 grid gap-5 md:grid-cols-3">
            {finalCards.map((card) => {
              const Icon = card.icon;

              return (
                <ShineCard key={card.title} className="bg-[#0b1120] p-6">
                  <Icon className="mb-8 h-7 w-7 text-[#3182F6]" aria-hidden="true" />
                  <h3 className="text-xl font-black text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{card.desc}</p>
                </ShineCard>
              );
            })}
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/ceo/${post.slug}`} className="group block">
                  <ShineCard className="h-full bg-[#0b1120] p-6">
                    <div className="flex h-full flex-col">
                      <div className="mb-8 flex items-center justify-between gap-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#3182F6]/25 bg-[#3182F6]/10 text-[#3182F6]">
                          <FileText className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white/55">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-black leading-tight text-white transition-colors group-hover:text-[#3182F6]">
                        {post.title}
                      </h3>
                      <p className="mt-4 flex-1 text-sm leading-7 text-white/68">
                        {post.summary}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">
                        읽기
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </ShineCard>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-slate-900/40 p-8 text-white/65">
              공개된 CEO 인사이트가 아직 없습니다.
            </div>
          )}

          <footer className="mt-20 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center">
            <p>Funex Cloud CEO · 장례 산업의 다음 운영 궤도</p>
            <div className="flex gap-4">
              <Link href="https://funexcloud.com" className="hover:text-white">
                funexcloud.com
              </Link>
              <a href="#" className="hover:text-white">
                제휴/문의
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
