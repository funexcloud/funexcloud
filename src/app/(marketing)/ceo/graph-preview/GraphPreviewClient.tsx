"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, Radio, Search } from "lucide-react";
import Link from "next/link";
import type { ForceGraphMethods } from "react-force-graph-2d";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

type GraphNode = {
  id: string;
  group: "brand" | "dx" | "product" | "space" | "story" | "post";
  size?: number;
  x?: number;
  y?: number;
};

type GraphLink = {
  source: string | GraphNode;
  target: string | GraphNode;
};

type GraphData = {
  nodes: GraphNode[];
  links: GraphLink[];
};

type PreviewMode = "force" | "sigma";

const groupColors: Record<GraphNode["group"], string> = {
  brand: "#3182F6",
  dx: "#22d3ee",
  product: "#f8fafc",
  space: "#d500f9",
  story: "#f97316",
  post: "#10b981",
};

const groupLabels: Record<GraphNode["group"], string> = {
  brand: "Brand",
  dx: "DX",
  product: "Product",
  space: "Space",
  story: "Story",
  post: "Whitepaper",
};

type RuntimeNode = {
  id?: string | number;
  group?: GraphNode["group"];
  size?: number;
  x?: number;
  y?: number;
};

type RuntimeLink = {
  source?: string | number | RuntimeNode;
  target?: string | number | RuntimeNode;
};

function getNodeId(value: RuntimeLink["source"]) {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  return value?.id ? String(value.id) : "";
}

