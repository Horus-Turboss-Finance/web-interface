import React from "react";
import SeoMeta from '../features/cgu/CguSEO';
import { CguContent } from "../features/cgu/CguContent";
import { PresentationPageLayout } from "../layout/PresentationPageLayout";

// Page CGU complète : contient uniquement l'assemblage du layout, SEO, et contenu

const CguPage: React.FC = () => {
  return (
    <>
      {/* Ajout des balises SEO spécifiques à la page CGU */}
      <SeoMeta />

      {/* Layout générique de présentation avec un header configuré */}
      <PresentationPageLayout
        header={{
          uptitle: "Mis à jour le 13 septembre 2025",
          title: "Conditions d'utilisation",
          subtitle:
            "En accédant à notre site, vous acceptez d'être lié(e) par les présentes conditions générales d'utilisation. Merci de les lire attentivement.",
        }}
      >
        {/* Contenu découpé dans un composant indépendant */}
        <CguContent />
      </PresentationPageLayout>
    </>
  );
};

export default CguPage;