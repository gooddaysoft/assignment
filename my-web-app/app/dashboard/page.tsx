import { cookies } from 'next/headers';
import DashboardClient from './DashboardClient';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const cookieStore = cookies();
  // @ts-expect-error : cookies() 함수가 Promise를 반환한다고 착각해서 생긴 에러입니다. 하지만 실제로는 cookies()는 동기 함수이고 바로 .get()을 사용할 수 있습니다.
  const loggedIn = cookieStore.get('loggedIn');

  if (!loggedIn) {
    redirect('/login');
    // Next.js의 redirect 함수는 호출 즉시 예외를 발생시켜(throw) 실행을 중단하고
    // 리다이렉트 처리를 서버에서 바로 반환하기 때문에 별도의 return을 작성할 필요가 없습니다.
  }

  return <DashboardClient />;
}
