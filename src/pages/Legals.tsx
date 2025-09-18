import React from "react";
import SeoMeta from '../features/legals/LegalsSEO';
import { LegalsContent } from "../features/legals/LegalsContent";
import { PresentationPageLayout } from "../layout/PresentationPageLayout";

// Page Cookie complète : contient uniquement l'assemblage du layout, SEO, et contenu

const CookiePage: React.FC = () => {
  return (
    <>
      {/* Ajout des balises SEO spécifiques à la page Cookie */}
      <SeoMeta />

      {/* Layout générique de présentation avec un header configuré */}
      <PresentationPageLayout
        header={{
          uptitle: "Mis à jour le 13 septembre 2025",
          title: "Mentions légales",
          subtitle: "Qui sommes nous, et avec qui nous intervenons.",
        }}
      >
        {/* Contenu découpé dans un composant indépendant */}
        <LegalsContent />
      </PresentationPageLayout>
    </>
  );
};

export default CookiePage;