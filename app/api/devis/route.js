
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.nom || !data.tel || !data.email) {
      return NextResponse.json(
        { error: "Nom, téléphone et e-mail sont obligatoires." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY manquante.");
      return NextResponse.json(
        { error: "Le service d'envoi n'est pas configuré." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: result, error } = await resend.emails.send({
      from: "Chucho <onboarding@resend.dev>",
      to: ["justineetbrian90@gmail.com"],
      replyTo: data.email,
      subject: `Nouvelle demande de devis — ${data.nom}`,
      text: `
Nouvelle demande de devis Chucho

Nom : ${data.nom}
Téléphone : ${data.tel}
E-mail : ${data.email}
Type de demande : ${data.type || "Non précisé"}
Adresse d'intervention : ${data.adresse || "Non précisée"}
Délai souhaité : ${data.delai || "Non précisé"}
Budget estimatif : ${data.budget || "Non précisé"}

Description :
${data.description || "Aucune description fournie"}
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json(
        { error: "L'envoi de la demande a échoué." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: result?.id });
  } catch (error) {
    console.error("Erreur API devis :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement." },
      { status: 500 }
    );
  }
}
