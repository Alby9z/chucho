"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("sent");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="bg-paper border border-forest/10 rounded-lg p-8">
      <p className="eyebrow mb-1.5">Message</p>
      <h3 className="mb-6">Nous écrire</h3>

      <form onSubmit={handleSubmit} className="form-field">
        <div className="grid sm:grid-cols-2 gap-5 mb-[22px]">
          <div>
            <label htmlFor="c-nom">Nom complet</label>
            <input type="text" id="c-nom" name="nom" required placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor="c-tel">Téléphone</label>
            <input type="tel" id="c-tel" name="tel" placeholder="06 00 00 00 00" />
          </div>
        </div>
        <div className="mb-[22px]">
          <label htmlFor="c-email">E-mail</label>
          <input type="email" id="c-email" name="email" required placeholder="vous@exemple.fr" />
        </div>
        <div className="mb-[22px]">
          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" required rows={5} placeholder="Votre message..." />
        </div>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary btn-block disabled:opacity-60">
          {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
        </button>

        {status === "sent" && (
          <p role="status" className="mt-4 p-3.5 bg-clay/10 border border-clay/30 rounded-md text-sm text-clay-dark">
            Merci, votre message a bien été envoyé. Chucho vous répond rapidement.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="mt-4 p-3.5 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
            Une erreur est survenue. Merci de réessayer ou d&apos;appeler directement.
          </p>
        )}
      </form>
    </div>
  );
}
