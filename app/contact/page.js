import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ServiceAreaList from "@/components/ServiceAreaList";
import { IconPin, IconPhone, IconClock } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Chucho, l'homme à tout faire : téléphone, horaires et formulaire de contact. Intervention à Esboz-Brest et jusqu'à 50 km alentour.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        title="Un projet ? Un imprévu ? Appelez directement."
        description="Par téléphone, par mail ou via le formulaire — Chucho répond personnellement."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            <div className="bg-paper border border-forest/10 rounded-lg p-7">
              <IconPin className="w-8 h-8 text-clay mb-3.5" />
              <h3 className="mb-1.5">Zone d&apos;intervention</h3>
              <p className="text-ink-soft text-sm mb-0">
                {siteConfig.address.city} ({siteConfig.address.postalCode})
                <br />
                et jusqu&apos;à 50 km alentour
              </p>
            </div>
            <div className="bg-paper border border-forest/10 rounded-lg p-7">
              <IconPhone className="w-8 h-8 text-clay mb-3.5" />
              <h3 className="mb-1.5">Téléphone &amp; e-mail</h3>
              <p className="text-ink-soft text-sm mb-0">
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                <br />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>
            <div className="bg-paper border border-forest/10 rounded-lg p-7">
              <IconClock className="w-8 h-8 text-clay mb-3.5" />
              <h3 className="mb-1.5">Horaires</h3>
              <p className="text-ink-soft text-sm mb-0">
                Lun–Ven : 8h–19h
                <br />
                Samedi : 9h–13h
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
            <ContactForm />

            <div>
              <div className="border border-forest/10 rounded-lg overflow-hidden h-[380px] bg-forest-2">
                <iframe
                  src="https://www.google.com/maps?q=Esboz-Brest,70300&output=embed"
                  loading="lazy"
                  title="Localisation Chucho — Esboz-Brest"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
              <p className="mt-4 text-ink-soft text-sm">
                <strong className="text-forest">Bon à savoir :</strong> déplacement inclus dans le
                devis pour toute intervention dans la zone couverte.
              </p>
            </div>
          </div>

          <div>
            <p className="text-center font-mono text-xs uppercase tracking-wider text-ink-soft mb-6">
              Communes couvertes (liste non exhaustive)
            </p>
            <ServiceAreaList />
          </div>
        </div>
      </section>
    </>
  );
}
