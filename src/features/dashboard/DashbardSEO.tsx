// Rôle : composer le SEO spécifique de la page Dashboard en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const DashboardSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Accède à ton dashboard Cash Sights : visualise tes dépenses, suis ton budget et prends le contrôle de tes finances sans partager tes données.";

  return (
    <Seo
      title="Dashboard - Gère ton budget facilement"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/@me"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/@me"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/dashboard.png"
      // Forcer la locale :
      ogLocale="fr_FR"
    />
  );
}

export default DashboardSEO;