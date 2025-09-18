// Rôle : composer le SEO spécifique de la page Home en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const AccueilSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Découvre Cash Sights : l'app qui te dit combien tu peux te faire plaisir aujourd'hui, sans tableur ni culpabilité. Budget étudiant simplifié, kiff garanti";

  return (
    <Seo
      title="Cash Sights - Gère ton argent sans te prendre la tête"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/landing.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      indexable
    />
  );
}

export default AccueilSEO;