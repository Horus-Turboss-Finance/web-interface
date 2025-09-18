/**
 * Raison d'être: mapping serveur -> UI centralisé et testable.
 * Pourquoi: éviter les switch/case dans le hook et documenter les messages backend attendus.
 */

import type { GeneralSettingsFormErrors } from "../types/GeneralTypes";
import type { ProfilSettingsFormErrors } from "../types/ProfiTypes";

export function mapGeneralSettingServerError(serverMsg?: string): GeneralSettingsFormErrors {
  const mapped: GeneralSettingsFormErrors = {};

  if(serverMsg?.includes("Label")) mapped.label = serverMsg;
  else if(serverMsg?.includes("Type de compte")) mapped.type = serverMsg.split(", doit être une des suivantes")[0];
  else if(serverMsg?.includes("Balance")) mapped.amount = serverMsg;
  else if(serverMsg?.includes("Icône")) {
    mapped.icon = serverMsg.split(", doit être une des suivantes")[0]; 
  } else if(serverMsg?.includes("Catégorie de base")) mapped.global = serverMsg;
  else if(serverMsg?.includes("Nom")) mapped.label = serverMsg;
  else if(serverMsg?.includes("Type de catégorie")) mapped.type = serverMsg.split(", doit être une des suivantes")[0];
  else if(serverMsg?.includes("Impossible de supprimer le compte")) mapped.global = serverMsg;
  else mapped.global = "Une erreur est survenue. Merci de réessayer plus tard.";

  return mapped;
}

export function mapProfilSettingServerError(serverMsg?: string): ProfilSettingsFormErrors {
  const mapped: ProfilSettingsFormErrors = {};

  if(serverMsg?.includes("Nom")) mapped.name = serverMsg;
  else if(serverMsg?.includes("Email")) mapped.email = serverMsg;
  else if(serverMsg?.includes("Mot de passe") || serverMsg?.includes("Password") || serverMsg?.includes('Oldpassword')) mapped.password = serverMsg.replace("Oldpassword", "Ancien mot de passe").replace("Password", "Mot de passe");
  else if(serverMsg?.includes("Pseudo")) mapped.pseudo = serverMsg;
  else if(serverMsg?.includes("NewPassword")) mapped.new_pass = serverMsg.replace('NewPassword', "Nouveau mot de passe");
  else if(serverMsg?.includes("Aucun paramètres fournis")) mapped.global = serverMsg;
  else mapped.global = "Une erreur est survenue. Merci de réessayer plus tard.";

  return mapped;
}