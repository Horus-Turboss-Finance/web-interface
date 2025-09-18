// Rôle : composer le SEO spécifique de la page Fonctionnalité en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const FeaturesSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Découvre tout ce que Cash Sights peut faire pour t'aider à gérer ton argent sans stress : suivi des dépenses, budget intelligent, Kiff Score, et plus encore.";

  return (
    <Seo
      title="Fonctionnalités"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/features"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/features"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/features.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
      indexable
    />
  );
}

export default FeaturesSEO;