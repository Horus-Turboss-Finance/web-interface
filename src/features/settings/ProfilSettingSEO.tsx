// Rôle : composer le SEO spécifique de la page paramètre de profile en s'appuyant sur <Seo> générique.

import { Seo } from "../../components/Seo";

const ContactSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Modifie tes informations personnelles, configure ton profil et sécurise tes données sur Cash Sights. Gère ton compte facilement et en toute confidentialité.";

  return (
    <Seo
      title="Paramètres de profil"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/@me/setting"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/@me/setting"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/setting/profile.png"
      // Forcer la locale :
      ogLocale="fr_FR"
    />
  );
}

export default ContactSEO;