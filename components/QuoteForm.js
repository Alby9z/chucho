"use client";

import { useState, useMemo } from "react";
import { IconInfo } from "./Icons";

const REQUEST_TYPES = [
  { value: "petits-travaux", label: "Petits travaux" },
  { value: "jardinage", label: "Jardinage / espaces verts" },
  { value: "amenagement", label: "Aménagement extérieur" },
  { value: "nettoyage", label: "Nettoyage" },
  { value: "autre", label: "Autre demande" },
];

export default function QuoteForm({ defaultType = "petits-travaux" }) {
  const [status, setStatus] = useState("idle");
  const [fileCount, setFileCount] = useState(0);

  const docNumber = useMemo(() => {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `CHU-${year}-${rand}`;
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Échec de l'envoi");
      setStatus("sent");
      e.target.reset();
      setFileCount(0);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="relative bg-paper border border-forest/10 rounded-lg p-8 sm:p-11">
      <div className="flex justify-between items-start gap-5 flex-wrap mb-8 pb-6 border-b-2 border-forest">
        <div>
          <p className="eyebrow mb-1.5">Demande de devis</p>
          <h3 className="mb-0">Formulaire de devis gratuit</h3>
        </div>
        <div className="font-mono text-xs text-ink-soft text-right">
          N° de demande
          <strong className="block text-clay text-sm">{docNumber}</strong>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-field">
        <div className="mb-6">
          <label>Type de demande</label>
          <div className="flex gap-2.5 flex-wrap">
            {REQUEST_TYPES.map((t) => (
              <label key={t.value} className="radio-chip relative">
                <input type="radio" name="type" value={t.value} defaultChecked={t.value === defaultType} />
                <span>{t.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-[22px]">
          <label htmlFor="description">Décrivez votre besoin</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Ex. tonte de pelouse, montage d'une étagère, nettoyage de terrasse après travaux…"
          />
        </div>

        <div className="mb-[22px]">
          <label htmlFor="adresse">Adresse d&apos;intervention</label>
          <input type="text" id="adresse" name="adresse" placeholder="Rue, commune, code postal" />
        </div>

        <div className="mb-[22px]">
          <label htmlFor="fichier">Photos (facultatif, conseillé)</label>
          <label
            htmlFor="fichier"
            className="block border-2 border-dashed border-forest/15 rounded-md p-7 text-center text-sm text-ink-soft bg-cream cursor-pointer"
          >
            <strong className="block text-clay font-mono uppercase text-xs mb-1">
              {fileCount > 0 ? `${fileCount} fichier(s) sélectionné(s)` : "Glissez vos photos ici ou cliquez"}
            </strong>
            Formats acceptés : JPG, PNG, PDF — 10 Mo max
          </label>
          <input
            type="file"
            id="fichier"
            name="fichier"
            multiple
            className="hidden"
            onChange={(e) => setFileCount(e.target.files.length)}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-[22px]">
          <div>
            <label htmlFor="delai">Délai souhaité</label>
            <select id="delai" name="delai" defaultValue="Le plus vite possible">
              <option>Le plus vite possible</option>
              <option>Dans la semaine</option>
              <option>Dans le mois</option>
              <option>Pas de contrainte</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget">Budget estimatif (facultatif)</label>
            <input type="text" id="budget" name="budget" placeholder="Ex. 50–150 €" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-[22px]">
          <div>
            <label htmlFor="nom">Nom complet</label>
            <input type="text" id="nom" name="nom" required placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor="tel">Téléphone</label>
            <input type="tel" id="tel" name="tel" required placeholder="06 00 00 00 00" />
          </div>
        </div>

        <div className="mb-[22px]">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="vous@exemple.fr" />
        </div>

        <div className="flex gap-2.5 items-start bg-clay/5 border border-clay/25 p-4 rounded-md text-sm text-ink-soft">
          <IconInfo className="w-[18px] h-[18px] text-clay flex-shrink-0 mt-0.5" />
          <span>Ce devis est gratuit et sans engagement. Vos informations ne sont utilisées que pour vous recontacter.</span>
        </div>

        <button type="submit" disabled={status === "sending"} className="btn btn-primary btn-block mt-8 disabled:opacity-60">
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande de devis"}
        </button>

        {status === "sent" && (
          <p role="status" className="mt-4 p-3.5 bg-clay/10 border border-clay/30 rounded-md text-sm text-clay-dark">
            Merci, votre demande a bien été enregistrée. Chucho vous recontacte sous 24h ouvrées.
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
