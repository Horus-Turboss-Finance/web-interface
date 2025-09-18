// Rôle : centraliser les types TS pour la feature "Contact".
// Pourquoi : facilite la réutilisation, testabilité, et évite les `any` dispersés.
export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  acceptPrivacy: boolean;
}

// Erreurs par champ + global (bannière)
export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues | "global", string | undefined>
>;