/** Funex Care — 장례 상담·운영 지원 (care.funexcloud.com) */
export const FUNEX_CARE = {
  name: "Funex Care",
  tagline: "장례 상담·운영 지원 시스템",
  url: "https://care.funexcloud.com",
  description:
    "전화 상담 직후부터 유족 안내까지. 상담 요약, 직원 인계, 장의차 배차, 안심 안내 페이지를 하나의 운영 흐름으로 이어 주는 Care 프로그램입니다.",
} as const;

export const careWorkflowSteps = [
  {
    step: "01",
    title: "상담 기록·요약",
    description: "통화 메모를 남기고 AI가 핵심 정보를 요약합니다. 긴급도·콜백 필요 여부를 한눈에 표시합니다.",
  },
  {
    step: "02",
    title: "직원 인계",
    description: "다음 담당자에게 넘길 인계 카드를 자동 생성합니다. 현장·본관·행정 담당이 같은 맥락을 공유합니다.",
  },
  {
    step: "03",
    title: "장의차 배차",
    description: "외주 배차 상태, 기사 연락처, ETA를 관리합니다. 유족에게 보여 줄 도착 예상 문구까지 정리합니다.",
  },
  {
    step: "04",
    title: "유족 안심 안내",
    description: "공유 링크로 열리는 안내 페이지를 발급합니다. 절차·연락처·다음 일정을 유족이 스스로 확인할 수 있습니다.",
  },
] as const;

export const careCapabilities = [
  "상담 접수 · 콜백/미처리 큐",
  "지식베이스(시설·가격·절차·서류·FAQ)",
  "Supabase 기반 운영 데이터 저장",
  "오프라인·연결 불안 시 로컬 캐시 보호",
] as const;
