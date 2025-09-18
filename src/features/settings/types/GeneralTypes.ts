import type { AnyInputType } from "../../../types/@types.inputs";

// Types partagés pour la feature setting général
// Pourquoi : centraliser les types pour éviter les "any" et documenter l'API.
export type ModalFieldType = 'newCategorie' | 'categorie' | 'newBank' | 'bank' | null;
export interface ModalField {
    title: string;
    description?: string;
    inputs: AnyInputType[];
    deleted?: boolean;
}

export interface GeneralSettingsFormValues {
  id: string;
  icon?: string;
  type?: string;
  label?: string;
  amount?: number;
  base_category?: string;
}

export type GeneralSettingsFormErrors = Partial<
  Record<keyof GeneralSettingsFormValues | "global", string | undefined>
>;