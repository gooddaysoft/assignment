import { cookies } from 'next/headers';
import DashboardClient from './DashboardClient';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const cookieStore = cookies();
  // @ts-expect-error : cookies() 함수가 Promise를 반환한다고 착각해서 생긴 에러입니다. 하지만 실제로는 cookies()는 동기 함수이고 바로 .get()을 사용할 수 있습니다.
  const loggedIn = cookieStore.get('loggedIn');

  if (!loggedIn) {
    redirect('/login');
  }

  return <DashboardClient />;
}
