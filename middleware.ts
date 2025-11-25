import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Detect language from Accept-Language header if not set
  const language = request.cookies.get("language")?.value
  if (!language) {
    const acceptLanguage = request.headers.get("accept-language")
    if (acceptLanguage?.includes("bn")) {
      response.cookies.set("language", "bn", { maxAge: 31536000 })
    }
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
