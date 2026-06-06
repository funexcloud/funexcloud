"use client";

import Image from "next/image";

/** TradingView promo footer 배경 (rocket-flight-desktop-dark) — 로컬 미러 */
const FOOTER_ROCKET_BG = "/footer/rocket-flight-desktop-dark.jpg";

export default function FooterRememberRelease() {
  return (
    <section
      className="relative mt-6 min-h-[min(78vh,720px)] overflow-hidden border-t border-slate-800/50 sm:min-h-[min(82vh,820px)] lg:min-h-[960px]"
      aria-label="Remember. Then release."
    >
      <div
        className="pointer-events-none absolute inset-0 bottom-0 left-[-80px] z-0 hidden bg-[length:auto_92%] bg-[left_bottom] bg-no-repeat opacity-[0.58] sm:left-[-140px] sm:block md:left-[-200px] lg:bg-[length:auto_96%]"
        style={{ backgroundImage: `url(${FOOTER_ROCKET_BG})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#040a14] via-[#040a14]/25 to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-0 sm:hidden">
        <Image
          src={FOOTER_ROCKET_BG}
          alt=""
          fill
          className="object-cover object-[18%_bottom] opacity-50"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 flex min-h-[inherit] flex-col justify-end px-4 pb-10 pt-24 sm:px-8 sm:pb-14">
        <p className="mx-auto w-full max-w-[100%] text-center font-light leading-[1.05] tracking-[-0.02em] text-white/[0.88] [font-size:clamp(1.125rem,3.4vw,4.25rem)] sm:tracking-[-0.03em] lg:[font-size:clamp(1.5rem,3vw,5rem)]">
          Remember. Then release.
        </p>
      </div>
    </section>
  );
}
