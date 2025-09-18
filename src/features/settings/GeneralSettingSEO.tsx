// Rôle : composer le SEO spécifique de la page General setting en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const SettingsSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Gère tes préférences et sécurise ton compte sur Cash Sights. Paramètre ton expérience, tes notifications et protège tes données facilement.";

  return (
    <Seo
      title="Paramètres généraux"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/@me/setting/general"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/@me/setting/general"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/setting/general.png"
      // Forcer la locale :
      ogLocale="fr_FR"
    />
  );
}

export default SettingsSEO;