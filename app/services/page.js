import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { IconHammer, IconLeaf, IconFence, IconSpray } from "@/components/Icons";

export const metadata = {
  title: "Nos services",
  description:
    "Petits travaux, jardinage, entretien des espaces verts, aménagement extérieur et nettoyage intérieur/extérieur. Tous les services de Chucho, l'homme à tout faire.",
  alternates: { canonical: "/services" },
};

const serviceDetails = [
  {
    id: "petits-travaux",
    icon: IconHammer,
    title: "Petits travaux & bricolage",
    text: "Un meuble à monter, une étagère à fixer, une porte qui grince ? Chucho intervient rapidement pour tous les petits travaux du quotidien.",
    items: [
      "Montage de meubles",
      "Petites réparations diverses",
      "Fixation (étagères, tringles, TV…)",
      "Petits travaux de peinture",
      "Pose de joints, quincaillerie",
      "Aide au déménagement ponctuelle",
    ],
  },
  {
    id: "jardinage",
    icon: IconLeaf,
    title: "Jardinage & entretien des espaces verts",
    text: "Un jardin bien entretenu, toute l'année, sans y passer vos week-ends. Interventions ponctuelles ou entretien régulier.",
    items: [
      "Tonte de pelouse",
      "Taille de haies et arbustes",
      "Désherbage",
      "Entretien des massifs",
      "Ramassage de feuilles",
      "Débroussaillage",
    ],
  },
  {
    id: "amenagement",
    icon: IconFence,
    title: "Aménagement extérieur",
    text: "De la petite terrasse à la clôture, Chucho vous accompagne pour donner à votre extérieur l'allure que vous voulez.",
    items: [
      "Pose de terrasses (bois, composite)",
      "Installation de clôtures",
      "Création d'allées",
      "Petits aménagements paysagers",
      "Pose de dallage",
      "Installation d'abris de jardin",
    ],
  },
  {
    id: "nettoyage",
    icon: IconSpray,
    title: "Nettoyage intérieur & extérieur",
    text: "Avant une location, après des travaux, ou simplement pour un coup de propre : un service de nettoyage complet.",
    items: [
      "Nettoyage après travaux",
      "Nettoyage de terrasses et façades",
      "Nettoyage intérieur (maison, appartement)",
      "Nettoyage de vitres",
      "Débarras léger",
      "Nettoyage avant/après location",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        title="Toutes les solutions pour votre maison et votre extérieur."
        description="Petits travaux, jardinage, aménagement extérieur et nettoyage : un seul artisan pour centraliser tous vos besoins, à Esboz-Brest et jusqu'à 50 km alentour."
      />

      <section className="py-20">
        <div className="container-page space-y-6">
          {serviceDetails.map(({ id, icon: Icon, title, text, items }) => (
            <div key={id} id={id} className="service-detail scroll-mt-24">
              <div className="icon-badge">
                <Icon className="w-[26px] h-[26px]" />
              </div>
              <div>
                <h3>{title}</h3>
                <p className="text-ink-soft">{text}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 list-none m-0 p-0 sub-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Un besoin qui n'est pas dans la liste ?"
        description="Chucho fait un peu de tout — décrivez votre projet, il vous dira s'il peut vous aider."
      />
    </>
  );
}
