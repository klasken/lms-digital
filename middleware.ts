import { NextResponse, type NextRequest } from 'next/server'

// L'espace compte (connexion, inscription, dashboard, paramètres) a été retiré du site.
// Les anciennes adresses renvoient simplement vers l'accueil.
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/login', '/signup', '/dashboard/:path*', '/parametres/:path*', '/auth/:path*'],
}
