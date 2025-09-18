import React from 'react';
import SeoMeta from '../features/soon/SoonSEO';
import SinglePageLayout from '../layout/singlePageLayout';

/**
 * Page à venir est la page affichée lorsqu'une route est définie mais qu'elle n'est développé.
 * Elle combine les métadonnées spécifiques (SEO) et une mise en page simple avec un message utilisateur.
 */
const SoonPage: React.FC<{me?:boolean}> = ({me}) => {
  return (
    <>
      {/* Composant dédié à la gestion des balises <head> pour cette page */}
      <SeoMeta />

      {/* Layout de type "single page" avec un titre et une description */}
      <SinglePageLayout
        isDashboardRedirect={me}
        title="404 - Page Not Found"
        description="Cette page est encore en construction. Reste vigilant !"
      />
    </>
  );
};

export default SoonPage;
