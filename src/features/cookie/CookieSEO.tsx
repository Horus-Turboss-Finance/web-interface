// Rôle : composer le SEO spécifique de la page politique de cookie en s'appuyant sur <Seo> générique.
// Pourquoi : chaque page déclare son intention, sans réécrire toute la plomberie Helmet.

import { Seo } from "../../components/Seo";

const CookieSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "On garde les cookies pour les kiffs, pas pour te traquer. Lis comment on les utilise, en toute transparence.";

  return (
    <Seo
      title="Politique de cookies"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/cookies"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/cookies"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/cookies.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
      indexable
    />
  );
}

export default CookieSEO;