/**
 * Mapping des messages serveur connus vers les champs UI.
 * Pourquoi: isole la connaissance du backend (messages français) et la rend testable.
 */
import type { SigninFormErrors, SignupFormErrors } from "../types/types";

export function mapSignupServerError(serverMsg?: string): SignupFormErrors {
  const mapped: SignupFormErrors = {};

  switch (serverMsg) {
    case "Email déjà existant":
      mapped.email = serverMsg;
      break;
    case "Nom déjà existant":
      mapped.name = serverMsg;
      break;
    case "password vide ou invalide":
      mapped.password = "Mot de passe vide ou invalide";
      break;
    case "name vide ou invalide":
      mapped.name = "Nom vide ou invalide";
      break;
    case "name invalide ou contenant plus de 16 caractères":
      mapped.name = "Nom invalide ou contenant plus de 16 caractères";
      break;
    case "Email vide ou invalide":
      mapped.email = serverMsg;
      break;
    default:
      mapped.global = "Une erreur inattendue est survenue. Merci de réessayer plus tard.";
  }

  return mapped;
}

export function mapSigninServerError(serverMsg?: string): SigninFormErrors {
  const mapped: SigninFormErrors = {};

  switch (serverMsg) {
    case "Email ou mot de passe invalide":
      mapped.global = "Tiens, on dirait que ton email ou ton mot de passe est incorrect";
      break;
    default:
      mapped.global = "Une erreur inattendue est survenue. Merci de réessayer plus tard.";
  }

  return mapped;
}