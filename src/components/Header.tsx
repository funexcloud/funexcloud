"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SlashButton from "@/components/ui/SlashButton";

const navLinks = [
  { label: "서비스", href: "#features" },
  { label: "AX", href: "#ax" },
  { label: "Care", href: "#care" },
  { label: "블로그", href: "#blog-studio" },
  { label: "가격", href: "#pricing" },
  { label: "철학", href: "#philosophy" },
  { label: "아카이브", href: "#archive" },
  { label: "인프라", href: "#mainnet" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`site-header fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-[#050505]/90 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="brand-mark absolute inset-0 rounded-lg opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="relative text-xs font-black tracking-tight text-white">FX</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-wide text-white">FUNEX</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-white">CLOUD</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/5 lg:px-4"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/product/funeral-directors"
            className="rounded-lg px-3 py-2 text-sm text-white transition-colors hover:bg-white/5 lg:px-4"
          >
            장례지도사 입점
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <SlashButton href="#pricing" label="상담 예약" variant="gradient" />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-white transition-colors hover:text-white/90 md:hidden"
          aria-label="메뉴"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-white transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/product/funeral-directors"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-white transition-colors hover:bg-white/5"
              >
                장례지도사 입점
              </Link>
              <div className="mt-3 border-t border-white/10 pt-3">
                <SlashButton href="#pricing" label="상담 예약" variant="gradient" className="justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
