import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Chucho, l'homme à tout faire.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        crumb="Mentions légales"
        title="Mentions légales"
        description="Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN)."
      />

      <section className="py-16">
        <div className="container-page max-w-[760px] legal-content">
          <div className="mb-8 p-5 border border-clay/30 bg-clay/5 rounded-md text-sm text-ink-soft">
            <strong className="text-forest block mb-1">⚠️ À compléter avant mise en ligne</strong>
            Les informations ci-dessous contiennent des champs à renseigner (statut juridique,
            n° SIRET, hébergeur). Un site professionnel en France doit obligatoirement afficher
            ces informations réelles et exactes. Modifiez-les dans{" "}
            <code className="text-xs bg-white/60 px-1.5 py-0.5 rounded">lib/site-config.js</code>{" "}
            et directement dans ce fichier si besoin.
          </div>

          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site est édité par <strong>{siteConfig.legal.ownerName}</strong>, exerçant
            sous le statut de <strong>{siteConfig.legal.status}</strong>, sous le nom commercial{" "}
            « {siteConfig.name} ».
          </p>
          <ul>
            <li>Adresse : {siteConfig.address.city} ({siteConfig.address.postalCode}), France</li>
            <li>Téléphone : {siteConfig.phone}</li>
            <li>E-mail : {siteConfig.email}</li>
            <li>N° SIRET : {siteConfig.legal.siret}</li>
            {siteConfig.legal.rcs && <li>RCS : {siteConfig.legal.rcs}</li>}
            <li>N° de TVA intracommunautaire : {siteConfig.legal.vatNumber}</li>
          </ul>
          <p>Directeur de la publication : {siteConfig.legal.ownerName}.</p>

          <h2>2. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li>{siteConfig.legal.hostingProvider.name}</li>
            <li>{siteConfig.legal.hostingProvider.address}</li>
          </ul>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logo, structure) est, sauf
            mention contraire, la propriété de {siteConfig.legal.ownerName}. Toute reproduction,
            représentation, modification ou adaptation totale ou partielle de ce site, par
            quelque procédé que ce soit, sans autorisation préalable, est interdite.
          </p>

          <h2>4. Responsabilité</h2>
          <p>
            {siteConfig.legal.ownerName} s&apos;efforce d&apos;assurer l&apos;exactitude et la
            mise à jour des informations diffusées sur ce site, mais ne peut garantir
            l&apos;exhaustivité des informations. {siteConfig.shortName} ne pourra être tenu
            responsable des dommages directs ou indirects résultant de l&apos;accès ou de
            l&apos;utilisation de ce site.
          </p>

          <h2>5. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d&apos;autres sites (réseaux sociaux, carte
            Google Maps). {siteConfig.shortName} n&apos;exerce aucun contrôle sur ces sites tiers
            et décline toute responsabilité quant à leur contenu.
          </p>

          <h2>6. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige,
            les tribunaux français seront seuls compétents.
          </p>

          <p className="text-sm text-ink-soft/70 mt-10">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}.
          </p>
        </div>
      </section>
    </>
  );
}
