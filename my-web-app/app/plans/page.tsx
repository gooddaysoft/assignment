import { Plan } from '../api/types';
import Link from 'next/link';

export default async function PlansPage() {
  const res = await fetch('http://localhost:3000/api/plans', {
    cache: 'no-store',
  });
  const plans: Plan[] = await res.json();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-20">Plan Selection </h1>
      <div className="grid grid-cols-3 gap-6">
        {plans.map((plan, id) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center gap-12 w-80 h-80 p-6 bg-white rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <Link href={`/plans/${plan.id}`} className="bg-pink-100 hover:bg-pink-200 p-2.5 rounded font-semibold">
              구독하기
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
