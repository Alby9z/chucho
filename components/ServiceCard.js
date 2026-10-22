import Link from "next/link";

export default function ServiceCard({ icon: Icon, title, description, href, linkLabel }) {
  return (
    <div className="group bg-paper hover:bg-forest transition-colors p-8">
      <Icon className="w-10 h-10 text-clay group-hover:text-ochre transition-colors mb-[18px]" />
      <h3 className="group-hover:text-cream transition-colors mb-1.5">{title}</h3>
      <p className="text-sm text-ink-soft group-hover:text-cream/70 transition-colors mb-0">{description}</p>
      <Link
        href={href}
        className="inline-block mt-3.5 font-mono text-xs uppercase tracking-wider text-clay group-hover:text-ochre transition-colors"
      >
        {linkLabel} →
      </Link>
    </div>
  );
}
