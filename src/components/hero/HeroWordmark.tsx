"use client";

import { motion } from "framer-motion";

export default function HeroWordmark() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="hero-wordmark mx-auto mb-[clamp(16px,2.3vh,28px)] w-[min(88vw,578px)] text-center"
    >
      <p
        className="m-0 font-black leading-[0.92] tracking-[-0.04em] text-white drop-shadow-[0_18px_34px_rgba(0,0,0,0.28)]"
        style={{ fontSize: "clamp(2.75rem, 9vw, 5.25rem)" }}
      >
        Remember.
      </p>
      <p
        className="text-tv-gradient m-0 -mt-[clamp(6px,1.2vw,14px)] font-black leading-[0.92] tracking-[-0.04em] drop-shadow-[0_18px_34px_rgba(0,0,0,0.28)]"
        style={{ fontSize: "clamp(2.75rem, 9vw, 5.25rem)" }}
      >
        Then release.
      </p>
    </motion.div>
  );
}
