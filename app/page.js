import Link from "next/link";
import KraftTag from "@/components/KraftTag";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import ServiceAreaList from "@/components/ServiceAreaList";
import { IconHammer, IconLeaf, IconFence, IconSpray, IconCheck, IconPhone } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Petits travaux, jardinage & entretien extérieur à Esboz-Brest",
  description:
    "Chucho, l'homme à tout faire : petits travaux, jardinage, entretien des espaces verts, aménagement extérieur et nettoyage à Esboz-Brest (70300) et jusqu'à 50 km alentour. Devis gratuit.",
  alternates: { canonical: "/" },
};

const services = [
  {
    icon: IconHammer,
    title: "Petits travaux",
    description: "Bricolage, montage de meubles, petites réparations, fixations.",
    href: "/services#petits-travaux",
    linkLabel: "En savoir plus",
  },
  {
    icon: IconLeaf,
    title: "Jardinage & espaces verts",
    description: "Tonte, taille de haies, désherbage, entretien régulier du jardin.",
    href: "/services#jardinage",
    linkLabel: "En savoir plus",
  },
  {
    icon: IconFence,
    title: "Aménagement extérieur",
    description: "Terrasses, clôtures, allées, petits aménagements paysagers.",
    href: "/services#amenagement",
    linkLabel: "En savoir plus",
  },
  {
    icon: IconSpray,
    title: "Nettoyage",
    description: "Nettoyage intérieur et extérieur, après travaux, façades, terrasses.",
    href: "/services#nettoyage",
    linkLabel: "En savoir plus",
  },
];

const checklist = [
  "Devis gratuit et transparent avant toute intervention",
  "Un seul interlocuteur, du premier appel à la fin du chantier",
  "Intervention à Esboz-Brest et jusqu'à 50 km alentour",
  "Disponible pour les petits comme les gros travaux",
];

const testimonials = [
  {
    quote: "Chucho a monté toute ma cuisine en une journée et a même nettoyé après. Sérieux et ponctuel.",
    name: "Nathalie R.",
    role: "Luxeuil-les-Bains",
  },
  {
    quote: "Entretien du jardin tous les mois, jamais un rendez-vous manqué. Travail soigné à chaque fois.",
    name: "Bernard T.",
    role: "Esboz-Brest",
  },
  {
    quote: "Aménagement d'une terrasse en bois, du devis à la réalisation : rapide, propre et au prix annoncé.",
    name: "Claire V.",
    role: "Lure",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-cream py-24 md:py-28">
        <div
          className="absolute inset-0 grid-bg opacity-30"
          style={{ maskImage: "linear-gradient(to bottom, black, transparent 75%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 85% 15%, rgba(214,162,74,0.18), transparent 45%)" }}
          aria-hidden="true"
        />
        <div className="container-page relative z-10 grid md:grid-cols-[1.15fr,0.85fr] gap-12 items-center">
          <div>
            <p className="eyebrow eyebrow-light">Esboz-Brest (70300) &amp; 50 km alentour</p>
            <h1 className="text-cream max-w-[15ch] mb-4">{siteConfig.slogan}</h1>
            <p className="text-lg text-cream/75 max-w-[46ch] mb-8">
              Petits travaux, jardinage, entretien des espaces verts, aménagement extérieur et
              nettoyage. Un seul homme à contacter pour tous vos besoins, chez vous, sans
              intermédiaire.
            </p>
            <div className="flex gap-3.5 flex-wrap mb-9">
              <Link href="/devis" className="btn btn-primary">Demander un devis</Link>
              <a href={siteConfig.phoneHref} className="btn btn-outline-light">
                <IconPhone className="w-4 h-4" /> {siteConfig.phone}
              </a>
            </div>
            <div className="flex gap-8 flex-wrap font-mono">
              <div><strong className="block text-2xl text-ochre">50 km</strong><span className="text-xs uppercase tracking-wide text-cream/50">Zone d&apos;intervention</span></div>
              <div><strong className="block text-2xl text-ochre">24h</strong><span className="text-xs uppercase tracking-wide text-cream/50">Réponse à votre devis</span></div>
              <div><strong className="block text-2xl text-ochre">100%</strong><span className="text-xs uppercase tracking-wide text-cream/50">Fait par Chucho</span></div>
            </div>
          </div>
          <div className="flex justify-center">
            <KraftTag title="Devis gratuit">Sans engagement, réponse sous 24h</KraftTag>
          </div>
        </div>
      </section>

      <section aria-label="Nos services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/10 border border-forest/10">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow">Pourquoi Chucho</p>
            <h2 className="mb-4">Un artisan de confiance, pas une entreprise anonyme.</h2>
            <p className="text-ink-soft mb-6">
              Pas de sous-traitance, pas de standard téléphonique : c&apos;est Chucho qui prend
              votre appel, qui établit le devis et qui réalise les travaux. Un interlocuteur
              unique, du début à la fin.
            </p>
            <ul className="list-none m-0 p-0">
              {checklist.map((item) => (
                <li key={item} className="checklist-item">
                  <IconCheck className="w-5 h-5 text-clay flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative bg-forest rounded-lg min-h-[340px] p-8 flex flex-col justify-end text-cream overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
            <span className="relative z-10 font-mono uppercase text-xs tracking-wider text-ochre">
              Chucho — artisan polyvalent
            </span>
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream py-16">
        <div className="container-page">
          <p className="text-center font-mono text-xs uppercase tracking-wider text-cream/50 mb-6">
            Zone d&apos;intervention — {siteConfig.serviceArea}
          </p>
          <ServiceAreaList variant="dark" />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="eyebrow">Ils lui font confiance</p>
            <h2>Ce que disent ses clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-paper border border-forest/10 rounded-lg p-7">
                <div className="text-clay text-sm mb-2.5 tracking-widest">★★★★★</div>
                <p className="italic text-ink-soft text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div className="font-mono text-xs uppercase tracking-wide font-semibold text-forest">{t.name}</div>
                <div className="text-xs text-ink-soft">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Un projet, une réparation, un jardin à entretenir ?"
        description="Décrivez votre besoin, Chucho vous répond avec un devis clair sous 24h ouvrées."
        buttonLabel="Demander un devis gratuit"
      />
    </>
  );
}
