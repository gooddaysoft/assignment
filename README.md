# 📝 지원자 작업 내용

아래는 본 과제에서 구현해야 할 주요 작업 내용입니다. 이 가이드를 따라 과제를 진행해주세요.
<br/><br/>

### 1. Plan Selection 페이지
- Server Component로 구현
- Tailwind CSS 그리드 + 카드 UI
- 카드 내 **“구독하기”** 버튼 클릭 시 상세 페이지로 이동

### 2. Subscription Detail 페이지
- 선택된 플랜의 **name**, **price**, **features** 표시
- **“구독 확정”** 버튼 클릭 시 `/dashboard`로 이동

### 3. Login 기능 추가
- **Login 페이지** (Client Component)
  - **id**, **password** 입력 폼
  - `POST /api/users` 호출
  - **성공 시**:
    - 로그인 응답에서 받은 유저 정보를 **쿠키(HttpOnly)** 또는 **Web Storage(localStorage/sessionStorage)**에 저장
    - `/dashboard`로 리다이렉트
  - **실패 시** 에러 메시지 표시
- **Protected Route**
  - 대시보드 진입 전 저장한 세션 값 확인
  - 값이 없으면 `redirect('/login')`

### 4. Dashboard 페이지
- Server Component에서 `GET /api/dashboard` 호출
- 상단에 사용자 이름 · 현재 플랜 표시
- 주요 지표 카드: **이번 달 청구 예정 금액**, **총 사용량**
- `dailyUsage` 차트 구현 (Chart 라이브러리 사용 가능)

## 5. 공통 요구사항
- Tailwind CSS 공식 Docs 방식(`className` 조합)으로 스타일링
- 의미 있는 Git 커밋 메시지

## 6. 제출 방식
- GitHub **main** 브랜치에 최종 코드 푸시 후 Pull Request 생성

