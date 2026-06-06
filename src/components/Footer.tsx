"use client";

import FooterRememberRelease from "@/components/FooterRememberRelease";

const footerLinks = [
  {
    title: "서비스",
    links: [
      { label: "AX Contact Center", href: "https://ax.funexcloud.com" },
      { label: "Funex Care", href: "https://care.funexcloud.com" },
      { label: "Blog Studio (AI)", href: "https://blog.funexcloud.com" },
      { label: "아카이브", href: "#archive" },
      { label: "GRID 묘지관리", href: "#features" },
      { label: "Ping 부고발송", href: "#features" },
      { label: "Move 이장관리", href: "https://move.funexcloud.com" },
      { label: "Ulsan 거점서비스", href: "#pricing" },
      { label: "API 연동", href: "#pricing" },
    ],
  },
  {
    title: "인프라",
    links: [
      { label: "이리디오 (Iridio) · IRI", href: "/disclosures" },
      { label: "Orbit Engine (궤도 엔진)", href: "#orbit-engine" },
      { label: "Polygon 앵커 레이어", href: "#mainnet" },
      { label: "Polygonscan", href: "https://polygonscan.com" },
      { label: "Polygon PoS 문서", href: "https://docs.polygon.technology/pos/" },
      { label: "Funex 앵커 설계", href: "https://docs.funexcloud.com/mainnet" },
      { label: "설계 방식", href: "#mainnet-design" },
    ],
  },
  {
    title: "콘솔",
    links: [
      { label: "대시보드", href: "#pricing" },
      { label: "미션 관리", href: "#philosophy" },
      { label: "미션 타임라인", href: "#philosophy" },
      { label: "발송 이력", href: "#features" },
      { label: "통계 리포트", href: "#features" },
    ],
  },
  {
    title: "파트너",
    links: [
      { label: "파트너 프로그램", href: "#pricing" },
      { label: "파트너 신청", href: "#pricing" },
      { label: "파트너 포털", href: "#pricing" },
      { label: "파트너 FAQ", href: "#pricing" },
    ],
  },
  {
    title: "문서",
    links: [
      { label: "시작 가이드", href: "#features" },
      { label: "API 레퍼런스", href: "#pricing" },
      { label: "SDK 다운로드", href: "#pricing" },
      { label: "릴리즈 노트", href: "#pricing" },
      { label: "상태 페이지", href: "#pricing" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "소개", href: "#philosophy" },
      { label: "Blog Studio (AI)", href: "https://blog.funexcloud.com" },
      { label: "채용", href: "#pricing" },
      { label: "언론 보도", href: "#pricing" },
      { label: "문의하기", href: "#pricing" },
    ],
  },
  {
    title: "법적 고지",
    links: [
      { label: "이용약관", href: "#pricing" },
      { label: "개인정보처리방침", href: "#pricing" },
      { label: "쿠키 정책", href: "#pricing" },
      { label: "SLA 정책", href: "#pricing" },
      { label: "보안 센터", href: "#pricing" },
      { label: "IRI 공시 · 고지", href: "/disclosures" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-[#040a14]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white transition-colors duration-150 hover:text-white/85"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800/60 pt-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-400 to-cyan-500 opacity-80" />
                <span className="relative text-xs font-black tracking-tight text-black">FX</span>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold tracking-wide text-white">FUNEX CLOUD</span>
                </div>
                <p className="mt-0.5 max-w-xs text-xs text-white">
                  대한민국 장례 인프라를 디지털로 통합하는 클라우드 플랫폼
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <span className="flex items-center gap-2 text-xs text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                모든 시스템 정상
              </span>

              <div className="flex items-center gap-3">
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com",
                    icon: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Twitter",
                    href: "https://twitter.com",
                    icon: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com",
                    icon: (
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white transition-colors hover:text-white/85"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterRememberRelease />

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-800/40 pt-6 sm:flex-row">
            <p className="text-xs text-white">© 2025 Funex Cloud Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {["이용약관", "개인정보처리방침", "쿠키설정"].map((item) => (
                <a key={item} href="#pricing" className="text-xs text-white transition-colors hover:text-white/85">
                  {item}
                </a>
              ))}
              <a href="/disclosures" className="text-xs text-white/70 transition-colors hover:text-white">
                IRI 공시
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
