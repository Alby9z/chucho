import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles du site Chucho.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        crumb="Politique de confidentialité"
        title="Politique de confidentialité"
        description="Comment vos données personnelles sont collectées, utilisées et protégées sur ce site."
      />

      <section className="py-16">
        <div className="container-page max-w-[760px] legal-content">
          <div className="mb-8 p-5 border border-clay/30 bg-clay/5 rounded-md text-sm text-ink-soft">
            <strong className="text-forest block mb-1">⚠️ À vérifier avant mise en ligne</strong>
            Ce texte est un modèle conforme au RGPD couvrant les formulaires de devis et de
            contact de ce site. Si vous ajoutez un outil d&apos;analyse d&apos;audience (Google
            Analytics, Matomo...) ou une newsletter, complétez la section « Cookies » et «
            Destinataires » en conséquence.
          </div>

          <h2>1. Qui collecte vos données ?</h2>
          <p>
            {siteConfig.legal.ownerName}, exerçant sous le nom « {siteConfig.name} », est
            responsable du traitement des données personnelles collectées sur ce site. Pour
            toute question, contactez : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>2. Quelles données sont collectées ?</h2>
          <p>
            Via les formulaires de <strong>devis</strong> et de <strong>contact</strong>, les
            données suivantes peuvent être collectées :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse d&apos;intervention (formulaire de devis)</li>
            <li>Contenu de votre message ou description de votre besoin</li>
            <li>Photos jointes, le cas échéant</li>
          </ul>

          <h2>3. Pourquoi ces données sont-elles collectées ?</h2>
          <p>Ces informations sont utilisées exclusivement pour :</p>
          <ul>
            <li>Répondre à votre demande de devis ou de contact</li>
            <li>Vous recontacter par téléphone ou e-mail</li>
            <li>Organiser une intervention à votre domicile si vous en faites la demande</li>
          </ul>
          <p>
            La base légale de ce traitement est l&apos;exécution de mesures précontractuelles
            prises à votre demande (article 6.1.b du RGPD).
          </p>

          <h2>4. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre
            dernier contact, sauf obligation légale de conservation plus longue (ex. facturation).
          </p>

          <h2>5. Destinataires des données</h2>
          <p>
            Vos données sont destinées exclusivement à {siteConfig.legal.ownerName} et ne sont
            ni vendues, ni louées, ni transmises à des tiers à des fins commerciales. Elles
            peuvent être transmises à l&apos;hébergeur du site dans le cadre strict de son
            fonctionnement technique.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Ce site utilise une carte Google Maps intégrée sur la page Contact, qui peut déposer
            des cookies tiers propres à Google. Aucun cookie de mesure d&apos;audience ou
            publicitaire n&apos;est déposé par {siteConfig.shortName} lui-même à ce jour.
          </p>

          <h2>7. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
            Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation et d&apos;opposition concernant vos
            données personnelles. Vous pouvez exercer ces droits en écrivant à :{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <p>
            Vous disposez également du droit d&apos;introduire une réclamation auprès de la{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a> si
            vous estimez que le traitement de vos données n&apos;est pas conforme à la
            réglementation.
          </p>

          <h2>8. Sécurité</h2>
          <p>
            Des mesures techniques raisonnables sont mises en place pour protéger vos données
            contre tout accès, modification, divulgation ou destruction non autorisés.
          </p>

          <p className="text-sm text-ink-soft/70 mt-10">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}.
          </p>
        </div>
      </section>
    </>
  );
}
