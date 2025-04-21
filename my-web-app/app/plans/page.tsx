export default function PlansPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-20">Plan Selection </h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col justify-center items-center gap-12 w-80 h-80 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Basic</h2>
          <button className="bg-pink-100 hover:bg-pink-200 p-2.5 rounded font-semibold">구독하기</button>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-80 h-80 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Basic</h2>
          <button className="bg-pink-100 hover:bg-pink-200 p-2.5 rounded font-semibold">구독하기</button>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-80 h-80 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Basic</h2>
          <button className="bg-pink-100 hover:bg-pink-200 p-2.5 rounded font-semibold">구독하기</button>
        </div>
      </div>
    </main>
  );
}
