
const siteConfig = {
  name: "Chucho — L’homme à tout faire",
  shortName: "Chucho",
  url: "https://www.chucho-hommeatoutfaire.fr",
  description:
    "Chucho, homme à tout faire à Esboz-Brest et dans un rayon de 50 km.",
  slogan: "Un coup de main pour vos travaux du quotidien.",
  tagline: "Esboz-Brest et 50 km alentour.",

  phone: "06 98 68 34 12",
  phoneHref: "tel:+33698683412",
  email: "chucholhommeatoutfaire@gmail.com",

  address: {
    city: "Esboz-Brest",
    postalCode: "70300",
  },

  hours: [
    { days: "Lundi – Vendredi", hours: "8h00 – 19h00" },
    { days: "Samedi", hours: "9h00 – 13h00" },
    { days: "Dimanche", hours: "Sur demande" },
  ],

  serviceTowns: [
    "Esboz-Brest",
    "Luxeuil-les-Bains",
    "Froideconche",
    "Saint-Sauveur",
    "Lure",
    "Vesoul",
  ],

  socials: {
    facebook: "https://m.facebook.com/profile.php?id=61590732410178",
    
  },

  legal: {
  ownerName: "hagist guillaume",
  status: "Entrepreneur individuel",
  siret: "10367605200014",
  rcs: "",
  vatNumber: "FR93103676052",
  hostingProvider: {
    name: "Vercel Inc.",
    address: "440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis",
  },
},
};

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Demander un devis", href: "/devis" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Cookies", href: "/cookies" },
];

export { siteConfig, navLinks, legalLinks };
