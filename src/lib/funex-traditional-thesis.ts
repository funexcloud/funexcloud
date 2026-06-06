/**
 * 아카이브 — 상장례·의례 지식 랜딩 노출용
 */
export const ARCHIVE = {
  eyebrow: "ARCHIVE",
  titleKo: "아카이브",
  tagline: "의례의 언어를 기록하고, 궤도 위의 클라우드로 이어지다",
  description:
    "상장례(商葬禮)의 격식·절차·택일·안내 문화를 학술·실무 관점에서 정리한 백서·기록 아카이브입니다. 유복과 갓 아래의 전통과, 지구 궤도 너머의 추모 미션을 같은 맥락에서 읽습니다.",
  heroImage: "/thesis/traditional-funeral-orbit.jpg",
  heroImageAlt:
    "전통 한복과 갓을 입은 인물이 지구 궤도 위 Funex Cloud 차량에 서 있는 우주 장면",
} as const;

export const archiveThemes = [
  {
    id: "rite",
    tag: "의례",
    title: "상장례 의례 체계",
    description:
      "초호·성복·발인·하관까지 단계별 격식과 문장·복식·배치의 기준을 아카이브 문서로 정리합니다.",
  },
  {
    id: "calendar",
    tag: "택일",
    title: "장례 택일·길일",
    description:
      "전통 역법과 현대 일정 운영을 연결해, 장지·발인·제사 일정의 근거와 실무 체크리스트를 제공합니다.",
  },
  {
    id: "commerce",
    tag: "상장",
    title: "상장례 실무·상조",
    description:
      "상조·장례식장·유품·부고 안내가 만나는 상업적 장례의 윤리·표준·계약 구조를 다룹니다.",
  },
  {
    id: "bridge",
    tag: "연결",
    title: "전통 ↔ Funex Cloud",
    description:
      "의례 지식은 아카이브·백서로, 운영·기록·앵커는 GRID·Ping·Care·Orbit Engine으로 이어지는 하이브리드 모델입니다.",
  },
] as const;

export const archivePublications = [
  {
    series: "Vol. 01",
    title: "상장례 의례 개론",
    status: "Published",
    pages: "128p",
  },
  {
    series: "Vol. 02",
    title: "장례 택일과 현대 일정",
    status: "Published",
    pages: "96p",
  },
  {
    series: "Vol. 03",
    title: "부고·알림 문화와 디지털 예절",
    status: "In review",
    pages: "84p",
  },
  {
    series: "Whitepaper",
    title: "궤도 추모와 전통 장례의 합성",
    status: "Draft",
    pages: "52p",
  },
] as const;

export const archiveQuotes = [
  "기억은 의례로 시작되고, 기록으로 남으며, 궤도로 확장된다.",
  "상장례는 점이 아니라, 세대를 잇는 문장이다.",
] as const;
