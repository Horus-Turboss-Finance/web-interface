// Rôle : composer le SEO spécifique de la page legals en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const LegalsSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Transparence totale. Voici qui on est, où on est, et comment nous contacter.";

  return (
    <Seo
      title="Mentions légales"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/legals"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/legals"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/legals.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
      indexable
    />
  );
}

export default LegalsSEO;