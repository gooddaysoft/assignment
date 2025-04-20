import { NextResponse } from "next/server";
import type { DashboardData } from "../types";

const DASHBOARD: DashboardData = {
  userName: "Jane Doe",
  currentPlan: "pro",
  thisMonthUsage: 1234,
  dailyUsage: [
    { date: "2025-04-01", count: 100 },
    { date: "2025-04-02", count: 150 },
    // …
  ],
};

export function GET() {
  return NextResponse.json(DASHBOARD);
}
