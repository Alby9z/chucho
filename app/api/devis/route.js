import { NextResponse } from "next/server";

// Route API pour le formulaire de devis.
// ⚠️ À CONNECTER : cette route valide et journalise la demande, mais n'envoie
// pas encore d'e-mail réel. Pour recevoir les demandes par e-mail, branchez
// ici un service comme Resend, SendGrid ou Nodemailer + SMTP.
// Voir le README.md à la racine du projet pour les instructions.
export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.nom || !data.tel || !data.email) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    // TODO : brancher l'envoi d'e-mail ici.
    console.log("Nouvelle demande de devis reçue :", data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
}
