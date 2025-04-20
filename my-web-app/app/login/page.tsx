'use client';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="flex flex-col shadow-lg px-28 py-20 rounded-md bg-white">
        <input type="text" placeholder="아이디" className="border w-64 h-14 mb-5 pl-3 rounded-sm" />
        <input type="password" placeholder="비밀번호" className="border w-64 h-14 mb-8 pl-3 rounded-sm" />
        <button type="submit" className="w-64 h-14 rounded-md bg-pink-100 hover:bg-pink-200 font-semibold">
          로그인
        </button>
      </form>
    </div>
  );
}
