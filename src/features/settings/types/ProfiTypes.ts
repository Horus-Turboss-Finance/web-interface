import type { AnyInputType } from "../../../types/@types.inputs";

// Types partagés pour la feature setting profil
// Pourquoi : centraliser les types pour éviter les "any" et documenter l'API.
export type ModalFieldType = 'pseudo' | 'name' | 'email' | 'password' | null;
export interface ModalField {
  title: string;
  description?: string;
  inputs: AnyInputType[];
}

export interface ProfilSettingsFormValues {
  id: string;
  email?: string;
  PPURL?: string;
  name ?: string;
  pseudo?: string;
  password?: string;
  new_pass?: string;
  confirm_pass?: string;
}

export type ProfilSettingsFormErrors = Partial<
  Record<keyof ProfilSettingsFormValues | "global", string | undefined>
>;