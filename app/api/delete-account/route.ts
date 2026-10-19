import { NextResponse } from 'next/server'

// Route retirée : le site n'a plus d'espace compte. Ce dossier peut être supprimé.
export function POST() {
  return NextResponse.json({ error: "L'espace compte a été retiré du site." }, { status: 410 })
}
