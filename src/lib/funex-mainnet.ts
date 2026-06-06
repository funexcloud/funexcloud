import { ORBIT_ENGINE } from "@/lib/funex-orbit-engine";

/** 이리디오 메인넷 · IRI 토큰 (랜딩 공개 수치) */
export const IRIDIO_MAINNET = {
  name: "Iridio",
  nameKo: "이리디오",
  token: {
    symbol: "IRI",
    name: "Iridio Token",
    /** 총 발행량 2,700만 IRI (1 IRI = 1주) */
    totalSupply: 27_000_000,
    supplyDisplay: "2,700만",
    unitLabel: "주",
  },
  pricing: {
    issuePriceKrw: 10_000,
    targetPriceKrw: 1_200_000,
    issueDisplay: "₩10,000",
    targetDisplay: "₩1,200,000",
    targetCaption: "1주당 목표 최대",
  },
} as const;

export function formatKrw(amount: number): string {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** 토큰·가격 카드용 */
export const iridioTokenomicsHighlights = [
  { label: "메인넷", value: IRIDIO_MAINNET.nameKo, sub: IRIDIO_MAINNET.name },
  { label: "네이티브 토큰", value: IRIDIO_MAINNET.token.symbol, sub: IRIDIO_MAINNET.token.name },
  {
    label: "총 발행량",
    value: `${IRIDIO_MAINNET.token.supplyDisplay} ${IRIDIO_MAINNET.token.symbol}`,
    sub: `${IRIDIO_MAINNET.token.totalSupply.toLocaleString("ko-KR")} ${IRIDIO_MAINNET.token.unitLabel}`,
  },
  {
    label: "기준가 (1주)",
    value: IRIDIO_MAINNET.pricing.issueDisplay,
    sub: formatKrw(IRIDIO_MAINNET.pricing.issuePriceKrw),
  },
  {
    label: "목표가 (1주)",
    value: IRIDIO_MAINNET.pricing.targetDisplay,
    sub: IRIDIO_MAINNET.pricing.targetCaption,
  },
] as const;

/**
 * Funex on-chain layer — Iridio + Polygon PoS 앵커·정산 메타데이터
 * 실행·배치·발송은 {@link ORBIT_ENGINE} (궤도 엔진)이 담당합니다.
 *
 * 정산·앵커 네트워크: Polygon PoS (EVM, chainId 137)
 * @see https://docs.polygon.technology/pos/
 *
 * 제품 원칙(내부): 오프체인 우선 · 해시만 온체인 · PII 비저장
 */
export const FUNEX_MAINNET = {
  iridio: IRIDIO_MAINNET,
  name: "Iridio Mainnet",
  engine: ORBIT_ENGINE.name,
  tagline: "이리디오 · IRI · Polygon PoS 앵커",
  status: "live" as const,
  settlement: {
    name: "Polygon PoS",
    shortName: "Polygon",
    chainId: 137,
    symbol: "POL",
    /** Polygon Amoy — 스테이징·컨트랙트 검증용 */
    testnet: { name: "Polygon Amoy", chainId: 80002 },
  },
  urls: {
    explorer: "https://polygonscan.com",
    polygonDocs: "https://docs.polygon.technology/pos/",
    polygonArchitecture: "https://docs.polygon.technology/pos/architecture/overview/",
    rpc: "https://polygon-rpc.com",
    /** Funex 앵커 레지스트리·ABI — 준비되면 교체 */
    funexDocs: "https://docs.funexcloud.com/mainnet",
  },
  metrics: {
    chainId: "137",
    blockTime: "~2s",
    gasToken: "IRI",
    settlementGas: "POL",
    anchorModel: "Merkle batch",
  },
} as const;

export const IRIDIO_TOKENOMICS_DISCLAIMER =
  "목표 가격은 장기 로드맵이며, 투자 수익·상장 시점·유동성을 보장하지 않습니다.";

/** @deprecated — settlement.chainId 사용 */
export const MAINNET_CHAIN_ID = FUNEX_MAINNET.settlement.chainId;

export const mainnetDocLinks = [
  {
    title: "Polygon PoS 문서",
    description: "EVM 호환 PoS 사이드체인 — 빌드·노드·아키텍처 공식 가이드",
    href: FUNEX_MAINNET.urls.polygonDocs,
    external: true,
  },
  {
    title: "Polygonscan",
    description: "앵커 트랜잭션·컨트랙트·배치 루트를 공개 블록 익스플로러에서 조회",
    href: FUNEX_MAINNET.urls.explorer,
    external: true,
  },
  {
    title: "Funex 앵커 설계",
    description: "모듈별 레지스트리·배치 주기·ABI — 내부 기술 문서(준비 중 링크)",
    href: FUNEX_MAINNET.urls.funexDocs,
    external: true,
  },
] as const;

export const mainnetCapabilities = [
  {
    title: "미션 매니페스트 앵커",
    description:
      "발사 일정·페이로드·GO/NO-GO 승인 이력의 해시를 Polygon에 기록합니다. 원문·PII는 오프체인(콘솔·DB)에만 둡니다.",
  },
  {
    title: "추모·운영 이벤트 증명",
    description:
      "GRID·Ping·Move·Care에서 생성된 핵심 이벤트를 Merkle 배치로 묶어 Polygon 트랜잭션 하나로 커밋합니다. 감사·분쟁 대응용입니다.",
  },
  {
    title: "IRI · 파트너 정산",
    description:
      "이리디오 메인넷의 IRI로 생태계 정산·인센티브를 설계하고, 앵커·가스 정산은 Polygon PoS(chain 137)와 연동합니다.",
  },
] as const;

/** 최근 앵커 활동 예시 — 실제 tx는 Polygonscan에서 조회 */
export const mainnetRecentAnchors = [
  {
    tx: "0x8f2a…c41e",
    module: "MISSION",
    label: "Mission-07 manifest root anchored",
    gas: "0.04 POL",
  },
  {
    tx: "0x3b91…09ac",
    module: "GRID",
    label: "서울권 배치 284건 — Merkle root",
    gas: "0.06 POL",
  },
  {
    tx: "0x71de…ff20",
    module: "PING",
    label: "경기 발송 증명 배치",
    gas: "0.05 POL",
  },
  {
    tx: "0x22c4…8811",
    module: "MOVE",
    label: "부산→인천 정산 앵커",
    gas: "0.04 POL",
  },
] as const;

/** 4계층 — Funex 애플리케이션 → Polygon 정산 */
export const mainnetLayers = [
  {
    id: "L4",
    name: "Application Layer",
    subtitle: "SaaS · Console · Care · AX",
    description:
      "GRID·Ping·Move·Mission·Care 모듈이 비즈니스 이벤트를 생성합니다. 상담 원문·개인정보는 SaaS DB에만 저장합니다.",
    accent: "from-cyan-500/20 to-sky-500/5 border-cyan-500/25",
  },
  {
    id: "L3",
    name: "Anchor Layer",
    subtitle: "Batch · Merkle · Orbit Anchor",
    description:
      "Orbit Engine의 Orbit Anchor가 이벤트를 정규화·해시한 뒤 Merkle Root를 만들고, 서명된 트랜잭션을 Polygon PoS에 제출합니다.",
    accent: "from-violet-500/20 to-purple-500/5 border-violet-500/25",
  },
  {
    id: "L2",
    name: "Execution Layer",
    subtitle: "EVM · Funex Registry · Settlement",
    description:
      "Polygon 위 EVM에서 모듈 네임스페이스·앵커 레지스트리·정산 컨트랙트가 동작합니다. Ethereum 메인넷이 아닌 Polygon 실행 환경입니다.",
    accent: "from-indigo-500/20 to-blue-500/5 border-indigo-500/25",
  },
  {
    id: "L1",
    name: "Settlement Layer",
    subtitle: "Polygon PoS · Heimdall · Bor",
    description:
      "Polygon PoS가 최종성·가스·블록 확정을 담당합니다. EVM 호환·낮은 수수료·높은 처리량이 장례 SaaS 배치 앵커에 적합합니다.",
    accent: "from-purple-500/20 to-fuchsia-500/5 border-purple-500/30",
  },
] as const;

export const mainnetDesignPrinciples = [
  {
    title: "오프체인 우선 · 온체인 증명",
    description:
      "유족·상담 원문은 DB에 두고, 감사에 필요한 eventHash·Merkle root·타임스탬프만 Polygon에 남깁니다.",
  },
  {
    title: "모듈 네임스페이스",
    description:
      "MISSION / GRID / PING / MOVE / CARE별 스키마를 분리해 Polygonscan·콘솔에서 모듈 단위로 추적합니다.",
  },
  {
    title: "배치 앵커링",
    description:
      "건당 가스를 줄이기 위해 시간·지역 단위로 이벤트를 묶어 단일 Polygon 트랜잭션으로 커밋합니다.",
  },
  {
    title: "법·개인정보 정합",
    description:
      "삭제·정정 요구와 충돌하지 않도록 온체인에는 해시만 올리고, 블록체인은 신뢰·감사에 실익이 있을 때만 씁니다.",
  },
] as const;

export const mainnetAnchorPipeline = [
  { step: "01", label: "이벤트 발생", detail: "모듈 API / Console / Care" },
  { step: "02", label: "정규화·해시", detail: "PII 제외 → eventHash" },
  { step: "03", label: "배치·Merkle", detail: "Orbit Anchor 루트 생성" },
  { step: "04", label: "Polygon 커밋", detail: "Registry 컨트랙트 tx (chain 137)" },
  { step: "05", label: "Polygonscan·감사", detail: "txHash ↔ 오프체인 증빙 연결" },
] as const;
