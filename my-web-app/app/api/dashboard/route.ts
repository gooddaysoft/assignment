import { NextResponse } from 'next/server';
import type { DashboardData } from '../types';

const DASHBOARD: DashboardData = {
  userName: 'Jane Doe',
  currentPlan: 'pro',
  thisMonthUsage: 1234,
  dailyUsage: [
    { date: '2025-04-01', count: 100 },
    { date: '2025-04-02', count: 150 },
    { date: '2025-04-03', count: 85 },
    { date: '2025-04-04', count: 200 },
    { date: '2025-04-05', count: 50 },
    // …
  ],
};

export function GET() {
  return NextResponse.json(DASHBOARD);
}
