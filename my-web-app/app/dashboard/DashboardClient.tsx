'use client';

import { useEffect, useState } from 'react';

interface DashboardData {
  userName: string;
  currentPlan: string;
  thisMonthUsage: number;
  dailyUsage: { date: string; count: number }[];
}

export default function DashboardClient() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await fetch('/api/dashboard');
      const json = await res.json();
      setData(json);
    };

    fetchDashboard();
  }, []);

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <section className="p-8 space-y-6 bg-pink-50 rounded-lg shadow-md">
        <header className="flex justify-start items-end gap-3">
          <h1 className="text-2xl font-bold">{data?.userName} 님</h1>
          <span className="text-lg font-semibold">{data?.currentPlan}</span>
        </header>
        <dl className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-pink-200 rounded-xl shadow">
            <dt className="mb-1">이번 달 청구 예정 금액</dt>
            <dd>
              <strong>{data?.thisMonthUsage}원</strong>
            </dd>
          </div>
          <div className="p-4 bg-pink-200 rounded-xl shadow">
            <dt className="mb-1">총 사용량</dt>
            <dd>
              <strong>{data?.dailyUsage.reduce((sum, d) => sum + d.count, 0)}</strong>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
