// Rôle : composer le SEO spécifique de la page des CGU en s'appuyant sur <Seo> générique.
// Pourquoi : chaque page déclare son intention, sans réécrire toute la plomberie Helmet.

import { Seo } from "../../components/Seo";

const CguSeo = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Nos règles, ton confort. Découvre les CGU de Cash Sights : simples, lisibles, sans bullshit. Pour un usage serein de ton appli.";

  return (
    <Seo
      title="Conditions Générales d'Utilisation"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/terms"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/terms"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/terms.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
      indexable
    />
  );
}

export default CguSeo;