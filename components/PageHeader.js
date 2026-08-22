import Link from "next/link";

export default function PageHeader({ crumb, title, description }) {
  return (
    <div className="relative overflow-hidden bg-forest text-cream pt-16 pb-12">
      <div
        className="absolute inset-0 grid-bg opacity-30"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent 80%)" }}
        aria-hidden="true"
      />
      <div className="container-page relative z-10">
        <p className="font-mono text-xs uppercase tracking-wider text-cream/50 mb-3.5">
          <Link href="/" className="hover:text-ochre">Accueil</Link> / <span className="text-ochre">{crumb}</span>
        </p>
        <h1 className="text-cream max-w-[22ch] mb-3">{title}</h1>
        {description && <p className="text-cream/70 max-w-[56ch] m-0">{description}</p>}
      </div>
    </div>
  );
}
