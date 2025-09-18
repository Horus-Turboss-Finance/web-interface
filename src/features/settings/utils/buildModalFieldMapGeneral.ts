// Pourquoi : sortir la grosse map de la modale en utilitaire permet la testabilité,
// la lisibilité et évite d'avoir du code volumineux dans le composant principal.
import { formatBegginWord } from "../../../utils/stringManipulate";
import type { AnyInputType, SelectInputOption, SwitchInputType } from "../../../types/@types.inputs";
import { BankAccountType, FINANCIAL_PLATFORMS, listIconCategory } from "../../../types/@types.financesParams";
import type { ModalField, ModalFieldType, GeneralSettingsFormErrors, GeneralSettingsFormValues } from "../types/GeneralTypes";

/**
 * buildModalFieldMap
 * @param params.modalType  'newCategorie' | 'categorie' | 'newBank' | 'bank'
 *
 * Retourne: ModalField conforme au type défini dans types/types.ts
 *
 * Pourquoi : centraliser le mapping pour garder le hook / composants légers.
 */
export function buildModalFieldMap({
  errors,
  modalType,
  modalValue,
  handleChange,
}: {
  errors: GeneralSettingsFormErrors,
  modalType: ModalFieldType;
  modalValue?: GeneralSettingsFormValues;
  handleChange: <K extends keyof GeneralSettingsFormValues>(field: K, value: GeneralSettingsFormValues[K]) => void;
}): ModalField {
  // Génération des options compte bancaire
  const bankOptions = Object.keys(FINANCIAL_PLATFORMS).map<SelectInputOption>((b) => ({
    id: b,
    icon: FINANCIAL_PLATFORMS[b as keyof typeof FINANCIAL_PLATFORMS],
    label: formatBegginWord(b.toLocaleLowerCase()),
  }));
  const AccountTypeOptions = Object.keys(BankAccountType).map((key) => ({
    id: key,
    icon: BankAccountType[key as keyof typeof BankAccountType].icon,
    label: BankAccountType[key as keyof typeof BankAccountType].value.toLocaleLowerCase().split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  }));

  // Filtre des catégories selon type d'entrée (1 = dépenses, 2 = revenus) - conforme code d'origine
  const categoryOptions = Object.keys(listIconCategory)

  // Définition générique des champs pour la création vs édition
  const commonBankInputs: AnyInputType[] = [
    {
      id: "label",
      type: "text",
      placeholder: "Label de ton compte",
      obligatoire: true,
      stateInput: modalValue?.label,
      setStateInput: (v) => handleChange("label", `${v}`),
      errorMessage: errors.label
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
  ];
  
  const createExtraBankInputs: AnyInputType[] = [
    {
      id: "bank",
      type: "select",
      placeholder: "Sélectionne ta banque",
      obligatoire: true,
      options: bankOptions,
      stateInput: modalValue?.icon,
      setStateInput : (v) => handleChange("icon", v),
      errorMessage: errors.icon
    },
    {
      id: "type",
      type: "select",
      placeholder: "Type de compte",
      obligatoire: true,
      options: AccountTypeOptions,
      stateInput: modalValue?.type,
      setStateInput : (v) => handleChange("type", `${v}`),
      errorMessage: errors.type
    },
  ]

  const commonCategoryInputs: AnyInputType[] = [
    {
      id: "icon",
      type: "select-icon",
      placeholder: "Sélectionne ton icon",
      obligatoire: true,
      options: categoryOptions,
      stateInput: modalValue?.icon,
      setStateInput: (v) => handleChange("icon", `${v}`),
      errorMessage: errors.icon,
    },
    {
      id: "name",
      type: "text",
      placeholder: "Nomme la catégorie",
      obligatoire: true,
      stateInput: modalValue?.label,
      setStateInput: (v) => handleChange("label", `${v}`),
      errorMessage: errors.label
    }

  ]

  // Switch-option présent uniquement dans createTransaction pour choisir "Dépenses"/"Revenus"
  const createExtraCategoryInputs: SwitchInputType = {
    id: "type",
    type: "switch-option",
    options: ["Dépenses", "Revenus"],
    stateInput : modalValue?.type,
    setStateInput : (v) => handleChange("type", v)
  };

  // Mapping final
  if (modalType === "bank") {
    return {
      title: "Modifier ton compte",
      inputs: [...commonBankInputs],
      deleted: true,
    };
  } else if(modalType === "newBank") {
    return {
      title: "Crée un compte",
      inputs: [...createExtraBankInputs, ...commonBankInputs],
    };
  } else if (modalType === "categorie") {
    return {
      title: "Modifier la catégorie",
      inputs: [...commonCategoryInputs],
      deleted: true,
    }
  } else {
    return {
      title: "Crée une catégorie",
      inputs: [createExtraCategoryInputs, ...commonCategoryInputs],
    }
  }
}