import React from "react";
import SeoMeta from '../features/features/FeaturesSEO';
import { PrivacyContent } from "../features/privacy/PrivacyContent";
import { PresentationPageLayout } from "../layout/PresentationPageLayout";

// Page de fonctionnalité complète : contient uniquement l'assemblage du layout, SEO, et contenu

const PrivacyPage: React.FC = () => {
  return (
    <>
      {/* Ajout des balises SEO spécifiques à la page des fonctionnalité */}
      <SeoMeta />

      {/* Layout générique de présentation avec un header configuré */}
      <PresentationPageLayout
        header={{
          subtitle:"Votre vie privée est importante pour nous. Nous nous engageons à respecter vos données personnelles et à en assurer la protection à chaque étape.",
          title:"Politique de confidentialité", 
          uptitle:"Mis à jour le 13 septembre 2025", 
        }}
      >
        {/* Contenu découpé dans un composant indépendant */}
        <PrivacyContent />
      </PresentationPageLayout>
    </>
  );
};

export default PrivacyPage;