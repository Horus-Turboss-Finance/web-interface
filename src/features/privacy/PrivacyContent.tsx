// Composant qui contient uniquement le contenu HTML sémantique de la page des politiques de confidentialité
import React from "react";

export const PrivacyContent: React.FC = () => {
  return (
    <div className="legal-page">
      {/* Chaque section représente un bloc thématique des politiques de confidentialité */}
      <section>
        <h2 className="display-xs">Responsable du traitement</h2>
        <p className="text-md">
          Le responsable du traitement des données est Thomas Cherbonnel<small>[1]</small>, que vous pouvez contacter à l'adresse email suivante : docteur.horus.turboss@gmail.com.
        </p>
        <p className="text-md"><small>1 : Informations susceptibles d'être mises à jour.</small></p>
      </section>
      
      <section>
        <h2 className="display-xs">Données collectées</h2>
        <p className="text-md">
          Nous collectons les données suivantes :
        </p>
        <ul className="text-md">
          <li>Adresse email et mot de passe lors de l'inscription ;</li>
          <li>Données saisies via les formulaires (transactions, montant, date, catégorie, etc.) ;</li>
          <li>Données d'usage liées à votre comportement sur l'interface (clics, navigation, etc.).</li>
        </ul>
      </section>
      
      <section>
        <h2 className="display-xs">Méthodes de collecte</h2>
        <p className="text-md">
          Les données sont collectées par :
        </p>
        <ul className="text-md">
          <li>Saisie directe par l'utilisateur via les formulaires ou l'interface.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="display-xs">Finalités du traitement</h2>
        <p className="text-md">
          Vos données sont traitées pour les finalités suivantes :
        </p>
        <ul className="text-md">
          <li>Gestion de votre compte utilisateur ;</li>
          <li>Production de statistiques pour améliorer notre service ;</li>
          <li>Amélioration continue de l'application et de ses performances.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="display-xs">Durée de conservation</h2>
        <p className="text-md">
          Vos données sont conservées pendant toute la durée de vie de votre compte. En cas de suppression, certaines données sont conservées pendant une durée maximale de 5 ans, conformément aux obligations légales.
        </p>
        <p className="text-md">
          Certaines informations (non sensibles) peuvent être conservées pendant 2 ans, même si le compte est inactif.
        </p>
      </section>
      
      <section>
        <h2 className="display-xs">Sécurité des données</h2>
        <p className="text-md">
          Nous appliquons des mesures techniques et organisationnelles strictes pour garantir la sécurité de vos données :
        </p>
        <ul className="text-md">
          <li>Participation à des hackathons collaboratifs pour renforcer la sécurité ;</li>
          <li>Tests réguliers et évaluations continues ;</li>
          <li>Hashage des mots de passe (cryptage) pour protéger vos identifiants.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="display-xs">Partage des données</h2>
        <p className="text-md">
          Dans certains cas, vos données peuvent être partagées avec des partenaires tiers pour améliorer notre service. Dans ces cas, seules des données anonymisées (non identifiables personnellement) sont transmises.
          <br />
          En dehors de ces cas, vos données ne seront jamais partagées sans votre consentement explicite, sauf obligation légale.
        </p>
      </section>
      
      <section>
        <h2 className="display-xs">Vos droits</h2>
        <p className="text-md">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
      
        <ul className="text-md">
          <li>Droit d'accès, de rectification et de suppression ;</li>
          <li>Droit à la portabilité de vos données ;</li>
          <li>Droit d'opposition au traitement de vos données.</li>
        </ul>

        <p className="text-md">
          Pour exercer vos droits, contactez-nous à l'adresse suivante : docteur.horus.turboss@gmail.com.
        </p>

      </section>
        
      <section>
        <h2 className="display-xs">Cookies et traceurs</h2>
        <p className="text-md">
          Consultez notre <a href="/cookies">Politique de cookies</a> pour en savoir plus sur l'utilisation des cookies et autres traceurs.
        </p>
      </section>
      
      <section>
        <p className="text-md">
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (<a href="https://www.cnil.fr">www.cnil.fr</a>).
        </p>
      </section>
    </div>
  );
};