export function GraphPreviewClient({ graphData }: { graphData: GraphData }) {
  const [mode, setMode] = useState<PreviewMode>("force");
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const graphRef = useRef<ForceGraphMethods | undefined>(undefined);
  const sigmaContainerRef = useRef<HTMLDivElement | null>(null);

  const stats = useMemo(
    () => ({
      nodes: graphData.nodes.length,
      links: graphData.links.length,
      groups: new Set(graphData.nodes.map((node) => node.group)).size,
    }),
    [graphData],
  );

  const paintNode = useCallback(
    (node: RuntimeNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const group = node.group ?? "brand";
      const color = groupColors[group];
      const radius = node.size ?? 5;
      const label = node.id ? String(node.id) : "";
      const fontSize = Math.max(10 / globalScale, 2.8);

      ctx.beginPath();
      ctx.arc(node.x ?? 0, node.y ?? 0, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = selectedNode?.id === label ? 18 : 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      if (globalScale > 0.72 || radius >= 8 || selectedNode?.id === label) {
        ctx.font = `${fontSize}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = "rgba(255,255,255,0.86)";
        ctx.fillText(label, node.x ?? 0, (node.y ?? 0) + radius + 4 / globalScale);
      }
    },
    [selectedNode],
  );

  useEffect(() => {
    if (mode !== "force") {
      return;
    }

    const graph = graphRef.current;

    if (!graph?.d3Force) {
      return;
    }

    const chargeForce = graph.d3Force("charge") as
      | { strength?: (value: number) => unknown }
      | undefined;
    const linkForce = graph.d3Force("link") as
      | { distance?: (value: number) => unknown; strength?: (value: number) => unknown }
      | undefined;

    chargeForce?.strength?.(-38);
    linkForce?.distance?.(74);
    linkForce?.strength?.(0.18);
    graph.d3ReheatSimulation?.();
  }, [mode]);

  useEffect(() => {
    if (mode !== "sigma" || !sigmaContainerRef.current) {
      return;
    }

    let isMounted = true;
    let cleanup: (() => void) | undefined;

    async function mountSigma() {
      const [{ default: Graph }, { default: Sigma }, { default: forceAtlas2 }] =
        await Promise.all([
          import("graphology"),
          import("sigma"),
          import("graphology-layout-forceatlas2"),
        ]);

      if (!isMounted || !sigmaContainerRef.current) {
        return;
      }

      const graph = new Graph();

      graphData.nodes.forEach((node) => {
        graph.addNode(node.id, {
          label: node.id,
          size: node.size ?? 5,
          color: groupColors[node.group],
          group: node.group,
          x: Math.random(),
          y: Math.random(),
        });
      });

      graphData.links.forEach((link, index) => {
        const source = typeof link.source === "string" ? link.source : link.source.id;
        const target = typeof link.target === "string" ? link.target : link.target.id;

        if (graph.hasNode(source) && graph.hasNode(target)) {
          graph.addEdgeWithKey(`edge-${index}`, source, target, {
            size: 0.8,
            color: "rgba(226,232,240,0.18)",
          });
        }
      });

      forceAtlas2.assign(graph, {
        iterations: 180,
        settings: {
          gravity: 0.75,
          scalingRatio: 8,
          slowDown: 14,
        },
      });

      const renderer = new Sigma(graph, sigmaContainerRef.current, {
        allowInvalidContainer: true,
        defaultEdgeColor: "rgba(226,232,240,0.14)",
        defaultNodeColor: "#3182F6",
        enableEdgeEvents: false,
        labelColor: { color: "#f8fafc" },
        labelDensity: 0.09,
        labelGridCellSize: 80,
        labelRenderedSizeThreshold: 9,
        renderEdgeLabels: false,
      });

      renderer.on("clickNode", ({ node }) => {
        const attrs = graph.getNodeAttributes(node) as {
          label?: string;
          group?: GraphNode["group"];
          size?: number;
        };

        setSelectedNode({
          id: attrs.label ?? node,
          group: attrs.group ?? "brand",
          size: attrs.size,
        });
      });

      renderer.on("clickStage", () => setSelectedNode(null));

      cleanup = () => {
        renderer.kill();
        graph.clear();
      };
    }

    void mountSigma();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, [graphData, mode]);

  return (
    <main className="marketing-shell min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(49,130,246,0.14)_0%,transparent_62%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/ceo"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            CEO 페이지로 돌아가기
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="eyebrow-tv mb-3">GRAPH PREVIEW</p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
                Funex <span className="text-tv-gradient">Knowledge Graph</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                Obsidian Graph View처럼 보이는 웹 미리보기입니다. 아직 CEO 본문에는 넣지
                않았고, 라이브러리 질감만 보기 위한 독립 라우트입니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-1">
                {[
                  ["force", "Force"],
                  ["sigma", "Sigma"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setSelectedNode(null);
                      setMode(value as PreviewMode);
                    }}
                    className={`rounded-md px-3 py-2 text-sm font-bold transition-colors ${
                      mode === value
                        ? "bg-[#3182F6] text-white"
                        : "text-white/55 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
              {[
                ["Nodes", stats.nodes],
                ["Links", stats.links],
                ["Groups", stats.groups],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">
                    {label}
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">{value}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid min-h-[760px] lg:grid-cols-[1fr_320px]">
        <div className="relative min-h-[720px] overflow-hidden bg-[#111827]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.18)_58%,rgba(5,5,5,0.82)_100%)]" />
          {mode === "force" ? (
            <ForceGraph2D
              ref={graphRef}
              graphData={graphData}
              width={typeof window === "undefined" ? undefined : window.innerWidth}
              height={760}
              backgroundColor="#111827"
              nodeRelSize={5}
              warmupTicks={60}
              cooldownTicks={90}
              d3AlphaDecay={0.055}
              d3VelocityDecay={0.74}
              linkWidth={(link: RuntimeLink) =>
                selectedNode &&
                (getNodeId(link.source) === selectedNode.id ||
                  getNodeId(link.target) === selectedNode.id)
                  ? 1.8
                  : 0.65
              }
              linkColor={() => "rgba(226,232,240,0.22)"}
              nodeCanvasObject={paintNode}
              nodePointerAreaPaint={(node, color, ctx) => {
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(node.x ?? 0, node.y ?? 0, 10, 0, 2 * Math.PI, false);
                ctx.fill();
              }}
              onNodeClick={(node) => setSelectedNode(node as GraphNode)}
              onBackgroundClick={() => setSelectedNode(null)}
            />
          ) : (
            <div ref={sigmaContainerRef} className="relative z-0 h-[760px] w-full" />
          )}
        </div>

        <aside className="border-t border-white/10 bg-[#080808] p-6 lg:border-l lg:border-t-0">
          <div className="mb-7 flex items-center gap-2 text-sm font-bold text-white">
            <Radio className="h-4 w-4 text-[#3182F6]" aria-hidden="true" />
            Graph Legend
          </div>

          <div className="space-y-3">
            {(Object.keys(groupLabels) as GraphNode["group"][]).map((group) => (
              <div key={group} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="flex items-center gap-2 text-sm text-white/70">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: groupColors[group] }}
                  />
                  {groupLabels[group]}
                </span>
                <span className="font-mono text-[10px] uppercase text-white/32">{group}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
              <Search className="h-4 w-4 text-[#3182F6]" aria-hidden="true" />
              Selected
            </div>
            {selectedNode ? (
              <>
                <p className="text-lg font-black text-white">{selectedNode.id}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/42">
                  {groupLabels[selectedNode.group]}
                </p>
              </>
            ) : (
              <p className="text-sm leading-7 text-white/55">
                그래프의 노드를 클릭하면 이 패널에서 분류와 이름을 확인할 수 있습니다.
              </p>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}
