// Rôle : composer le SEO spécifique de la page Contact en s'appuyant sur <Seo> générique.
// Pourquoi : chaque page déclare son intention, sans réécrire toute la plomberie Helmet.

import { Seo } from "../../components/Seo";

const ContactSEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    "Une question ? Un souci ? Une idée ? Écris-nous, on te répond sans blabla inutile. C'est simple, rapide, humain.";

  return (
    <Seo
      title="Contact"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/contact"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/contact"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/contact.png"
      // Forcer la locale :
      ogLocale="fr_FR"
      appendSiteName
      indexable
    />
  );
}

export default ContactSEO;