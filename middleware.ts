import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the route is an admin route (but not login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check if user is authenticated via sessionStorage
    // Note: sessionStorage is not available in middleware, so we'll handle this client-side
    // This middleware is here for future server-side authentication if needed
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
