// Rôle : composer le SEO spécifique de la page Contact en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const PrivacySEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Ta vie privée compte. Cash Sights ne te traque pas, ne vend pas tes données, et respecte tes infos perso. Lis notre politique claire et sans jargon.";

  return (
    <Seo
      title="Politique de confidentialité"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/privacy"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/privacy"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/privacy.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
      indexable
    />
  );
}

export default PrivacySEO;