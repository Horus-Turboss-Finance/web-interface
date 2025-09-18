/* Rôle : composant de présentation de la page Contact.
   Pourquoi : Ce fichier doit rester centré sur le rendu (JSX) et la composition
   des petits composants (inputs, boutons, cards). Toute la logique métier est
   déplacée dans le hook useContactForm pour la testabilité.
*/

import ContactSeo from "../features/contact/ContactSEO";
import { ContactContent } from "../features/contact/ContactContent";
import { PresentationPageLayout } from "../layout/PresentationPageLayout";

export function ContactPage() {
  return (
    <>
      {/* SEO séparé (voir fichier ContactSEO) */}
      <ContactSeo />

      <PresentationPageLayout
        header={{
          subtitle: "Notre équipe est toujours disponible pour discuter",
          title: "Laisse-nous ton avis",
          uptitle: "Contact us",
        }}
      >
        <ContactContent/>
      </PresentationPageLayout>
    </>
  );
}

// Export default si ton routeur/stack l'attend.
export default ContactPage;