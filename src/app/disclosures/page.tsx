import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IridioDisclosures from "@/components/IridioDisclosures";

export const metadata: Metadata = {
  title: "IRI 공시 · 고지 | Funex Cloud",
  description:
    "이리디오(Iridio) 메인넷·IRI 토큰 관련 기술 공시 및 면책 고지. 투자 권유가 아닙니다.",
};

export default function DisclosuresPage() {
  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">
      <Header />
      <main className="pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
            ← 랜딩으로
          </Link>
          <h1 className="mt-6 text-3xl font-black text-white sm:text-4xl">IRI 공시 · 고지</h1>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            본 페이지의 수치·로드맵은 기술·운영 설계 공시 목적이며, 증권·가상자산 투자 권유·수익
            보장·상장 시점 확약이 아닙니다.
          </p>
        </div>
        <IridioDisclosures />
      </main>
      <Footer />
    </div>
  );
}
