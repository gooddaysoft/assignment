import Link from 'next/link';

export default async function PlanDetailPage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <section className="w-[25rem] h-[23rem] p-10 bg-white rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-3">Basic</h1>
        <p className="text-xl font-semibold mb-12">0원</p>
        <ul className="flex justify-evenly mb-16">
          <li>10 users</li>
          <li> / </li>
          <li>5 GB storage</li>
        </ul>
        <Link href="/dashboard" className="bg-pink-100 hover:bg-pink-200 px-6 py-2.5 rounded font-semibold">
          구독 확정
        </Link>
      </section>
    </main>
  );
}
