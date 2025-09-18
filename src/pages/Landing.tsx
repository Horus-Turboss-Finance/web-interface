import React from "react";
import AcceuilHeader from "../features/landing/LandingSEO";
import { PresentationPageLayout } from "../layout/PresentationPageLayout";
import { LandingContent } from "../features/landing/LandingContent";

export const LandingPage : React.FC = () => {
  return (<>
    {/* Ajout des balises SEO spécifiques à la page Cookie */}
    <AcceuilHeader />

    {/* Layout générique de présentation avec un header configuré */}
    <PresentationPageLayout 
    header={{
      title:<>Savoir où t'en es.<br/>Sans stress</>, 
      subtitle:`Ajoute ce que t'as dépensé. Vois ton Kiff Score. Kiffe sans flipper.`, 
      darkMode: true, 
      cta: true
    }}>
      <LandingContent />
    </PresentationPageLayout>
  </>)
}

export default LandingPage