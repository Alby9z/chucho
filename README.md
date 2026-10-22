# Chucho — L'homme à tout faire

Site professionnel de Chucho, l'homme à tout faire (petits travaux, jardinage,
entretien des espaces verts, aménagement extérieur, nettoyage), développé en
**React / Next.js 14 (App Router) / Tailwind CSS / JavaScript**.

Zone d'intervention : **Esboz-Brest (70300)** et jusqu'à **50 km alentour**
(Luxeuil-les-Bains, Lure, Vesoul, Fougerolles, Saint-Loup-sur-Semouse,
Ronchamp, Val-d'Ajol, Plombières-les-Bains, Montbéliard...).

## Pages du site

| Page | URL | Description |
|---|---|---|
| Accueil | `/` | Accroche, services, zone d'intervention, avis clients |
| Services | `/services` | Détail des 4 pôles : petits travaux, jardinage, aménagement extérieur, nettoyage |
| Devis | `/devis` | Formulaire de demande de devis gratuit |
| Contact | `/contact` | Coordonnées, horaires, carte, formulaire de contact |
| Mentions légales | `/mentions-legales` | Obligatoire (LCEN) |
| Politique de confidentialité | `/politique-confidentialite` | Obligatoire (RGPD) — couvre les formulaires de devis/contact |

`robots.txt` et `sitemap.xml` sont générés automatiquement par Next.js
(`app/robots.js`, `app/sitemap.js`) et incluent ces 6 pages.

## Installation et lancement en local

Prérequis : [Node.js](https://nodejs.org) version 18.18 ou supérieure.

```bash
npm install
npm run dev
```

Le site est alors accessible sur **http://localhost:3000**.

## Mise en production

```bash
npm run build
npm start
```

Déployable sur **Vercel**, **Netlify**, ou tout hébergeur compatible
Node.js / Next.js (OVH, o2switch, Hostinger...).

## ⚠️ À compléter avant la mise en ligne

### 1. Informations légales (obligatoire)
Dans `lib/site-config.js`, section `legal` :
- `ownerName` — nom et prénom complets
- `siret` — numéro SIRET réel (obligatoire pour un auto-entrepreneur/EI)
- `hostingProvider` — nom et adresse de votre hébergeur réel

Ces informations apparaissent automatiquement sur la page `/mentions-legales`.
**Un site professionnel français doit légalement afficher son SIRET et son
identité réelle.**

### 2. Coordonnées
Tout se modifie dans `lib/site-config.js` (téléphone, e-mail, ville,
horaires) — répercuté automatiquement sur tout le site (header, footer,
JSON-LD, page contact).

⚠️ Le téléphone (06 98 68 34 12) et l'e-mail sont ceux fournis ; vérifiez-les
avant publication.

### 3. Nom de domaine réel
Remplacez `https://www.chucho-hommeatoutfaire.fr` par votre vrai domaine
dans `lib/site-config.js` (`siteConfig.url`).

### 4. Carte Google Maps
Dans `app/contact/page.js`, l'adresse utilisée est générique
("Esboz-Brest, 70300"). Remplacez par votre adresse précise si vous
souhaitez afficher un point exact (à ne faire que si vous acceptez de
publier votre adresse personnelle).

### 5. Photos
Le site utilise des blocs graphiques à la place de vraies photos
(réalisations, chantiers). Ajoutez vos photos dans `/public/images/` et
utilisez `next/image` pour les intégrer — une bonne vitrine avec des photos
avant/après de vos chantiers convertit beaucoup mieux qu'un texte seul.

### 6. Image Open Graph
Ajoutez `public/og-image.jpg` (1200×630 px) pour l'aperçu du site sur les
réseaux sociaux.

## Formulaires (devis et contact)

Fonctionnels côté interface (validation, confirmation visuelle) et déjà
connectés à de vraies routes API Next.js :

- `app/api/devis/route.js`
- `app/api/contact/route.js`

**Ces routes reçoivent et journalisent les données mais n'envoient pas
encore d'e-mail.** Pour recevoir les demandes par e-mail, branchez un
service comme [Resend](https://resend.com), SendGrid ou Nodemailer + SMTP —
un commentaire `TODO` indique l'endroit exact dans chaque fichier.

## SEO déjà en place

- Titres et descriptions uniques par page
- Open Graph / Twitter Card
- Données structurées JSON-LD (`HomeAndConstructionBusiness`) avec zone de
  service (rayon 50 km) pour le référencement local
- `robots.txt` et `sitemap.xml` automatiques
- URLs canoniques
- Structure sémantique HTML (un seul `h1` par page)

Pensez à créer une fiche **Google Business Profile** — essentiel pour un
artisan qui travaille sur une zone géographique définie.

Bonne mise en ligne !
