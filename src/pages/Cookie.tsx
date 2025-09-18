import React from "react";
import SeoMeta from '../features/cookie/CookieSEO';
import { CookieContent } from "../features/cookie/CookieContent";
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
          title: "Politique de cookies",
          subtitle:
            "Nous utilisons des cookies pour améliorer votre expérience. Voici comment, pourquoi, et comment vous pouvez les contrôler.",
        }}
      >
        {/* Contenu découpé dans un composant indépendant */}
        <CookieContent />
      </PresentationPageLayout>
    </>
  );
};

export default CookiePage;