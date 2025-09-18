/**
 * Raison d'être: validation métier côté client, légère.
 * Pourquoi: garder le hook "useContactForm" focalisé sur l'orchestration.
 */
import { isNonEmpty, hasMaxLength, isDate } from "../../../utils/validators";
import type { TransactionFormErrors, TransactionFormValues } from "../types/types";

export const NAME_MAX = 16;
export const MESSAGE_MAX = 1000;

export function validateDashboardForm(v: TransactionFormValues|null): TransactionFormErrors {
  const e: TransactionFormErrors = {};

  if (!isDate(`${v?.date? v?.date : new Date().toISOString()}`)) e.date = "Format de date invalide.";
  if (!isNonEmpty(`${v?.amount}`)) e.amount = "Veuillez renseigner un montant.";
  if (!isNonEmpty(`${v?.type}`)) e.type = "Veuillez renseigner le type de transaction.";
  if (!hasMaxLength(`${v?.description}`, MESSAGE_MAX)) e.description = `Message ne peut contenir plus de ${MESSAGE_MAX} caractères.`;

  return e;
}