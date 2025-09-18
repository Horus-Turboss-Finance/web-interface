// Rôle : composer le SEO spécifique de la page 418 en s'appuyant sur <Seo> générique.
// Pourquoi : chaque page déclare son intention, sans réécrire toute la plomberie Helmet.

import { Seo } from "../../components/Seo";

const Error418SEO = () => {
  // Regrouper le copy au même endroit rend l'évolution simple (i18n, A/B test, etc.).
  const description =
    `Oups… Tu m'as demandé de faire du café,\nmais je suis clairement une théière.`;

  return (
    <Seo
      title="Je suis une théière"
      description={description}
      // Deux options équivalentes :
      // canonicalPath="/418"
      // ou bien og/url + canonical explicitement via href:
      canonicalPath="/418"
      ogType="website"
      twitterCard="summary"
      // Exemple d'image si disponible :
      // ogImageUrl="https://cashsight.fr/static/og/418.png"
      // Forcer la locale :
      ogLocale="fr_FR"
    />
  );
}

export default Error418SEO;