import { useState } from 'react';
import { useUser } from '../../../hooks/user';
import { useForm } from "../../../hooks/useForm";
import { useFinancial } from '../../../hooks/financial';
import { buildModalFieldMap } from "../utils/buildModalFieldMapGeneral";
import { validateGeneralSettingForm } from '../validations/validation';
import { mapGeneralSettingServerError } from "../validations/mapServerError";
import { defaultCategories, BankAccountType } from '../../../types/@types.financesParams';
import type { ModalFieldType, GeneralSettingsFormErrors, GeneralSettingsFormValues } from "../types/GeneralTypes";

/**
 * Hook personnalisé gérant toute la logique métier de la page GeneralSettings.
 * Sépare les états, les actions, la validation, et évite que le composant UI soit « spaghettifié ».
 */
export const useGeneralSettings = () => {
  const { user } = useUser()
  const {
    bank,
    category,
    addBank,
    updateBank,
    removeBank,
    addCategory,
    updateCategory,
    removeCategory,
  } = useFinancial();

  const {
    values,
    errors,
    isValid,
    isSubmitting,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm<GeneralSettingsFormValues, GeneralSettingsFormErrors>({
    validate: validateGeneralSettingForm,
    mapServerError: mapGeneralSettingServerError,
    onSubmit: async (valueSubmitted, deleted) => {
      if (deleted && modalType === "bank") {
        await removeBank({ id : Number(valueSubmitted.id) })
      } else if (modalType === "bank") {
        await updateBank({
          id: Number(valueSubmitted.id),
          balance: Number(valueSubmitted.amount),
          icon: String(bank?.find(e => e.id == Number(valueSubmitted.id))?.icon),
          label: String(valueSubmitted.label),
          type: String(bank?.find(e => e.id == Number(valueSubmitted.id))?.type)
        });
      } else if (deleted && modalType === "categorie") {
        if(Number(valueSubmitted.id) == 0) await removeCategory({
          base_category: String(valueSubmitted.base_category), 
          data : {
            icon: String(valueSubmitted.icon),
            type: defaultCategories.find(
              e => e.label == valueSubmitted.base_category
            )?.type??1
          }
        });

        else await removeCategory({ id: Number(valueSubmitted.id)});
      } else if (modalType === "categorie"){
        if(Number(valueSubmitted.id) == 0) await updateCategory({
          base_category : valueSubmitted.base_category, 
          icon: String(valueSubmitted.icon), 
          name: String(valueSubmitted.label), 
          type: defaultCategories.find(
            e => e.label == valueSubmitted.base_category
        )?.type??1});

        else updateCategory({
          id: Number(valueSubmitted.id),
          icon: String(valueSubmitted.icon),
          name: String(valueSubmitted.label),
        });
      } else if (modalType === "newCategorie"){
        await addCategory({
          icon: String(valueSubmitted.icon),
          name: String(valueSubmitted.label),
          type: valueSubmitted?.type?.toLocaleLowerCase() == "dépenses" ? 1 : 2
        })
      } else if (modalType === "newBank") {
        await addBank({
          balance: Number(valueSubmitted.amount),
          icon: String(valueSubmitted.icon),
          label: String(valueSubmitted.label),
          type: BankAccountType[String(valueSubmitted.type)]?.value
        })
      }
    },
    submitSuccessMessage: ""
  })

  // États principaux
  const [modalType, setModalType] = useState<ModalFieldType>(null);

  // Génération des inputs dynamiques pour le modal
  const modalData = modalType ? buildModalFieldMap({ modalType, errors, handleChange, modalValue: values}) : null;

  return {
    user,
    bank: bank||[],
    values,
    errors,
    isValid,
    category: category||[],
    modalData,
    modalType,
    isSubmitting,
    setErrors,
    handleChange,
    setModalType,
    handleModalSubmit: handleSubmit,
  };
}