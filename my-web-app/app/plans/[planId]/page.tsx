import Link from 'next/link';
import { Plan } from '../../api/types';
import { notFound } from 'next/navigation';

export default async function PlanDetailPage({ params }: { params: { planId: string } }) {
  console.log(params.planId);

  const res = await fetch('http://localhost:3000/api/plans', {
    cache: 'no-store',
  });
  const plans: Plan[] = await res.json();

  console.log(plans);

  const plan = plans.find((p) => p.id === params.planId);

  console.log(plan);

  if (!plan) return notFound();

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <section className="w-[25rem] h-[23rem] p-10 bg-white rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-3">{plan.name}</h1>
        <p className="text-xl font-semibold mb-12">{plan.price}원</p>
        <ul className="flex justify-evenly mb-16">
          <li>{plan.features[0]}</li>
          <li> / </li>
          <li>{plan.features[1]}</li>
        </ul>
        <Link href="/dashboard" className="bg-pink-100 hover:bg-pink-200 px-6 py-2.5 rounded font-semibold">
          구독 확정
        </Link>
      </section>
    </main>
  );
}
