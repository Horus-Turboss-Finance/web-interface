import type { AnyInputType } from "../../../types/@types.inputs";

// Types partagés pour la feature dashboard
// Pourquoi : centraliser les types pour éviter les "any" et documenter l'API.
export type ModalFieldType = "createTransaction" | "editTransaction" | null;
export interface ModalField {
    title: string;
    description?: string;
    inputs: AnyInputType[];
    deleted?: boolean;
    // Optionnel : id de transaction actuelle pour l'édition
    transactionId?: number | null;
}

export interface TransactionFormValues {
    id: string;
    type: string;
    date: string;
    amount: number;
    bankId: string;
    categoryId: string;
    description: string;
    baseCategory: string;
}

export type TransactionFormErrors = Partial<
  Record<keyof TransactionFormValues | "global", string | undefined>
>;