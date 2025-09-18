// Rôle : wrapper autour de l'API réelle (submitContactForm) pour normaliser les erreurs.
// Pourquoi : centraliser le mapping des erreurs serveur -> erreurs front,
// et permettre de mocker facilement lors des tests.

import { type ContactFormValues } from "../types/types";
import { axiosInstance } from "../../api/axiosInstance";

/**
 * Enveloppe l'appel réseau pour:
 * - normaliser les entrées,
 * - propager une erreur structurée pour le hook.
 */
export async function submitContact(values: ContactFormValues) {
  // Eviter de transmettre des champs inutiles / sécurité : on reconstruit le payload.
  const payload = {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
    isChecked: !!values.acceptPrivacy,
  };

  return await axiosInstance.post('/contact/form', payload);
}