// Rôle : composer le SEO spécifique de la page Inscription en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const InscriptionSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Rejoins Cash Sights et prends le contrôle de tes finances. Crée ton compte en quelques secondes, sans tracking ni partage de données.";

  return (
    <Seo
      title="Inscription"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/signup"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/signup"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/signup.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
    />
  );
}

export default InscriptionSEO;