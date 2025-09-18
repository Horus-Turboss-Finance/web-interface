// Rôle : composer le SEO spécifique de la page Connexion en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const ConnectSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Connecte-toi à ton compte Cash Sights et accède à ton dashboard pour suivre ton budget. Simple, rapide et sécurisé.";

  return (
    <Seo
      title="Connexion"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/signin"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/signin"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/signin.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
    />
  );
}

export default ConnectSEO;