// Rôle : composer le SEO spécifique de la page 404 en s'appuyant sur <Seo> générique.
// Pourquoi : chaque page déclare son intention, sans réécrire toute la plomberie Helmet.

import { Seo } from "../../components/Seo";

const Error404SEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Cette page n'existe pas (ou plus). Mais t'en fais pas, ton Kiff Score du jour, lui, est bien là !";

  return (
    <Seo
      title="Oups… Page introuvable"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/404"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/404"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/404.png"
      // Forcer la locale :
      ogLocale="fr_FR"
    />
  );
}

export default Error404SEO;