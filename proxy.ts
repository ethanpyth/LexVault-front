import { NextRequest, NextResponse } from "next/server"

export function proxy(req: NextRequest) { 
  const token = req.cookies.get("access_token")?.value
  
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth")

  const protectedRoutes = [
    '/dashboard',
    '/folder',
  ]

  const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route),)

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(
      new URL('/auth', req.url)
    )
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(
      new URL('/dashboard', req.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/folder/:path*',
    '/auth/:path*',
    '/admin/:path*'
  ]
}