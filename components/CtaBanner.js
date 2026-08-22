import Link from "next/link";

export default function CtaBanner({ title, description, buttonLabel = "Demander un devis", href = "/devis" }) {
  return (
    <section className="bg-clay text-paper text-center py-16 px-6">
      <div className="container-page">
        <h2 className="text-paper mb-3.5">{title}</h2>
        <p className="text-paper/90 max-w-[52ch] mx-auto mb-7">{description}</p>
        <Link href={href} className="btn btn-outline-light !text-paper !border-paper/50 hover:!bg-paper hover:!text-clay-dark">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
