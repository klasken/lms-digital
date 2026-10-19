import { NextResponse } from 'next/server'

// Route retirée : le site n'a plus d'espace compte. Ce dossier peut être supprimé.
export function GET(request: Request) {
  return NextResponse.redirect(new URL('/', request.url))
}
