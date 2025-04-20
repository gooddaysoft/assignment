import { NextResponse } from "next/server";
import type { User } from "../types";

const USERS: User[] = [
  { id: "user1", username: "test", password: "password123" },
];

export function GET() {
  return NextResponse.json(
    USERS.map((u) => ({ id: u.id, username: u.username }))
  );
}

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return NextResponse.json({ ok: false }, { status: 401 });
  const res = NextResponse.json({ ok: true, user: { id: user.id, username } });
  res.cookies.set("loggedIn", "1", { path: "/" });
  return res;
}
