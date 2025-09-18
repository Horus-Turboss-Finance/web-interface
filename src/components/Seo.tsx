// Rôle : composant SEO générique et réutilisable pour toutes les pages.
// Pourquoi : dédupliquer <Helmet> + standardiser nos meta (Open Graph, Twitter, canonical, robots…).
// Choix : react-helmet-async (plus sûr que react-helmet pour SSR/concurrency).

import { Helmet } from "react-helmet";
import { seoConfig } from "../config/seoConfig";

type OgType = "website" | "article";

export interface SeoProps {
  /** Titre de la page, le siteName est ajouté automatiquement si `appendSiteName` est true */
  title: string;
  /** Description courte (<= ~160 caractères recommandé) */
  description?: string;
  /** Chemin relatif de la page pour construire la canonical (ex: "/contact") */
  canonicalPath?: string;
  /** Open Graph type (par défaut "website") */
  ogType?: OgType;
  /** Forcer l'indexation */
  indexable?: boolean;
  /** Ajouter automatiquement " - {siteName}" au titre */
  appendSiteName?: boolean;
  /** Twitter card type (summary | summary_large_image) */
  twitterCard?: "summary" | "summary_large_image";

  /** Champs étendus au besoin sans casser l'API */
  ogImageUrl?: string;
  ogLocale?: string; // ex: "fr_FR"
}

export function Seo({
  title,
  description,
  canonicalPath,
  ogType = "website",
  indexable = true,
  appendSiteName = true,
  twitterCard = "summary",
  ogImageUrl,
  ogLocale = "fr_FR",
}: SeoProps) {
  // Pourquoi : centraliser la logique de titre => maintenabilité + cohérence.
  const fullTitle = appendSiteName ? `${title} - ${seoConfig.siteName}` : title;
  const canonicalUrl = canonicalPath ? new URL(canonicalPath, seoConfig.baseUrl).toString() : undefined;

  // Robots : explicite, évite des surprises (ex: staging non indexable).
  const robots = indexable ? "index,follow" : "noindex,nofollow";

  return (
    <Helmet>
      {/* ----- Canonical ----- */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* ----- Title & Description ----- */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}

      {/* ----- Robots ----- */}
      <meta name="robots" content={robots} />

      {/* ----- Open Graph (Facebook, LinkedIn, …) ----- */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={seoConfig.siteName} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogLocale && <meta property="og:locale" content={ogLocale} />}

      {/* ----- Twitter Cards ----- */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
    </Helmet>
  );
}