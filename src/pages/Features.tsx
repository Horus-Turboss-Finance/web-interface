import React from "react";
import SeoMeta from '../features/features/FeaturesSEO';
import { FeaturesContent } from "../features/features/FeaturesContent";
import { PresentationPageLayout } from "../layout/PresentationPageLayout";

// Page de fonctionnalité complète : contient uniquement l'assemblage du layout, SEO, et contenu

const FeaturePage: React.FC = () => {
  return (
    <>
      {/* Ajout des balises SEO spécifiques à la page des fonctionnalité */}
      <SeoMeta />

      {/* Layout générique de présentation avec un header configuré */}
      <PresentationPageLayout
        header={{
          uptitle: "Cash Sights",
          title:"Un chiffre. Une décision. Votre budget simplifié.", 
          subtitle:
            "Découvrez le Kiff Score : la méthode la plus claire pour savoir combien vous pouvez dépenser aujourd'hui.",
          link_cta: "Inscrivez-vous à la newsletter pour accéder à la beta et recevoir nos mises à jour.",
        }}
      >
        {/* Contenu découpé dans un composant indépendant */}
        <FeaturesContent />
      </PresentationPageLayout>
    </>
  );
};

export default FeaturePage;