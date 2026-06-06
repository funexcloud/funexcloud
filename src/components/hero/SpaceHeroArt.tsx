import HeroPilotImage from "@/components/hero/HeroPilotImage";

/** 16:9 파일럿 — 호라이즌에서만 오로라와 블렌드 */
export default function SpaceHeroArt() {
  return (
    <div className="space-hero__pilot-wrap" aria-hidden="true">
      <div className="space-hero__blend" aria-hidden="true" />
      <div className="space-hero__pilot">
        <HeroPilotImage />
      </div>
    </div>
  );
}
