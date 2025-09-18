import React from 'react';
import Page418Meta from '../../features/errors/Page418SEO';
import SinglePageLayout from '../../layout/singlePageLayout';

/**
 * Page418 est une page humoristique basée sur le code HTTP 418 : "I'm a teapot".
 * Elle affiche un message simple, destiné à la détente, tout en assurant un bon SEO via les métadonnées.
 */
const Page418: React.FC = () => {
  return (
    <>
      {/* Balises <head> spécifiques à la page 418 */}
      <Page418Meta />

      {/* Layout simple pour afficher le titre et le message d'erreur */}
      <SinglePageLayout
        title="418 - I'm a teapot"
        description="Sorry, I can't brew coffee, I'm just a teapot."
      />
    </>
  );
};

export default Page418;