import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis gratuit pour vos petits travaux, jardinage, aménagement extérieur ou nettoyage. Réponse sous 24h ouvrées.",
  alternates: { canonical: "/devis" },
};

export default function DevisPage({ searchParams }) {
  const defaultType = searchParams?.type || "petits-travaux";

  return (
    <>
      <PageHeader
        crumb="Devis"
        title="Demander un devis gratuit."
        description="Remplissez ce formulaire, Chucho vous recontacte sous 24h ouvrées avec un devis clair, sans engagement."
      />

      <section className="py-20">
        <div className="container-page max-w-[820px]">
          <QuoteForm defaultType={defaultType} />
        </div>
      </section>
    </>
  );
}
