// Composant qui contient uniquement le contenu HTML sémantique de la page des fonctionnalité
import React from "react";
import { Detail } from "../../components/detail";
import { Button } from "../../components/buttons";

export const FeaturesContent: React.FC = () => {
  return (
    <div className="legal-page about-page">
      {/* Chaque section représente un bloc thématique des fonctionnalité */}
      <section>
        <p className="text-md textBrandPrimaryColor mediumText">
          Une plateforme pensée pour ceux qui veulent gérer leur argent sans se prendre la tête.
        </p>
        <p className="text-md">
          Cash Sights transforme votre budget en un seul chiffre facile à comprendre : le Kiff Score. Fini les tableaux Excel ou les apps bancaires compliquées. En un instant, vous savez si vous pouvez vous offrir ce resto ou ce ciné, sans risquer le découvert.                
        </p>
      </section>

      <section>
        <h2 className="display-sm">C'est quoi le Kiff Score ?</h2>
        <p className="text-md">
          Le Kiff Score calcule, selon vos revenus, vos dépenses et vos objectifs, combien vous pouvez dépenser chaque jour sans stress. Pas de calculs complexes. Pas de mauvaise surprise.
        </p>
      </section>

      <section id="ctaLanding">
        <main>
          <div className="text-content">
            <h2 className="display-sm">Restez informé</h2>
            <p className="text-md">
              Rejoignez la liste des premiers testeurs de la beta et recevez des conseils concrets pour gérer vos dépenses.
            </p>
          </div>
          <div className="button-content">
            <Button importance="primary" size="large" textBtn="Je veux être informé" linkAdr="/#whitelistForm" />
          </div>
        </main>
      </section>

      <section>
        <h2 className="display-sm FAQ centerText">Questions fréquentes</h2>
        
        <main className="faq-list">
            <Detail detail={"Grâce à son calcul simple qui vous indique combien vous pouvez dépenser aujourd'hui, sans prise de tête."} title={"Comment Cash Sights m'aide à éviter le découvert ?"} />
            <Detail detail={"C'est une information unique, actualisée, qui remplace tous les calculs fastidieux."} title={"En quoi le Kiff Score est différent ?"} />
            <Detail detail={"La beta sera gratuite pour nos premiers testeurs."} title={"L'application est-elle payante ?"} />
        </main>
      </section>
    </div>
  );
};