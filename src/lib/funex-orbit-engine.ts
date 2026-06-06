/**
 * Orbit Engine — Funex Cloud 통합 실행·신뢰 엔진
 *
 * 실제 코드·마케팅에서 확인된 구성요소:
 * - ping_mobile: Ping Messaging Engine, funex-pipeline.js
 * - funex-mainnet(랜딩): anchor-worker → Polygon Merkle 앵커
 * - philosophy.ts: ORBIT(궤도) 철학 태그
 */
export const ORBIT_ENGINE = {
  /** 제품 공식명 */
  name: "Orbit Engine",
  nameKo: "궤도 엔진",
  codename: "ORBIT-ENG",
  tagline: "장례·상조 SaaS의 이벤트를 궤도 위에 맡기는 실행 레이어",
  description:
    "부고 발송·묘지·이장·상담·미션 기록을 하나의 파이프라인으로 묶고, 필요한 증명만 Polygon에 앵커합니다. 우주 미션 브랜드는 ‘비유’이고, 실제로 돌아가는 것은 전국 장례 현장의 운영 데이터입니다.",
} as const;

/** Orbit Engine 하위 모듈 — 레포·랜딩에 이미 있던 이름을 궤도 계열로 정렬 */
export const orbitEngineModules = [
  {
    id: "relay",
    codeName: "Orbit Relay",
    legacyName: "Ping Messaging Engine",
    source: "ping_mobile (saas-landing, bulk send)",
    role: "부고·알림 대량 발송",
    description:
      "카카오·SMS 멀티채널 부고 발송, 수신 확인·발송 이력. 장례식장·상조 현장에서 가장 많이 쓰는 실시간 통신 축입니다.",
    href: "https://ping.funexcloud.com",
    accent: "border-cyan-500/30 bg-cyan-500/10",
  },
  {
    id: "sync",
    codeName: "Orbit Sync",
    legacyName: "funex-pipeline",
    source: "ping_mobile/functions/funex-pipeline.js",
    role: "장례식장·견적 데이터 정규화",
    description:
      "e하늘 등 공공·원천 데이터를 정규화해 Firestore/DB에 반영하고, 견적 승인 시 알림 트리거를 연결합니다.",
    href: "https://ping.funexcloud.com",
    accent: "border-amber-500/30 bg-amber-500/10",
  },
  {
    id: "anchor",
    codeName: "Orbit Anchor",
    legacyName: "anchor-worker",
    source: "Funex Trust Layer · Polygon PoS",
    role: "해시·Merkle 배치 앵커",
    description:
      "모듈 이벤트를 배치로 묶어 Merkle root를 만들고 Polygon(chain 137)에 커밋합니다. 상담 원문·PII는 올리지 않습니다.",
    href: "#mainnet",
    accent: "border-purple-500/30 bg-purple-500/10",
  },
] as const;

/** SaaS 모듈 ↔ Orbit 연결 — ‘장례 사이트’ 맥락용 */
export const orbitFuneralModules = [
  { code: "GRID", label: "묘지·GPS·현장 관리", engine: "Orbit Anchor · Sync" },
  { code: "Ping", label: "부고·알림 발송", engine: "Orbit Relay" },
  { code: "Move", label: "이장·견적·정산", engine: "Orbit Anchor · Sync" },
  { code: "Care", label: "장례 상담·인계", engine: "Orbit Anchor" },
  { code: "Mission", label: "추모 미션·매니페스트", engine: "Orbit Anchor" },
] as const;
