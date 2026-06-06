/** AX FunexCloud — AI Contact Center (ax.funexcloud.com) */
export const FUNEX_AX = {
  name: "AX FunexCloud",
  tagline: "AI Contact Center · 옴니채널 고객상담",
  url: "https://ax.funexcloud.com",
  description:
    "AICC SaaS와 BPO를 결합한 옴니채널 상담 플랫폼입니다. 웹채팅·AI 챗봇·상담원 콘솔·티켓·알림을 클라우드 하나로 운영하고, 반복 문의는 AI가, 복잡한 문의는 사람이 이어받습니다.",
} as const;

export const axChannels = [
  { id: "WEBCHAT", label: "Webchat", detail: "사이트 우측 하단 위젯" },
  { id: "AI", label: "AI Bot", detail: "자동 응대·분류·요약" },
  { id: "AGENT", label: "Agent", detail: "상담원·BPO 콘솔" },
  { id: "070", label: "Voice 070", detail: "전화 채널 반자동 온보딩" },
] as const;

export const axWorkflowSteps = [
  {
    step: "01",
    title: "고객 문의 접수",
    description:
      "고객사 웹사이트에 삽입한 AX 위젯으로 실시간 채팅이 시작됩니다. 테넌트·채널별로 격리된 대화방이 생성됩니다.",
  },
  {
    step: "02",
    title: "AI 자동 응대",
    description:
      "지식베이스와 업종 템플릿을 바탕으로 1차 응답·의도 분류·상담 요약을 수행합니다. 사용량 기반으로 과금됩니다.",
  },
  {
    step: "03",
    title: "상담원·BPO 이관",
    description:
      "복잡·긴급 건은 상담원 또는 BPO 팀으로 핸드오프합니다. WebSocket으로 실시간 메시지가 동기화됩니다.",
  },
  {
    step: "04",
    title: "티켓·이력·리포트",
    description:
      "티켓 SLA, 알림(이메일·SMS), 상담 통계를 한 플랫폼에서 관리합니다. Kafka로 비동기 파이프라인을 유지합니다.",
  },
] as const;

export const axServices = [
  { name: "Auth", desc: "테넌트·JWT·권한" },
  { name: "Chat", desc: "WebSocket·메시지" },
  { name: "Ticket", desc: "배정·SLA·상태" },
  { name: "AI", desc: "답변·요약·분류" },
  { name: "Notify", desc: "이메일·SMS" },
  { name: "Widget", desc: "고객용 임베드" },
] as const;
