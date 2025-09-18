// Composant qui contient uniquement le contenu HTML sémantique de la page à propos
import React from "react";
import { CardContact } from "../../components/contact-cards";
import { Button } from "../../components/buttons";
import { Detail } from "../../components/detail";

export const AboutContent: React.FC = () => {
  return (
    <div className="about-page legal-page">
      {/* Chaque section représente un bloc thématique des à propos */}
      <section>
        <h2 className="display-sm center-text">Notre histoire</h2>
        <p className="text-md text-brand-primary medium-text">
          Cash Sights est né d'un constat simple : gérer son argent est devenu trop complexe.
        </p>
        
        <p className="text-md">
          Tableurs, applis bancaires chargées de données inutiles… Rien n'offre une vision directe. Nous avons créé un outil minimaliste qui vous dit, en un seul chiffre, ce que vous pouvez dépenser aujourd'hui. Conçu pour les étudiants et les jeunes actifs, Cash Sights simplifie la gestion du quotidien.
        </p>
      </section>
        
      <section>
        <h2 className="display-sm center-text">Pourquoi Cash Sights</h2>
        <p className="text-md text-brand-primary medium-text">
          Parce que personne ne devrait redouter d'ouvrir son compte en banque.
        </p>
        <p className="text-md">
          Cash Sights casse les codes des applis financières classiques. Notre approche : pas de jargon, pas de tableaux indigestes. Votre budget est condensé en une information simple, claire et actionnable. Un repère fiable pour dépenser en confiance.
        </p>
      </section>
        
      <section className="about-left">
        <h2 className="display-sm center-text">Nos forces</h2>
        <div className="cards-line">
          <CardContact title="Clarté instantanée" icon="search">
            <p className="text-md">un seul chiffre pour savoir où vous en êtes</p>
          </CardContact>
        
          <CardContact title="Gain de temps" icon="clock">
            <p className="text-md">plus besoin de tableaux complexes ou de calculs</p>
          </CardContact>
        
          <CardContact title="Une app pensée pour vous" icon="shake">
            <p className="text-md">un outil conçu pour les étudiants et jeunes actifs, sans jargon bancaire.</p>
          </CardContact>
        </div>
      </section>
        
      <section className="cta-section" id="ctaLanding">
        <main>
          <div className="text-content">
          <h2 className="display-sm">Inscription Newsletter</h2>
          <p className="text-md text-brand-primary medium-text">
            Envie d'être parmi les premiers à tester Cash Sights ?
          </p>
          <p className="text-md">
            Recevez nos prochaines mises à jour et un accès anticipé à la bêta.
          </p>
        </div>
      
        <div className="button-content">
          <Button importance="primary" size="large" textBtn="Je ne veux rien louper" linkAdr="/#whitelistForm" />
        </div>
        </main>
      </section>
        
      <section>
        <h2 className="display-sm center-text faq-title">Questions fréquentes</h2>
        <main className="faq-list">
          <Detail
            title="En quoi Cash Sights est-il unique ?"
            detail="Il ne vous noie pas sous les chiffres : il vous donne seulement l'information dont vous avez besoin pour dépenser sans stress."
          />
          <Detail
            title="Est-ce payant ?"
            detail="La version beta est gratuite. Les futures offres resteront accessibles aux étudiants et jeunes actifs."
          />
          <Detail
            title="Comment fonctionne le Kiff Score ?"
            detail="Le Kiff Score évalue en temps réel combien vous pouvez dépenser aujourd'hui, en se basant sur vos habitudes et votre budget global."
          />
          <Detail
            title="Puis-je l'utiliser sans compte bancaire ?"
            detail="Oui, l'application est pensée pour fonctionner sans connexion bancaire"
          />
        </main>
      </section>
    </div>
  );
};