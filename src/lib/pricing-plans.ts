/** SaaS 요금 플랜 — 공급가는 추후 확정 (표시는 가이드) */
export const PRICING_INTRO = {
  eyebrow: "SAAS PLANS",
  title: "통합",
  titleAccent: "클라우드 플랜",
  description:
    "장례지도사·장례식장·상조가 쓰는 Funex Cloud SaaS입니다. Ping·Move·GRID 등 모듈을 하나의 운영 체계로 묶되, 플랜별로 기능은 점진적으로 오픈됩니다.",
  footnote: "표시 요금은 가이드이며, 최종 공급가는 계약·모듈 옵션에 따라 확정됩니다.",
} as const;

export type SaasPlan = {
  name: string;
  tag: string;
  price: string;
  priceCompare?: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  color: string;
  badge: string | null;
};

export const saasPlans: SaasPlan[] = [
  {
    name: "Ping",
    tag: "부고",
    price: "월 ₩49,000~",
    priceNote: "화이트라벨 · 부고 대량발송",
    description: "부고(Ping)만 단독 도입. 브랜드·발송 옵션은 제한된 화이트라벨 패키지입니다.",
    features: [
      "Ping 부고 대량발송 (화이트라벨)",
      "발송 이력·수신 통계 기본",
      "Funex Console 연동",
      "이메일·채널 지원 (표준)",
    ],
    cta: "Ping 도입 상담",
    highlight: false,
    color: "border-cyan-500/25",
    badge: null,
  },
  {
    name: "통합 클라우드",
    tag: "Ping + Move",
    price: "월 ₩84,000~",
    priceCompare: "개별 합산 ₩98,000",
    priceNote: "Ping(₩49,000) + Move(₩49,000) 통합 할인",
    description:
      "부고(Ping)와 묘지·이장(Move)을 한 계약으로 쓰는 표준 통합 플랜. 전 모듈 풀오픈이 아니라 단계별 기능 오픈입니다.",
    features: [
      "Ping 화이트라벨 + Move 묘지·이장 통합",
      "모듈별 옵션·쿼터 제한 (플랜 내)",
      "장례식장·장례지도사 운영 콘솔",
      "도입·교육 · 우선 지원",
    ],
    cta: "통합 플랜 상담",
    highlight: true,
    color: "border-[#2962ff]/40",
    badge: "가장 인기",
  },
  {
    name: "엔터프라이즈",
    tag: "Full Stack",
    price: "맞춤 견적",
    priceNote: "GRID · Care · AX · API",
    description: "전국 네트워크·다지점 장례식장·상조 본사용. 모듈·SLA·전용 연동을 협의합니다.",
    features: [
      "GRID · Ping · Move · Care · AX 전체(협의)",
      "전용 API · 파트너 포털",
      "SLA · 전담 매니저",
      "온보딩 · 커스텀 워크플로",
    ],
    cta: "엔터프라이즈 문의",
    highlight: false,
    color: "border-violet-500/20",
    badge: null,
  },
];
