import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

// import { NextResponse, type NextRequest } from "next/server";
//
// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const token = req.cookies.get("token")?.value;
//
//   if (url.pathname.startsWith("/login") || url.pathname.startsWith("/signup")) {
//     return NextResponse.next();
//   }
//
//   if (!token) {
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }
//   if ((token && url.pathname == "/login") || url.pathname == "/signup") {
//     url.pathname = "/home";
//     return NextResponse.redirect(url);
//   }
//   return NextResponse.next();
// }
//
// export const config = {
//   matcher: [
//     "/home/:path*",
//     "/profile/:path*",
//     "/messages/:path*",
//     "/search/:path*",
//   ],
// };
