import { siteConfig } from "@/lib/site-config";

export default function ServiceAreaList({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
      {siteConfig.serviceTowns.map((town) => (
        <span
          key={town}
          className={`font-mono text-xs uppercase tracking-wide px-3.5 py-2 rounded-full border ${
            isDark ? "border-white/15 text-cream/80" : "border-forest/15 text-ink-soft"
          }`}
        >
          {town}
        </span>
      ))}
    </div>
  );
}
