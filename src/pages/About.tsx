import React from 'react';
import SeoMeta from '../features/about/AboutSeoMeta';
import { AboutContent } from '../features/about/AboutContent';
import { PresentationPageLayout } from '../layout/PresentationPageLayout';

/**
 * AboutPage présente l'histoire, les atouts, les FAQ et un appel à l'action (CTA).
 * Elle intègre : 
 * - le SEO via AboutMeta
 * - une structure via PresentationPageLayout pour garder la cohérence visuelle
 * - du contenu sémantique découpé en sections logiques et composants réutilisables
 */
const AboutPage: React.FC = () => {
  const headerConfig = {
    uptitle: 'Cash Sights',
    title: 'Votre budget en un chiffre',
    subtitle: 'Chaque jour, sachez exactement combien vous pouvez dépenser, sans calcul ni stress.',
    linkCta: 'Inscrivez-vous pour recevoir les mises à jour et accéder à la beta en avant-première.',
  };

  return (
    <>
      {/* SEO pour la page "À propos" */}
      <SeoMeta />

      {/* Layout principal avec un header défini */}
      <PresentationPageLayout header={headerConfig}>
        {/* Contenu structuré en sections pour plus de clarté */}
        <AboutContent/>
      </PresentationPageLayout>
    </>
  );
};

export default AboutPage;