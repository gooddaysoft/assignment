'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { DashboardData } from '../api/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function DailyUsageChart({ usage }: { usage: DashboardData['dailyUsage'] }) {
  const data = {
    labels: usage.map((item) => item.date.slice(5)),
    datasets: [
      {
        label: '일별 사용량',
        data: usage.map((item) => item.count),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-2">일별 사용량</h2>
      <Line data={data} options={options} />
    </div>
  );
}
