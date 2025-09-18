// Rôle : composer le SEO spécifique de la page About en s'appuyant sur <Seo> générique.
// Pourquoi : chaque page déclare son intention, sans réécrire toute la plomberie Helmet.

import { Seo } from "../../components/Seo";

const AboutSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Gère ton budget sans stress. Découvre pourquoi on a lancé Cash Sights, et comment ça peut t'aider à suivre tes dépenses sans finir à découvert.";

  return (
    <Seo
      title="À propos"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/about"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/about"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/about.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
      indexable
    />
  );
}

export default AboutSEO;