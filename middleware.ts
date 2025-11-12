import { authAdmin } from "@/lib/firebase/admin-config";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;

  if (url.pathname.startsWith("/login") || url.pathname.startsWith("/signup")) {
    return NextResponse.next();
  }

  if (!token) {
    url.pathname == "/login";
    return NextResponse.redirect(url);
  }

  try {
    await authAdmin.verifyIdToken(token);
    return NextResponse.next();
  } catch {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    "/home/:path*",
    "/profile/:path*",
    "/messages/:path*",
    "/search/:path*",
  ],
};
