import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Add custom logic here for RBAC and tenant routing
    const token = req.nextauth.token
    const { pathname } = req.nextUrl
    
    // Allow access to public pages
    if (pathname === "/" || pathname.startsWith("/auth")) {
      return NextResponse.next()
    }
    
    // Protect dashboard routes
    if (pathname.startsWith("/dashboard")) {
      if (!token) {
        return NextResponse.redirect(new URL("/auth/signin", req.url))
      }
    }
    
    // Protect admin routes
    if (pathname.startsWith("/admin")) {
      if (!token || !token.role || !["admin", "owner"].includes(token.role as string)) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to public pages
        if (req.nextUrl.pathname === "/" || req.nextUrl.pathname.startsWith("/auth")) {
          return true
        }
        
        // Require token for protected routes
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)",
  ],
}