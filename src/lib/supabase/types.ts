export type ActivitySummary = {
  service_count: number;
  total_revenue: number;
  avg_rating: number | null;
  this_month_count: number;
};

export type WidgetState<T> =
  | { status: "loading"; data?: never; message?: never }
  | { status: "empty"; data?: never; message: string }
  | { status: "error"; data?: never; message: string }
  | { status: "ready"; data: T; message?: never };
