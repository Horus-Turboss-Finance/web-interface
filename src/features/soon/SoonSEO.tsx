// Rôle : composer le SEO spécifique de la page Soon en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const SoonSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Lancement imminent. Encore un peu de patience avant l'app qui va te réconcilier avec ton argent. Spoiler : elle est douce et stylée.";

  return (
    <Seo
      title="Cash Sights - Bientôt dispo pour kiffer ton budget"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/soon"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/soon"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/soon.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
    />
  );
}

export default SoonSEO;