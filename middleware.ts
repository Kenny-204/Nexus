import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token")?.value;

  if (url.pathname.startsWith("/login") || url.pathname.startsWith("/signup")) {
    return NextResponse.next();
  }

  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  if ((token && url.pathname == "/login") || url.pathname == "/signup") {
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/:path*",
    "/profile/:path*",
    "/messages/:path*",
    "/search/:path*",
  ],
};
