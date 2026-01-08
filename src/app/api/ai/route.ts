import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Just verifying env wiring for now:
  const hasKey = !!process.env.AI_GATEWAY_API_KEY;

  if (!hasKey) {
    return NextResponse.json(
      { ok: false, error: "Missing AI_GATEWAY_API_KEY" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}