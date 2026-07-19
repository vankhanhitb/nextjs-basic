import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  //return NextResponse.redirect(new URL("/", request.url));
  if(request.nextUrl.pathname === 'middleware'){
    return NextResponse.redirect(new URL("/complex-dashboard", request.nextUrl));
  }
}

// export const config = {
//   matcher: "/middleware",
// };
