
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Galerie de réalisations",
  description:
    "Découvrez les réalisations de Chucho : petits travaux, jardinage, entretien des espaces verts, aménagement extérieur et nettoyage autour d'Esboz-Brest.",
};

const categories = [
  {
    title: "Petits travaux",
    description: "Montage, réparations et améliorations du quotidien.",
  },
  {
    title: "Jardinage & espaces verts",
    description: "Entretien des jardins, tonte et taille de haies.",
  },
  {
    title: "Aménagement extérieur",
    description: "Terrasses, clôtures et aménagements extérieurs.",
  },
  {
    title: "Nettoyage",
    description: "Nettoyage intérieur et extérieur.",
  },
];


const projects = [
  {
    title: "Petits travaux",
    category: "Réparation & bricolage",
    description: "Des travaux réalisés avec soin pour améliorer le quotidien.",
    image: "/image/galerie/photo-1.jpeg",
    alt: "Réalisation de petits travaux et de bricolage",
  },
  {
    title: "Jardinage",
    category: "Entretien extérieur",
    description: "Des espaces verts entretenus pour un extérieur propre.",
    image: "/image/galerie/photo-2.jpeg",
    alt: "Entretien d'un jardin et des espaces verts",
  },
  {
    title: "Aménagement extérieur",
    category: "Aménagement",
    description: "Des aménagements adaptés aux besoins de chaque client.",
    image: "/image/galerie/photo-3.jpeg",
    alt: "Réalisation d'un aménagement extérieur",
  },
  {
    title: "Nettoyage",
    category: "Entretien & nettoyage",
    description: "Des espaces nettoyés avec attention et professionnalisme.",
    image: "/image/galerie/photo-4.jpeg",
    alt: "Réalisation d'une prestation de nettoyage",
  },
  {
    title: "Débroussaillage",
    category: "Espaces verts",
    description:
      "Débroussaillage des terrains et des zones envahies par la végétation.",
    image: "/image/galerie/photo-5.jpeg",
    alt: "Débroussaillage d'un terrain et entretien de la végétation",
  },
  {
    title: "Taille de haies",
    category: "Taille & entretien",
    description:
      "Taille et entretien des haies pour des extérieurs propres et soignés.",
    image: "/image/galerie/photo-6.jpeg",
    alt: "Taille de haies dans un jardin",
  },
  {
    title: "Tonte de pelouse",
    category: "Entretien de jardin",
    description:
      "Tonte de pelouse et entretien régulier des espaces engazonnés.",
    image: "/image/galerie/photo-7.jpeg",
    alt: "Tonte et entretien d'une pelouse",
  },
  {
    title: "Nettoyage extérieur",
    category: "Entretien extérieur",
    description:
      "Nettoyage des abords, enlèvement des végétaux coupés et remise au propre du terrain.",
    image: "/image/galerie/photo-8.jpeg",
    alt: "Nettoyage et remise au propre des abords d'une maison",
  },
];


export default function GaleriePage() {
  return (
    <>
      <PageHeader
        crumb="Galerie"
        title="Les réalisations de Chucho"
        description="Découvrez les travaux et les services proposés autour d'Esboz-Brest."
      />

      <section className="container-page py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Du concret, du travail soigné</p>
          <h2 className="mb-4">
            Une galerie qui s&apos;enrichira au fil des chantiers
          </h2>
          <p className="text-ink-soft leading-7">
            Découvrez quelques exemples de prestations proposées par Chucho.
            Les photos de réalisations pourront être ajoutées ici au fur et à
            mesure des chantiers.
          </p>
        </div>

        {/* Galerie photos */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-forest/10 bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-forest/5">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                  <span className="inline-block rounded-full bg-ochre px-3 py-1 text-xs font-semibold text-forest">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-xl text-forest">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-ink-soft">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Catégories de services : conservées */}
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Nos prestations</p>
          <h2 className="mb-4">Les services proposés</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-lg border border-forest/10 bg-paper p-6"
            >
              <h3 className="mb-3 text-xl text-forest">
                {category.title}
              </h3>
              <p className="mb-5 text-sm leading-6 text-ink-soft">
                {category.description}
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold text-clay underline underline-offset-4"
              >
                Découvrir le service
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-forest px-6 py-10 text-center text-cream md:px-10">
          <h2 className="mb-3 text-cream">Vous avez un projet ?</h2>
          <p className="mb-6 text-cream/75">
            Contactez Chucho pour parler de vos travaux et demander un devis.
          </p>
          <Link href="/devis" className="btn btn-primary">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
