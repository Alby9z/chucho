
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "chucho-cookie-consent";

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setVisible(true);
        return;
      }

      const parsed = JSON.parse(saved);

      if (
        parsed &&
        typeof parsed === "object" &&
        typeof parsed.analytics === "boolean" &&
        typeof parsed.marketing === "boolean"
      ) {
        setPreferences({
          ...defaultPreferences,
          analytics: parsed.analytics,
          marketing: parsed.marketing,
        });
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function savePreferences(nextPreferences) {
    const consent = {
      ...defaultPreferences,
      ...nextPreferences,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      setPreferences(consent);
      setVisible(false);
      setSettingsOpen(false);
    } catch {
      // Si le stockage est indisponible, ne pas masquer le panneau.
      setVisible(true);
    }
  }

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => {
          setVisible(true);
          setSettingsOpen(true);
        }}
        className="fixed bottom-20 left-3 z-[90] rounded-full border border-white/20 bg-forest px-3 py-2 text-xs text-cream shadow-lg hover:text-ochre sm:bottom-4 sm:left-4 sm:px-4 sm:text-sm"
        >
        Gérer mes cookies
      </button>
    );
  }

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-xl border border-forest/15 bg-paper p-5 text-ink shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <h2 id="cookie-title" className="mb-2 text-xl font-semibold">
        Vos préférences de cookies
      </h2>

      <p className="mb-4 text-sm leading-6 text-ink-soft">
        Les cookies nécessaires au fonctionnement du site sont toujours actifs.
        Avec votre accord, des cookies facultatifs pourront servir à mesurer
        l’audience ou à activer des fonctionnalités supplémentaires.
        Vous pouvez modifier votre choix à tout moment.
        {" "}
        <Link
          href="/cookies"
          className="underline underline-offset-4 hover:text-clay"
        >
          En savoir plus
        </Link>
        .
      </p>

      {settingsOpen && (
        <div className="mb-4 space-y-3 rounded-lg border border-forest/10 p-4 text-sm">
          <label className="flex items-center justify-between gap-4">
            <span>
              <strong>Cookies nécessaires</strong>
              <span className="block text-ink-soft">
                Indispensables au fonctionnement du site.
              </span>
            </span>
            <input type="checkbox" checked disabled aria-label="Toujours actifs" />
          </label>

          <label className="flex items-center justify-between gap-4">
            <span>
              <strong>Mesure d’audience</strong>
              <span className="block text-ink-soft">
                Aider à comprendre l’utilisation du site.
              </span>
            </span>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(event) =>
                setPreferences((current) => ({
                  ...current,
                  analytics: event.target.checked,
                }))
              }
            />
          </label>

          <label className="flex items-center justify-between gap-4">
            <span>
              <strong>Marketing</strong>
              <span className="block text-ink-soft">
                Autoriser d’éventuels outils publicitaires.
              </span>
            </span>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(event) =>
                setPreferences((current) => ({
                  ...current,
                  marketing: event.target.checked,
                }))
              }
            />
          </label>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            savePreferences({
              necessary: true,
              analytics: false,
              marketing: false,
            })
          }
          className="rounded-full border border-forest/20 px-4 py-2 text-sm hover:bg-forest/5"
        >
          Refuser tout
        </button>

        <button
          type="button"
          onClick={() => setSettingsOpen((open) => !open)}
          className="rounded-full border border-forest/20 px-4 py-2 text-sm hover:bg-forest/5"
        >
          Personnaliser
        </button>

        {settingsOpen ? (
          <button
            type="button"
            onClick={() => savePreferences(preferences)}
            className="rounded-full bg-clay px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Enregistrer mon choix
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              savePreferences({
                necessary: true,
                analytics: true,
                marketing: true,
              })
            }
            className="rounded-full bg-clay px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Tout accepter
          </button>
        )}
      </div>
    </aside>
  );
}

