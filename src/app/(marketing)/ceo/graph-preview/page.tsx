import { getPublishedPosts } from "@/lib/ceo-content";

import { GraphPreviewClient } from "./GraphPreviewClient";

const conceptNodes = [
  { id: "Funex Cloud", group: "brand" as const, size: 11 },
  { id: "CEO Insight", group: "brand" as const, size: 9 },
  { id: "장례 DX", group: "dx" as const, size: 10 },
  { id: "우주 장례", group: "space" as const, size: 10 },
  { id: "마지막의 빈틈", group: "story" as const, size: 8 },
  { id: "현장 운영", group: "dx" as const, size: 8 },
  { id: "PING", group: "product" as const, size: 7 },
  { id: "Mike", group: "product" as const, size: 7 },
  { id: "AfterLoop", group: "product" as const, size: 7 },
  { id: "GRID", group: "product" as const, size: 7 },
  { id: "추모 아카이브", group: "space" as const, size: 6 },
  { id: "장례법인", group: "story" as const, size: 6 },
  { id: "공동운영기업", group: "story" as const, size: 6 },
  { id: "실무자", group: "story" as const, size: 6 },
  { id: "창업자", group: "story" as const, size: 8 },
];

const conceptLinks = [
  ["Funex Cloud", "CEO Insight"],
  ["Funex Cloud", "장례 DX"],
  ["Funex Cloud", "우주 장례"],
  ["CEO Insight", "창업자"],
  ["창업자", "실무자"],
  ["창업자", "장례법인"],
  ["창업자", "공동운영기업"],
  ["장례 DX", "현장 운영"],
  ["장례 DX", "PING"],
  ["장례 DX", "Mike"],
  ["장례 DX", "GRID"],
  ["우주 장례", "AfterLoop"],
  ["우주 장례", "추모 아카이브"],
  ["마지막의 빈틈", "우주 장례"],
  ["마지막의 빈틈", "장례 DX"],
];

export default function GraphPreviewPage() {
  const posts = getPublishedPosts();
  const postNodes = posts.map((post) => ({
    id: post.title,
    group: "post" as const,
    size: 7,
  }));
  const postLinks = posts.flatMap((post) => [
    { source: "CEO Insight", target: post.title },
    { source: post.title, target: post.slug.includes("digital") ? "장례 DX" : "Funex Cloud" },
  ]);

  return (
    <GraphPreviewClient
      graphData={{
        nodes: [...conceptNodes, ...postNodes],
        links: [
          ...conceptLinks.map(([source, target]) => ({ source, target })),
          ...postLinks,
        ],
      }}
    />
  );
}
