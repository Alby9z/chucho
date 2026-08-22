import Link from "next/link";
import { siteConfig, legalLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/75 pt-16">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr,1fr,1fr,1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="font-display text-2xl text-cream mb-2">
              Chucho <span className="text-ochre">.</span>
            </div>
            <p className="text-sm max-w-[30ch] mb-3">{siteConfig.slogan}</p>
            <p className="text-xs text-cream/50">{siteConfig.tagline}</p>
          </div>

          <div>
            <h4 className="text-cream font-mono uppercase text-xs tracking-wider mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-ochre transition-colors">Nos services</Link></li>
              <li><Link href="/devis" className="hover:text-ochre transition-colors">Demander un devis</Link></li>
              <li><Link href="/contact" className="hover:text-ochre transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-mono uppercase text-xs tracking-wider mb-4 font-semibold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#petits-travaux" className="hover:text-ochre transition-colors">Petits travaux</Link></li>
              <li><Link href="/services#jardinage" className="hover:text-ochre transition-colors">Jardinage &amp; espaces verts</Link></li>
              <li><Link href="/services#amenagement" className="hover:text-ochre transition-colors">Aménagement extérieur</Link></li>
              <li><Link href="/services#nettoyage" className="hover:text-ochre transition-colors">Nettoyage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-mono uppercase text-xs tracking-wider mb-4 font-semibold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>{siteConfig.address.city} ({siteConfig.address.postalCode})</li>
              <li><a href={siteConfig.phoneHref} className="hover:text-ochre transition-colors">{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-ochre transition-colors">{siteConfig.email}</a></li>
              <li className="text-cream/50">{siteConfig.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 py-6 text-xs text-cream/45">
          <span>© {new Date().getFullYear()} {siteConfig.name} — Tous droits réservés</span>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ochre transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
