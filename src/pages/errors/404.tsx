import React from 'react';
import Page404Meta from '../../features/errors/Page404SEO';
import SinglePageLayout from '../../layout/singlePageLayout';

/**
 * Page404 est la page d'erreur affichée lorsqu'une route non définie est atteinte.
 * Elle combine les métadonnées spécifiques (SEO) et une mise en page simple avec un message utilisateur.
 */
const Page404: React.FC = () => {
  return (
    <>
      {/* Composant dédié à la gestion des balises <head> pour cette page */}
      <Page404Meta />

      {/* Layout de type "single page" avec un titre et une description d'erreur */}
      <SinglePageLayout
        title="404 - Page Not Found"
        description="Sorry, the page you are looking for does not exist."
      />
    </>
  );
};

export default Page404;
