import { authAdmin } from "@/lib/firebase/admin-config";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { token } = await req.json();
  try {
    const decoded = await authAdmin.verifyIdToken(token);

    const res = NextResponse.json({ success: true });
    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return res;
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
