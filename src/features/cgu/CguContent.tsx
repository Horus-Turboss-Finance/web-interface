// Composant qui contient uniquement le contenu HTML sémantique de la page CGU
import React from "react";

export const CguContent: React.FC = () => {
  return (
    <div className="legal-page">
      {/* Chaque section représente un bloc thématique des CGU */}
      <section>
        <p className="text-md">
          Les présentes conditions régissent l'accès et l'utilisation de l'application web Cash Sights, un service en ligne de gestion des finances personnelles.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Acceptation des conditions</h2>
        <p className="text-md">
          En utilisant ce service, vous acceptez sans réserve les présentes conditions. Si vous êtes en désaccord, veuillez ne pas utiliser l'application.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Accès au service</h2>
        <p className="text-md">
          L'accès est réservé aux personnes majeures disposant d'un compte utilisateur valide. Vous vous engagez à fournir des informations exactes lors de votre inscription.
        </p>

        <h3 className="text-xl">Fonctionnalités proposées</h3>
        <p className="text-md">L'application permet notamment :</p>
        <ul className="text-md">
          <li>La gestion et le suivi des finances personnelles ;</li>
          <li>La création et la gestion de profils utilisateur ;</li>
          <li>L'accès à des données financières et à des rapports ;</li>
          <li>La publication de commentaires et de fichiers liés à l'utilisation du service.</li>
        </ul>
      </section>

      <section>
        <h2 className="display-xs">Contenus utilisateur</h2>
        <p className="text-md">
          Vous êtes seul(e) responsable des contenus que vous publiez. Il est interdit de diffuser des contenus à caractère sexuel, injurieux, illégal ou contraire à l'ordre public.
        </p>
        <p className="text-md">
          En publiant du contenu, vous nous accordez une licence non exclusive permettant de le stocker, d'en faire un usage fonctionnel dans l'application, et de le retransmettre aux autres utilisateurs selon les paramètres de visibilité.
        </p>
      </section>

      <section>
        <h2 className="display-xs">Modération</h2>
        <p className="text-md">
          Nous nous réservons le droit de modérer, modifier ou supprimer tout contenu non conforme aux présentes conditions ou portant atteinte au service ou à ses utilisateurs.
        </p>
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