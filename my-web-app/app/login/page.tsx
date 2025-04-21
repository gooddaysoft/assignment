'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      setError('아이디 혹은 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="flex flex-col shadow-lg px-28 py-20 rounded-md bg-white" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          className="border w-64 h-14 mb-5 pl-3 rounded-sm outline-none"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="border w-64 h-14 mb-3 pl-3 rounded-sm outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
        <button type="submit" className="w-64 h-14 rounded-md mt-3 bg-pink-100 hover:bg-pink-200 font-semibold">
          로그인
        </button>
      </form>
    </div>
  );
}
