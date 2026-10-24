import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Chucho, l'homme à tout faire à Esboz-Brest.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        crumb="Mentions légales"
        title="Mentions légales"
        description="Informations légales relatives au site Chucho, l&apos;homme à tout faire."
      />

      <section className="py-16">
        <div className="container-page max-w-[760px] legal-content">
          <h2>1. Éditeur du site</h2>

          <p>
            Le site présente l&apos;activité de Chucho, exercée sous la forme
            juridique d&apos;entrepreneur individuel.
          </p>

          <ul>
            <li>
              Nom et prénom :{" "}
              <strong>{siteConfig.legal.ownerName}</strong>
            </li>
            <li>Forme juridique : Entrepreneur individuel (EI)</li>
            <li>Nom commercial : {siteConfig.name}</li>
            <li>
              Adresse professionnelle : 1 B route du Pommier, 70300
              Esboz-Brest, France
            </li>
            <li>SIRET : 10367605200014</li>
            <li>Numéro de TVA intracommunautaire : FR93103676052</li>
            <li>
              Activité : Nettoyage courant des bâtiments (code APE 8121Z)
            </li>
            <li>
              Téléphone :{" "}
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>
              E-mail :{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>

          <p>
            Directeur de la publication :{" "}
            <strong>{siteConfig.legal.ownerName}</strong>.
          </p>

          <h2>2. Création du site</h2>

          <p>
            Conception et réalisation du site : Digiprogtech.
          </p>

          <p>
            Adresse professionnelle communiquée : 28 rue des Blocs Pologne,
            70400 Héricourt, France.
          </p>

          <p>
            Site :{" "}
            <a
              href="https://digiprogtech-smoky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digiprogtech
            </a>
          </p>

          <h2>3. Hébergement</h2>

          <p>Le site est hébergé par Vercel Inc. :</p>

          <ul>
            <li>440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.</li>
          </ul>

          <p>
            Site de l&apos;hébergeur :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com
            </a>
          </p>

          <h2>4. Propriété intellectuelle</h2>

          <p>
            Les textes, photographies, illustrations, éléments graphiques et
            logos présents sur ce site peuvent être protégés par le droit de
            la propriété intellectuelle. Toute reproduction ou réutilisation
            doit respecter les droits de leurs titulaires.
          </p>

          <h2>5. Responsabilité</h2>

          <p>
            Les informations du site sont fournies à titre informatif.
            Malgré le soin apporté à leur mise à jour, des erreurs ou
            omissions peuvent subsister. Les prestations et leurs conditions
            sont définies avec le professionnel au moment de l&apos;établissement
            du devis.
          </p>

          <h2>6. Liens hypertextes</h2>

          <p>
            Le site peut contenir des liens vers des services tiers,
            notamment Google et les réseaux sociaux. Chucho ne contrôle pas
            les contenus de ces services externes.
          </p>

          <h2>7. Données personnelles</h2>

          <p>
            Les informations relatives au traitement des données personnelles
            sont disponibles dans la{" "}
            <a href="/politique-confidentialite">
              politique de confidentialité
            </a>
            .
          </p>

          <h2>8. Droit applicable</h2>

          <p>
            Les présentes mentions légales sont soumises au droit français.
            Les règles de compétence applicables sont déterminées par la
            législation en vigueur.
          </p>

          <p className="text-sm text-ink-soft/70 mt-10">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
            })}
            .
          </p>
        </div>
      </section>
    </>
  );
}