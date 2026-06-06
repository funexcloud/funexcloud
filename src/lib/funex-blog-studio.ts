/**
 * Funex Blog Studio — AI 블로그·템플릿 사이트 (blog.funexcloud.com)
 * 백엔드: inblog_funex 클론 · 주소·디자인·SEO·Notion 연동
 */
export const FUNEX_BLOG_STUDIO = {
  name: "Funex Blog Studio",
  tagline: "AI 블로그 · 템플릿 사이트 생성",
  url: "https://blog.funexcloud.com",
  description:
    "업종 설명만 입력하면 AI가 템플릿·브랜드 컬러·SEO 메타·첫 화면 구조를 제안하고, 몇 분 안에 공개 블로그·랜딩형 템플릿 사이트를 발급합니다. 코딩·서버·워드프레스 없이 운영합니다.",
} as const;

export const blogTemplates = [
  { id: "minimal", name: "Minimal", desc: "깔끔한 장례·전문 서비스 소개" },
  { id: "startup", name: "Startup", desc: "제품·미션 중심 랜딩형" },
  { id: "magazine", name: "Magazine", desc: "안내글·사례·뉴스 허브" },
  { id: "docs", name: "Docs", desc: "가이드·FAQ·절차 문서형" },
] as const;

export const blogStudioSteps = [
  {
    step: "01",
    title: "브리프 입력",
    description:
      "업체명, 업종, 키워드, 톤앤매너를 입력합니다. 장례·상조·지역 거점 등 Funex 도메인 맥락을 이해한 프롬프트로 시작합니다.",
  },
  {
    step: "02",
    title: "AI 템플릿·사이트 초안",
    description:
      "AI가 Minimal·Startup·Magazine·Docs 중 템플릿을 추천하고, 메인·악센트 컬러, SEO 제목·설명, OG 메타, 첫 섹션 카피 초안을 생성합니다.",
  },
  {
    step: "03",
    title: "주소·도메인 연결",
    description:
      "/blog/{handle} 경로를 즉시 예약하거나 서브도메인·커스텀 도메인을 연결합니다. 기존 사이트 권위를 유지하는 서브디렉터리 라우팅을 지원합니다.",
  },
  {
    step: "04",
    title: "발행·성장",
    description:
      "Notion·에디터로 글을 올리고, 사이트맵·canonical·JSON-LD·리드 폼까지 한 번에 준비합니다. Move·Ping·Care와 CTA를 연결할 수 있습니다.",
  },
] as const;

export const blogStudioAiFeatures = [
  "템플릿·컬러·타이포 프리셋 자동 매칭",
  "SEO·OG·구조화 데이터 메타 자동 작성",
  "업종별 첫 화면·CTA 카피 초안 생성",
  "Notion 연동 또는 목 콘텐츠로 즉시 미리보기",
] as const;
