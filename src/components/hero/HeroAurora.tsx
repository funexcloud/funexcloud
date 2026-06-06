import { aurora } from "@/lib/space-assets";

type HeroAuroraProps = {
  /** hero: 파일럿 위 합성 오로라 / section: 콘솔 섹션 상단 전환 */
  variant?: "hero" | "section";
  className?: string;
};

function AuroraPicture({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <picture className={className}>
      <source media="(min-width: 2560px)" srcSet={aurora.large} type="image/webp" />
      <img
        src={aurora.default}
        alt=""
        className={imgClassName}
        decoding="async"
        fetchPriority={imgClassName?.includes("hero-aurora") ? "high" : "low"}
      />
    </picture>
  );
}

/** 히어로: 비 내리는 오로라(고정) + 은은히 움직이는 오로라(드리프트) 합성 */
function HeroAuroraComposite({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-aurora-composite pointer-events-none absolute inset-0 z-[2] overflow-hidden ${className}`} aria-hidden="true">
      <AuroraPicture className="hero-aurora__frame" imgClassName="hero-aurora__layer hero-aurora__layer--rain" />
      <AuroraPicture className="hero-aurora__frame" imgClassName="hero-aurora__layer hero-aurora__layer--drift" />
      <div className="hero-aurora__glow" aria-hidden="true" />
      <div className="hero-aurora__veil" aria-hidden="true" />
    </div>
  );
}

export default function HeroAurora({ variant = "section", className = "" }: HeroAuroraProps) {
  if (variant === "hero") {
    return <HeroAuroraComposite className={className} />;
  }

  return (
    <div
      className={`section-aurora pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(40vh,400px)] overflow-hidden ${className}`}
      aria-hidden="true"
      style={{
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 88%)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 88%)",
      }}
    >
      <AuroraPicture
        className="section-aurora__picture mx-auto block h-full w-[min(2180px,168vw)] max-w-none"
        imgClassName="section-aurora__img h-full w-full object-cover object-top opacity-70"
      />
    </div>
  );
}
