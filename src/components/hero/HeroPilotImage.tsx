"use client";

import { useEffect, useState } from "react";

import { heroPilot, heroPilot2x } from "@/lib/space-assets";

/**
 * 히어로 파일럿 — JPEG 원본 직접 로드(Next 재압축 없음)
 * funex-pilot-hero@2x.jpg 있으면 Retina srcSet 자동 적용
 */
export default function HeroPilotImage() {
  const [srcSet, setSrcSet] = useState<string | undefined>(undefined);

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setSrcSet(`${heroPilot} 1x, ${heroPilot2x} 2x`);
    probe.onerror = () => setSrcSet(undefined);
    probe.src = heroPilot2x;
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={heroPilot}
      srcSet={srcSet}
      alt=""
      decoding="async"
      fetchPriority="high"
      className="space-hero__pilot-img"
    />
  );
}
