/**
 * Funex Cloud — space visual assets
 *
 * Hero (locked):
 * | pilot  | funex-pilot-hero.jpg     | 16:9 기본 (1024×576)
 * | pilot2x| funex-pilot-hero@2x.jpg  | 선택 — 1920×1080 권장, 있으면 자동 사용
 *
 * Tune blend: globals.css --horizon-y, --blend-h
 */
const TV = "https://static.tradingview.com/static/bundles";

export const FUNEX_ASSETS = {
  pilot: "/hero/funex-pilot-hero.jpg",
  pilot2x: "/hero/funex-pilot-hero@2x.jpg",
  aurora: {
    default: `${TV}/aurora.9fb1100135d77f0193c8.webp`,
    large: `${TV}/aurora-large.b76b06787b54bf7e8d56.webp`,
  },
} as const;

export const heroPilot = FUNEX_ASSETS.pilot;

/** Retina — public/hero/funex-pilot-hero@2x.jpg 추가 시 srcSet에 포함 */
export const heroPilot2x = FUNEX_ASSETS.pilot2x;

export const aurora = FUNEX_ASSETS.aurora;

/** @deprecated Use heroPilot */
export const heroOrbitRig = heroPilot;

/** @deprecated Use heroPilot */
export const spaceHeroImage = heroPilot;

/** @deprecated Use aurora */
export const auroraImages = aurora;
