// Pourquoi : sortir la grosse map de la modale en utilitaire permet la testabilité,
// la lisibilité et évite d'avoir du code volumineux dans le composant principal.

import type { ModalField, ModalFieldType, TransactionFormErrors, TransactionFormValues } from "../types/types";
import type { AnyInputType, SelectInputOption, SwitchInputType } from "../../../types/@types.inputs";
import { listIconCategory, type IBank, type ICategory } from "../../../types/@types.financesParams";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

/**
 * Format simple pour afficher les balances en mode "XX XXX,YY €"
 * On choisit 'fr-FR' pour correspondre au reste du projet.
 */
function formatBalance(balance: number | string) {
  const n = Number(balance) || 0;
  // toLocaleString FR, 2 décimales
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

/**
 * buildModalFieldMap
 * @param params.modalType  'createTransaction' | 'editTransaction'
 * @param params.bank       liste de comptes bancaires (peut être undefined)
 * @param params.category   liste de catégories (peut être undefined)
 * @param params.defaultEntryType  "dépenses" | "revenus" (influence le filtrage des catégories)
 *
 * Retourne: ModalField conforme au type défini dans types/types.ts
 *
 * Pourquoi : centraliser le mapping pour garder le hook / composants légers.
 */
export function buildModalFieldMap({
  bank,
  errors,
  category,
  modalType,
  modalValue,
  handleChange,
}: {
  errors: TransactionFormErrors,
  modalType: ModalFieldType;
  bank?: IBank[] | null;
  category?: ICategory[] | null;
  defaultEntryType?: "dépenses" | "revenus";
  modalValue?: TransactionFormValues,
  handleChange: <K extends keyof TransactionFormValues>(field: K, value: TransactionFormValues[K]) => void
}): ModalField {
  // Génération des options compte bancaire
  const bankOptions = (bank ?? []).map<SelectInputOption>((b) => ({
    id: String(b.id),
    icon: b.icon,
    label: b.label,
    value: formatBalance(b.balance),
  }));

  // Filtre des catégories selon type d'entrée (1 = dépenses, 2 = revenus) - conforme code d'origine
  const catTypeWanted = modalValue?.type?.toLocaleLowerCase() === "dépenses" ? 1 : 2;
  const categoryOptions = (category ?? [])
    .filter((c) => c.type === catTypeWanted)
    .map<SelectInputOption>((c) => ({
      id: `${c.id === 0 ? c.name : c.id}`,
      icon: listIconCategory[c.icon],
      label: c.name,
    }));

  // Définition générique des champs pour la création vs édition
  const commonInputs: AnyInputType[] = [
    {
      id: "bankId",
      type: "select",
      placeholder: "Sélectionne ton compte bancaire",
      obligatoire: true,
      options: bankOptions,
      stateInput: modalValue?.bankId,
      setStateInput : (v) => handleChange("bankId", v),
      errorMessage: errors.bankId
    },
    {
      id: "categoryId",
      type: "select",
      placeholder: "Sélectionne la catégorie de transaction",
      obligatoire: true,
      options: categoryOptions,
      stateInput: modalValue?.categoryId,
      setStateInput : (v) => handleChange("categoryId", v),
      errorMessage: errors.categoryId
    },
    {
      id: "date",
      type: "date",
      obligatoire: true,
      placeholder: format(new Date(), "dd LLLL yyyy", { locale: fr }) ,
      stateInput: modalValue?.date ? new Date(modalValue?.date): new Date(),
      setStateInput : (v) =>  handleChange("date", `${v}`),
      errorMessage: errors.date
    },
    {
      id: "amount",
      type: "number",
      placeholder: "0.00",
      obligatoire: true,
      stateInput: String(modalValue?.amount),
      setStateInput : (v) => handleChange("amount", Number(v)),
      errorMessage: errors.amount
    },
    {
      id: "description",
      type: "textarea",
      placeholder: "Ajoute une note pour cette transaction",
      stateInput: modalValue?.description,
      setStateInput : (v) => handleChange("description", `${!v? "": v}`),
      errorMessage: errors.description
    },
  ];

  // Switch-option présent uniquement dans createTransaction pour choisir "Dépenses"/"Revenus"
  const createExtra: SwitchInputType = {
    id: "typeTransaction",
    type: "switch-option",
    options: ["Dépenses", "Revenus"],
    stateInput : modalValue?.type,
    setStateInput : (v) => handleChange("type", v)
  };

  // Mapping final
  if (modalType === "createTransaction") {
    return {
      title: "Crée une transaction",
      description: "Ajoute une nouvelle transaction à ton compte",
      inputs: [createExtra, ...commonInputs],
    };
  } else {
    // editTransaction - conserve les mêmes champs mais peut activer l'option delete en UI
    return {
      title: "Modifier la transaction",
      description: "Modifie ou supprime une transaction existante",
      inputs: [...commonInputs],
      deleted: true,
    };
  }
}
