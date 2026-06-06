import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Funex Cloud - 대한민국 장례 운영 클라우드",
  description:
    "대한민국 장례 운영을 하나의 클라우드로 연결합니다. GRID, Ping, Move, Care와 장례지도사 데이터 입점을 통합 운영합니다.",
  openGraph: {
    title: "Funex Cloud - 대한민국 장례 운영 클라우드",
    description:
      "GRID, Ping, Move, Care와 장례지도사 데이터 입점을 하나의 운영 체계로 연결합니다.",
    url: SITE_URL,
    siteName: "Funex Cloud",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://static.tradingview.com" />
        <link
          rel="preload"
          as="image"
          href="/hero/funex-pilot-hero.jpg"
          type="image/jpeg"
        />
      </head>
      <body className="min-h-full bg-[#050505] text-white">{children}</body>
    </html>
  );
}
