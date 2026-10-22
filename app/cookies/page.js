
import Link from "next/link";

export const metadata = {
  title: "Politique de cookies",
  description:
    "Informations sur les cookies et la gestion du consentement sur le site de Chucho, l'homme à tout faire.",
};

export default function CookiesPage() {
  return (
    <article className="container-page py-16 md:py-24">
      <p className="eyebrow">Confidentialité et préférences</p>
      <h1 className="mb-8">Politique de cookies</h1>

      <div className="max-w-3xl space-y-8 text-ink-soft leading-7">
        <section>
          <h2 className="mb-3 text-forest">1. Qu’est-ce qu’un cookie ?</h2>
          <p>
            Un cookie est un petit fichier enregistré sur votre appareil
            lorsque vous consultez un site internet. Des technologies
            similaires peuvent également être utilisées pour mémoriser des
            préférences ou mesurer l’audience.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-forest">2. Cookies nécessaires</h2>
          <p>
            Certains éléments techniques peuvent être nécessaires au bon
            fonctionnement et à la sécurité du site. Ils ne nécessitent pas
            de consentement lorsqu’ils répondent aux conditions légales
            applicables.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-forest">3. Cookies facultatifs</h2>
          <p>
            À ce jour, aucun outil d’analyse d’audience ou de publicité
            n’a été identifié dans le code inspecté. Si de tels outils sont
            ajoutés, cette page devra être mise à jour et le consentement
            recueilli avant leur activation lorsque la loi l’exige.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-forest">4. Gérer votre choix</h2>
          <p className="mb-4">
            Vous pouvez ouvrir le panneau de préférences à tout moment grâce
            au bouton « Gérer mes cookies » affiché sur le site.
          </p>
          <p>
            Pour toute question concernant vos données personnelles,
            consultez également notre{" "}
            <Link
              href="/politique-confidentialite"
              className="text-clay underline underline-offset-4"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <p className="border-t border-forest/10 pt-5 text-sm">
          Cette page doit être actualisée si des cookies ou services tiers
          sont ajoutés au site.
        </p>
      </div>
    </article>
  );
}
