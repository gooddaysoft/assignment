import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center gap-24">
        <Link href="/login" className="bg-blue-300 hover:bg-blue-400 px-6 py-2.5 rounded font-semibold">
          로그인 페이지로 이동하기
        </Link>
        <Link href="/plans" className="bg-blue-300 hover:bg-blue-400 px-6 py-2.5 rounded font-semibold">
          Plan Selection 페이지로 이동하기
        </Link>
      </main>
    </>
  );
}
