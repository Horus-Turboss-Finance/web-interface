// Composant qui contient uniquement le contenu HTML sémantique de la page des mentions Légales
import React from "react";

export const LegalsContent: React.FC = () => {
  return (
    <div className="legal-page">
      {/* Chaque section représente un bloc thématique des mentions légales */}
      <section>
        <p className="text-md">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Cash Sights l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Edition du site</h2>
        <p className="text-md">
          Le présent site, accessible à l'URL https://cashsight.fr (le « Site »), est édité par :
        </p>
        <p className="text-md">
          Thomas Cherbonnel, personne physique.<br/>(à noter : changement prévu lors de la création de la société)
        </p>
      </section>

      <section>
        <h2 className="display-xs">Hébergement</h2>
        <p className="text-md">
          Le Site est hébergé par la société OUIHEBERG SARL, situé 9 RUE DES COLONNES 75002 PARIS France, (contact email : contact@ouiheberg.com).
        </p>
      </section>

      <section>
        <h2 className="display-xs">Directeur de publication</h2>
        <p className="text-md">
          Le Directeur de la publication du Site est Thomas Cherbonnel.
        </p>
      </section>
      
      <section>
        <h2 className="display-xs">Nous contacter</h2>
        <p className="text-md">Par email : docteur.horus.turboss@gmail.com</p>
      </section>
      
      <section>
        <h2 className="display-xs">Données personnelles</h2>
        <p className="text-md">
          Le traitement de vos données à caractère personnel est régi par notre <a href="/privacy"></a>Charte du respect de la vie privée, disponible depuis la section "Polique de confidentialité", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
        </p>
      </section>
    </div>
  );
};