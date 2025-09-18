/**
 * Raison d'être: mapping serveur -> UI centralisé et testable.
 * Pourquoi: éviter les switch/case dans le hook et documenter les messages backend attendus.
 */
import type { TransactionFormErrors } from "../types/types";

export function mapDashboardServerError(serverMsg?: string): TransactionFormErrors {
  const mapped: TransactionFormErrors = {};

  if(serverMsg?.toLocaleLowerCase()?.includes("date")) mapped.date = serverMsg;
  else if(serverMsg?.toLocaleLowerCase()?.includes("description")) mapped.description = serverMsg;
  else if(serverMsg?.toLocaleLowerCase()?.includes("description")) mapped.description = serverMsg;
  else if(serverMsg?.toLocaleLowerCase()?.includes("amount")) mapped.amount = serverMsg;
  else mapped.global = "Une erreur est survenue. Merci de réessayer plus tard.";

  return mapped;
}