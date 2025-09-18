/**
 * Raison d'être: validation métier côté client, légère.
 * Pourquoi: garder le hook "useContactForm" focalisé sur l'orchestration.
 */
import type { GeneralSettingsFormErrors } from "../types/GeneralTypes";
import type { ProfilSettingsFormErrors, ProfilSettingsFormValues } from "../types/ProfiTypes";

export function validateGeneralSettingForm(): GeneralSettingsFormErrors {
  const e: GeneralSettingsFormErrors = {};
  return e;
}

export function validateProfilSettingForm(v: ProfilSettingsFormValues|null): ProfilSettingsFormErrors {
  const e: ProfilSettingsFormErrors = {};

  const passDidntMatch = "Les mots de passe ne correspondent pas..."

  if(v?.new_pass !== v?.confirm_pass) {
    e.new_pass = passDidntMatch;
    e.confirm_pass = passDidntMatch;
  }
  return e;
}