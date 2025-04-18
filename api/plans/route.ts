import { NextResponse } from "next/server";
import type { Plan } from "./types";

const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 0,
    features: ["10 users", "5 GB storage"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    features: ["100 users", "50 GB storage"],
  },
  {
    id: "team",
    name: "Team",
    price: 99,
    features: ["무제한 users", "200 GB storage"],
  },
];

export function GET() {
  return NextResponse.json(PLANS);
}
