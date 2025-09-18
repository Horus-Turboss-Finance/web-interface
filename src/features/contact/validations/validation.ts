/**
 * Raison d'être: validation métier côté client, légère.
 * Pourquoi: garder le hook "useContactForm" focalisé sur l'orchestration.
 */
import { isEmail, isNonEmpty, hasMaxLength } from "../../../utils/validators";
import type { ContactFormValues, ContactFormErrors } from "../types/types";

export const NAME_MAX = 16;
export const MESSAGE_MAX = 2000;

export function validateContactForm(v: ContactFormValues|null): ContactFormErrors {
  const e: ContactFormErrors = {};

  if (!isNonEmpty(`${v?.firstName}`)) e.firstName = "Veuillez renseigner votre prénom.";
  else if (!hasMaxLength(`${v?.firstName}`, NAME_MAX)) e.firstName = `Prénom supérieur à ${NAME_MAX} caractères.`;

  if (!isNonEmpty(`${v?.lastName}`)) e.lastName = "Veuillez renseigner votre nom.";
  else if (!hasMaxLength(`${v?.lastName}`, NAME_MAX)) e.lastName = `Nom supérieur à ${NAME_MAX} caractères.`;

  if (!isNonEmpty(`${v?.email}`)) e.email = "Veuillez renseigner votre email.";
  else if (!isEmail(`${v?.email}`)) e.email = "Email invalide.";

  if (!isNonEmpty(`${v?.message}`)) e.message = "Veuillez renseigner un message.";
  else if (!hasMaxLength(`${v?.message}`, MESSAGE_MAX)) e.message = `Message ne peut contenir plus de ${MESSAGE_MAX} caractères.`;

  if (!v?.acceptPrivacy) e.global = "Veuillez accepter la politique de confidentialité.";

  return e;
}