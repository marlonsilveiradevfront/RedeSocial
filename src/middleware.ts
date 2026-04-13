import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get('token')?.value

    const rotaProtegida = request.nextUrl.pathname.startsWith('/interface')

    if(rotaProtegida && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

   if (request.nextUrl.pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/interface', request.url))
   }
   return NextResponse.next()
}

export const config = {
    matcher: ['/interface/:path*', '/login'],
}