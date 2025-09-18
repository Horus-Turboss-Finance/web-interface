/**
 * Validation légère côté client pour l'inscription.
 * Pourquoi: séparer la règle métier du hook pour des tests unitaires simples.
 */
import { isEmail, isNonEmpty, hasMaxLength } from "../../../utils/validators";
import type { SignupFormValues, SignupFormErrors, SigninFormErrors, SigninFormValues } from "../types/types";

export const NAME_MAX = 16;
export const PASSWORD_MIN = 8;

export function validateSignupForm(v: SignupFormValues|null): SignupFormErrors {
  const e: SignupFormErrors = {};

  if (!isNonEmpty(`${v?.name}`)) e.name = "Veuillez renseigner un nom.";
  else if (!hasMaxLength(`${v?.name}`, NAME_MAX)) e.name = `Nom invalide ou trop long (max ${NAME_MAX} caractères).`;

  if (!isNonEmpty(`${v?.email}`)) e.email = "Veuillez renseigner un email.";
  else if (!isEmail(`${v?.email}`)) e.email = "Email invalide.";

  if (!isNonEmpty(`${v?.password}`)) e.password = "Veuillez renseigner un mot de passe.";
  else if (v?.password.length || 0 < PASSWORD_MIN) e.password = `Le mot de passe doit contenir au moins ${PASSWORD_MIN} caractères.`;

  if (!v?.acceptTerms) e.global = "Veuillez accepter les conditions d'utilisation.";

  return e;
}

export function validateSigninForm(v: SigninFormValues|null): SigninFormErrors {
  const e: SigninFormErrors = {};

  if (!isNonEmpty(`${v?.email}`)) e.email = "Veuillez renseigner un email.";
  else if (!isEmail(`${v?.email}`)) e.email = "Email invalide.";

  if (!isNonEmpty(`${v?.password}`)) e.password = "Veuillez renseigner un mot de passe.";
  else if (`${v?.password}`.length < PASSWORD_MIN) e.password = `Le mot de passe doit contenir au moins ${PASSWORD_MIN} caractères.`;

  return e;
}