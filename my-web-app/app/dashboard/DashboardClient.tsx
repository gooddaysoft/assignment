'use client';

export default function DashboardClient() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <section className="p-8 space-y-6 bg-pink-50 rounded-lg shadow-md">
        <header className="flex justify-start items-end gap-3">
          <h1 className="text-2xl font-bold">재희 님</h1>
          <span className="text-lg font-semibold">team</span>
        </header>
        <dl className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-pink-200 rounded-xl shadow">
            <dt className="font-medium">이번 달 청구 예정 금액</dt>
            <dd>
              <strong>100원</strong>
            </dd>
          </div>
          <div className="p-4 bg-pink-200 rounded-xl shadow">
            <dt className="font-medium">총 사용량</dt>
            <dd>
              <strong>100건</strong>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
