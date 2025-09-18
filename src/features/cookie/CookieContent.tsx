// Composant qui contient uniquement le contenu HTML sémantique de la page politique de cookie
import React from "react";

export const CookieContent: React.FC = () => {
  return (
    <div className="legal-page">
      {/* Chaque section représente un bloc thématique des Politique de cookie */}
      <section>
        <h2 className="display-xs">Qu'est-ce qu'un cookie ?</h2>
        <p className="text-md">
          Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette, etc.) lors de votre navigation sur notre site. Il permet de reconnaître votre navigateur, de mémoriser vos préférences, ou encore d'analyser votre comportement de navigation - avec ou sans traçage nominatif.
        </p>
        <p className="text-md">
          Les cookies peuvent être déposés directement par notre site ("cookies internes") ou par des partenaires externes ("cookies tiers").
        </p>
        <p className="text-md">
          Ce document a pour objectif de vous informer de manière transparente sur l'utilisation des cookies sur notre site, de respecter vos droits et de vous expliquer comment les contrôler, conformément à la réglementation en vigueur, notamment celle de la CNIL et du RGPD.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Pourquoi utilisons-nous des cookies ?</h2>
        <p className="text-md">
          Les cookies que nous utilisons ont différents objectifs :
        </p>
        <h3 className="text-xl">Cookies de connexion</h3>
        <p className="text-md">
          Indispensables pour vous identifier de manière sécurisée après connexion à votre espace personnel.
        </p>
        <h3 className="text-xl">Cookies de sécurité</h3>
        <p className="text-md">
          Servent à sécuriser le site, protéger contre les robots (CAPTCHA) ou garantir la stabilité des services (répartition de charge).
        </p>
        <h3 className="text-xl">Cookies de mesure d'audience</h3>
        <p className="text-md">
          Utilisés pour analyser la fréquentation du site (pages vues, durée, taux de rebond…) et améliorer l'expérience utilisateur.
        </p>
        <h3 className="text-xl">Cookies fonctionnels</h3>
        <p className="text-md">
          Permettent de mémoriser vos préférences (langue, affichage, liste des transaction récentes, etc.).
        </p>
        <h3 className="text-xl">Cookies de performance</h3>
        <p className="text-md">
          Utilisés dans le cadre de tests A/B pour identifier les versions les plus efficaces du site.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Quand sont-ils utilisés ?</h2>
        <p className="text-md">
          Nous déposons des cookies dans les cas suivants :
        </p>
        <ul className="text-md">
          <li>Lors de votre première visite sur le site ;</li>
          <li>Lors de la connexion à votre compte ;</li>
          <li>Lors d'actions spécifiques (remplissage de formulaire, ajout de transaction, changement de langue, etc.) ;</li>
          <li>Et de manière continue pour des analyses d'usage.</li>
        </ul>
      </section>

      <section>
        <h2 className="display-xs">Cookies tiers</h2>
        <p className="text-md">
          Certains cookies peuvent être déposés par des prestataires externes (hébergeur, outils statistiques, lecteurs vidéo intégrés, etc.).<br/>
          Nous veillons à ce qu'ils respectent les obligations légales, notamment en matière d'exemption ou de recueil de consentement explicite.
        </p>
        <p className="text-md">
          En publiant du contenu, vous nous accordez une licence non exclusive permettant de le stocker, d'en faire un usage fonctionnel dans l'application, et de le retransmettre aux autres utilisateurs selon les paramètres de visibilité.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Comment contrôler les cookies ?</h2>
        <p className="text-md">
          À tout moment, vous pouvez :
        </p>
        <ul className="text-md">
          <li>Accepter ou refuser les cookies non essentiels via la bannière de consentement ;</li>
          <li>Gérer vos préférences dans notre module accessible en bas de page ;</li>
          <li>Paramétrer votre navigateur pour bloquer certains cookies ;</li>
          <li>Exercer vos droits (accès, opposition, suppression) via les paramètres ou notre formulaire de contact.</li>
        </ul>
      </section>

      <section>
        <h2 className="display-xs">Abonnement et paiement</h2>
        <p className="text-md">
          Le service est actuellement gratuit. Toute évolution vers des options payantes fera l'objet d'une information préalable claire et accessible.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Propriété intellectuelle</h2>
        <p className="text-md">
          Tous les éléments de l'application (design, code, contenus hors utilisateur) sont protégés par les droits d'auteur. Toute reproduction ou utilisation non autorisée est strictement interdite.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Limitation de responsabilité</h2>
        <p className="text-md">
          Nous mettons tout en œuvre pour assurer un service de qualité, mais ne garantissons ni une disponibilité permanente, ni l'exactitude des données. En aucun cas notre responsabilité ne pourra être engagée pour tout dommage direct ou indirect lié à l'utilisation du service.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Protection des données personnelles</h2>
        <p className="text-md">
          Le traitement de vos données personnelles est encadré par notre politique de confidentialité, accessible sur le site.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Modification des conditions</h2>
        <p className="text-md">
          Les présentes conditions peuvent être modifiées à tout moment. Les utilisateurs seront informés en cas de modification importante. La poursuite de l'utilisation du service vaut acceptation des nouvelles conditions.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Droit applicable et juridiction</h2>
        <p className="text-md">
          Ces conditions sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux du siège social de l'éditeur de l'application.
        </p>
      </section>
    </div>
  );
};