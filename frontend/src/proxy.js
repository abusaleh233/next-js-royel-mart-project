import { NextResponse } from "next/server";

export function proxy(request) {
  const authCookie = request.cookies.get("auth");

  
  if (request.nextUrl.pathname.startsWith("/add-item")) {
    if (!authCookie || authCookie.value !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
