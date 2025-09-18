// Rôle : config centralisée SEO (nom du site, baseUrl).
// Pourquoi : éviter les hardcodes partout (DRY) et simplifier les changements ultérieurs.

export const seoConfig = {
  siteName: "Cash Sights",
  baseUrl: "https://cashsight.fr", // Toujours absolu pour canonical/OG
} as const;
