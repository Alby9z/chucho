"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/site-config";
import { IconPhone } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-forest border-b border-white/10">
      <div className="container-page flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-wide text-cream"
          onClick={() => setOpen(false)}
        >
          Chucho <span className="text-ochre">.</span>
          <span className="block font-mono text-[0.62rem] text-cream/50 uppercase tracking-[0.14em] font-normal -mt-1">
            L&apos;homme à tout faire
          </span>
        </Link>

        <nav
          className={`fixed inset-0 md:static bg-forest md:bg-transparent flex-col md:flex-row items-stretch md:items-center gap-1 px-7 md:px-0 pt-24 md:pt-0 pb-10 md:pb-0 transition-transform duration-300 md:transition-none ${
            open ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } flex`}
          aria-label="Navigation principale"
        >
          <ul className="flex flex-col md:flex-row gap-0 md:gap-1 list-none m-0 p-0">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="border-b md:border-b-0 border-white/10">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3.5 py-4 md:py-2.5 text-sm font-medium transition-colors ${
                      active ? "text-ochre" : "text-cream hover:text-ochre"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3.5">
          <a href={siteConfig.phoneHref} className="hidden lg:inline-flex items-center gap-1.5 font-mono text-sm text-cream">
            <IconPhone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
          <Link href="/devis" className="btn btn-primary hidden sm:inline-flex">
            Demander un devis
          </Link>
          <button
            className="md:hidden flex flex-col items-center justify-center gap-1 w-10 h-10 border-2 border-white/15 rounded-full text-cream z-50 relative"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block w-5 h-0.5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
