import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-28">
      <div className="container-page text-center max-w-lg">
        <p className="eyebrow justify-center">Erreur 404</p>
        <h1 className="mb-4">Cette page n&apos;existe pas.</h1>
        <p className="text-ink-soft mb-8">
          La page que vous cherchez a peut-être été déplacée. Revenez à l&apos;accueil ou
          demandez directement un devis.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="/" className="btn btn-primary">Retour à l&apos;accueil</Link>
          <Link href="/devis" className="btn btn-outline">Demander un devis</Link>
        </div>
      </div>
    </section>
  );
}
