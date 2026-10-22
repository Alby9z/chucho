import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan}`,
    template: `%s — ${siteConfig.shortName}`,
  },
  description:
    "Chucho, l'homme à tout faire à Esboz-Brest (70300) : petits travaux, jardinage, entretien des espaces verts, aménagement extérieur et nettoyage intérieur/extérieur. Devis gratuit, intervention jusqu'à 50 km.",
  keywords: [
    "homme à tout faire",
    "petits travaux",
    "jardinage",
    "entretien espaces verts",
    "aménagement extérieur",
    "nettoyage intérieur extérieur",
    "Esboz-Brest",
    "Haute-Saône",
    "Luxeuil-les-Bains",
    "Lure",
    "Vesoul",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description:
      "Petits travaux, jardinage, aménagement extérieur et nettoyage. Devis gratuit sous 24h, intervention à Esboz-Brest et jusqu'à 50 km alentour.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: "Petits travaux, jardinage, aménagement extérieur et nettoyage. Devis gratuit sous 24h.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: siteConfig.url },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.808, longitude: 6.446 },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-clay focus:text-paper focus:px-4 focus:py-2 focus:rounded-full"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
