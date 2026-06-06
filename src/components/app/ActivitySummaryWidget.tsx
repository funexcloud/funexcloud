"use client";

import { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { ActivitySummary, WidgetState } from "@/lib/supabase/types";
import { WidgetMessage, WidgetShell } from "./DashboardGrid";

const emptyMessage = "첫 업무를 시작하고 포트폴리오를 채워보세요";

export function ActivitySummaryWidget() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [state, setState] = useState<WidgetState<ActivitySummary>>({ status: "loading" });

  useEffect(() => {
    let mounted = true;

    async function load() {
      if (!supabase) {
        setState({ status: "error", message: "Supabase 환경변수가 필요합니다." });
        return;
      }
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user) {
        if (mounted) setState({ status: "empty", message: "로그인 후 대시보드를 확인하세요." });
        return;
      }
      const { data, error } = await supabase.rpc("get_activity_summary", {
        p_profile_id: userData.user.id,
      });
      if (!mounted) return;
      if (error) {
        setState({ status: "error", message: error.message });
        return;
      }
      const summary = data as ActivitySummary;
      if (!summary || summary.service_count === 0) {
        setState({ status: "empty", message: emptyMessage });
        return;
      }
      setState({ status: "ready", data: summary });
    }

    load();
    return () => {
      mounted = false;
    };
  }, [supabase]);

  return (
    <WidgetShell title="Activity Summary">
      {state.status === "loading" && <WidgetMessage message="업무 요약을 불러오는 중입니다." />}
      {state.status === "empty" && <WidgetMessage message={state.message} />}
      {state.status === "error" && <WidgetMessage message={state.message} />}
      {state.status === "ready" && <SummaryContent summary={state.data} />}
    </WidgetShell>
  );
}

function SummaryContent({ summary }: { summary: ActivitySummary }) {
  const chartData = [
    { name: "완료", value: summary.service_count },
    { name: "이번 달", value: summary.this_month_count },
    { name: "평점", value: Math.round((summary.avg_rating ?? 0) * 10) },
  ];

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-3">
        <Metric label="완료 업무" value={`${summary.service_count}건`} />
        <Metric label="이번 달" value={`${summary.this_month_count}건`} />
        <Metric label="총 매출" value={`${summary.total_revenue.toLocaleString("ko-KR")}원`} />
        <Metric label="평균 평점" value={summary.avg_rating ? summary.avg_rating.toFixed(2) : "-"} />
      </div>
      <div className="h-56 rounded-md bg-zinc-50 p-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#3182F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-zinc-50 p-3">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-zinc-950">{value}</p>
    </div>
  );
}
