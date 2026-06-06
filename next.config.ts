import type { NextConfig } from "next";

// ※ Vercel 콘솔에서 ceo.funexcloud.com 을 funexcloud-landing 프로젝트 Domains에 수동 추가해야 실제 서브도메인이 동작함. 코드만으로는 안 됨.
const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tradingview.com",
        pathname: "/static/bundles/**",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "ceo.funexcloud.com" }],
          destination: "/ceo",
        },
        {
          source: "/:path((?!_next/|hero/|brand/|footer/|thesis/|favicon.ico|ceo(?:/|$)).+)",
          has: [{ type: "host", value: "ceo.funexcloud.com" }],
          destination: "/ceo/:path",
        },
      ],
    };
  },
};

export default nextConfig;
