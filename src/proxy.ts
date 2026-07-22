import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(request);
  if(pathname === '/middleware'){
    return NextResponse.redirect(new URL("/complex-dashboard", request.nextUrl));
  }else{
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: "/middleware",
};
