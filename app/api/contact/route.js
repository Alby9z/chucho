import { NextResponse } from "next/server";

// Route API pour le formulaire de contact.
// ⚠️ À CONNECTER : voir app/api/devis/route.js et le README.md.
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.nom || !data.email || !data.message) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    console.log("Nouveau message de contact reçu :", data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
}
