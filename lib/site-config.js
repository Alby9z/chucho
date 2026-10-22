// Configuration centrale du site — modifier ici pour propager partout
// (nav, footer, métadonnées SEO, JSON-LD, formulaires...)

export const siteConfig = {
  name: "Chucho — L'homme à tout faire",
  shortName: "Chucho",
  slogan: "Un seul homme, toutes les solutions.",
  tagline:
    "Petits travaux, jardinage, entretien des espaces verts, aménagement extérieur et nettoyage",
  url: "https://www.chucho-hommeatoutfaire.fr",
  phone: "06 98 68 34 12",
  phoneHref: "tel:+33698683412",
<<<<<<< HEAD
  email: "chucholhommeatoutfaire@gmail.com",
=======
  email: "contact@chucho-hommeatoutfaire.fr",
>>>>>>> origin/main
  address: {
    city: "Esboz-Brest",
    postalCode: "70300",
    region: "Bourgogne-Franche-Comté",
    country: "FR",
  },
  hours: [
<<<<<<< HEAD
  { days: "Lundi", hours: "07h30 – 19h00" },
  { days: "Mardi", hours: "07h30 – 19h00" },
  { days: "Mercredi", hours: "07h30 – 19h00" },
  { days: "Jeudi", hours: "07h30 – 19h00" },
  { days: "Vendredi", hours: "07h30 – 19h00" },
  { days: "Samedi", hours: "07h00 – 13h00" },
  { days: "Dimanche", hours: "Fermé" },
],
=======
    { days: "Lundi – Vendredi", hours: "8h00 – 19h00" },
    { days: "Samedi", hours: "9h00 – 13h00" },
    { days: "Dimanche", hours: "Sur demande" },
  ],
>>>>>>> origin/main
  serviceArea: "Esboz-Brest (70300) et jusqu'à 50 km alentour",
  serviceTowns: [
    "Esboz-Brest",
    "Luxeuil-les-Bains",
    "Lure",
    "Vesoul",
    "Fougerolles",
    "Saint-Loup-sur-Semouse",
    "Ronchamp",
    "Val-d'Ajol",
    "Plombières-les-Bains",
    "Montbéliard",
  ],
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  // ⚠️ Informations légales à compléter avant mise en ligne (voir /mentions-legales)
  legal: {
<<<<<<< HEAD
    status: "Entrepreneur individuel",
    ownerName: "Hagist Guillaume",
    siret: "10367605200014",
=======
    status: "Auto-entrepreneur", // ex. Auto-entrepreneur, EI, EURL...
    ownerName: "Chucho [Nom de famille]",
    siret: "À compléter (n° SIRET)",
>>>>>>> origin/main
    rcs: "",
    vatNumber: "Non applicable (franchise en base de TVA) — à confirmer",
    hostingProvider: {
      name: "À compléter (ex. Vercel Inc. / OVH / autre hébergeur)",
<<<<<<< HEAD
      address: "1 B ROUTE DU POMMIER, 70300 ESBOZ-BREST",
=======
      address: "À compléter",
>>>>>>> origin/main
    },
  },
};

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
<<<<<<< HEAD
  { href: "/galerie", label: "Galerie" },
=======
>>>>>>> origin/main
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
<<<<<<< HEAD
  { href: "/cookies", label: "Politique de cookies" },
=======
>>>>>>> origin/main
];
