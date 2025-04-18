# API Documentation

이 문서는 지원 과제에서 사용될 API 엔드포인트에 대한 정의와 예시를 제공합니다.

---

## 1. 공통 정보

- **Base URL**: `http://localhost:3000` (개발 환경)
- **API 파일 위치**: `app/api/`

---

## 2. GET /api/plans

구독 플랜 목록을 가져옵니다.

### Request

```
GET /api/plans
```

### Response (200 OK)

```json
[
  {
    "id": "basic",
    "name": "Basic",
    "price": 0,
    "features": ["10 users", "5 GB storage"]
  },
  {
    "id": "pro",
    "name": "Pro",
    "price": 29,
    "features": ["100 users", "50 GB storage"]
  },
  {
    "id": "team",
    "name": "Team",
    "price": 99,
    "features": ["무제한 users", "200 GB storage"]
  }
]
```

### Errors

| 상태 코드 | 의미                              |
| --------- | --------------------------------- |
| 500       | 서버 오류 (Internal Server Error) |

---

## 3. GET /api/dashboard

대시보드에 필요한 사용자 정보와 사용량 데이터를 가져옵니다.

### Request

```
GET /api/dashboard
Cookie: loggedIn=1
```

### Response (200 OK)

```json
{
  "userName": "Jane Doe",
  "currentPlan": "pro",
  "thisMonthUsage": 1234,
  "dailyUsage": [
    { "date": "2025-04-01", "count": 100 },
    { "date": "2025-04-02", "count": 150 }
  ]
}
```

### Errors

| 상태 코드 | 의미                                        |
| --------- | ------------------------------------------- |
| 401       | 인증 실패 (Unauthorized, 쿠키 없음/만료 등) |
| 500       | 서버 오류 (Internal Server Error)           |

---

## 4. GET /api/users

가능한 사용자 목록(비밀번호 제외)을 가져옵니다.

### Request

```
GET /api/users
```

### Response (200 OK)

```json
[{ "id": "user1", "username": "test" }]
```

### Errors

| 상태 코드 | 의미                              |
| --------- | --------------------------------- |
| 500       | 서버 오류 (Internal Server Error) |

---

## 5. POST /api/users

로그인 요청을 처리합니다.

### Request

```
POST /api/users HTTP/1.1
Content-Type: application/json

{
  "username": "test",
  "password": "password123"
}
```

### Response

- **200 OK** (로그인 성공)

  ```json
  { "ok": true, "user": { "id": "user1", "username": "test" } }
  ```

  - 쿠키 `loggedIn=1` 설정

- **401 Unauthorized** (로그인 실패)

  ```json
  { "ok": false }
  ```

### Errors

| 상태 코드 | 의미                              |
| --------- | --------------------------------- |
| 401       | 인증 실패 (Unauthorized)          |
| 500       | 서버 오류 (Internal Server Error) |
