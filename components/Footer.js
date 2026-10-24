import Link from "next/link";
import Image from "next/image";
import { siteConfig, legalLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t-4 border-clay bg-forest pt-14 text-cream/75 md:pt-16">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-12 sm:grid-cols-2 xl:grid-cols-[1.1fr_0.8fr_1fr_1.15fr_0.9fr] xl:gap-5">

          {/* Présentation */}
          <div className="min-w-0">
            <Link
              href="/"
              className="mb-4 inline-block"
              aria-label="Chucho — Accueil"
            >
              <Image
                src="/images/logo.png"
                alt="Logo Chucho"
                width={180}
                height={100}
                className="h-20 w-auto object-contain object-left"
              />
            </Link>

            <p className="mb-3 max-w-[30ch] text-sm">
              {siteConfig.slogan}
            </p>

            <p className="text-xs leading-5 text-cream/50">
              {siteConfig.tagline}
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Retrouver Chucho sur Facebook"
                title="Facebook de Chucho"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:border-ochre hover:bg-ochre hover:text-forest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v2.1H7v3.2h2.9V21h3.6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-cream">
              Navigation
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="transition-colors hover:text-ochre">Accueil</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-ochre">Nos services</Link></li>
              <li><Link href="/galerie" className="transition-colors hover:text-ochre">Galerie des réalisations</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-ochre">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-cream">
              Services
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#petits-travaux" className="transition-colors hover:text-ochre">Petits travaux</Link></li>
              <li><Link href="/services#jardinage" className="transition-colors hover:text-ochre">Jardinage &amp; espaces verts</Link></li>
              <li><Link href="/services#amenagement" className="transition-colors hover:text-ochre">Aménagement extérieur</Link></li>
              <li><Link href="/services#nettoyage" className="transition-colors hover:text-ochre">Nettoyage</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-cream">
              Contact
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                {siteConfig.address.city} ({siteConfig.address.postalCode})
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-ochre">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="break-all">
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-ochre">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="min-w-0">
            <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-cream">
              Horaires d’ouverture
            </h2>
            <ul className="space-y-2 text-sm">
              {siteConfig.hours.map((item) => (
                <li key={item.days} className="flex flex-col gap-1">
                  <span>{item.days}</span>
                  <span className="whitespace-nowrap text-cream">
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Liens légaux */}
        <div className="flex flex-col gap-5 py-6 text-xs text-cream/55">
          <nav
            aria-label="Informations légales"
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ochre"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/cookies" className="transition-colors hover:text-ochre">
              Gestion des cookies
            </Link>
          </nav>

          <div className="flex flex-col justify-between gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
            <span>
              © {new Date().getFullYear()} {siteConfig.name} — Tous droits réservés
            </span>
            <Link href="/mentions-legales" className="transition-colors hover:text-ochre">
              Informations sur l’éditeur du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}