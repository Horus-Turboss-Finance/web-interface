/**
 * Raison d'être: mapping serveur -> UI centralisé et testable.
 * Pourquoi: éviter les switch/case dans le hook et documenter les messages backend attendus.
 */
import type { ContactFormErrors } from "../types/types";

export function mapContactServerError(serverMsg?: string): ContactFormErrors {
  const mapped: ContactFormErrors = {};

  switch (serverMsg) {
    case "Email vide ou invalide":
      mapped.email = serverMsg;
      break;
    case "Prénom invalide ou trop grand":
      mapped.firstName = serverMsg;
      break;
    case "Nom invalide ou trop grand":
      mapped.lastName = serverMsg;
      break;
    case "Message supérieur à 4000 caractère ou vide":
      mapped.message = serverMsg;
      break;
    case "Invalid auth validation":
      mapped.global = "Veuillez accepter la politique de confidentialité avant d'envoyer.";
      break;
    default:
      mapped.global = "Une erreur est survenue. Merci de réessayer plus tard.";
  }

  return mapped;
}