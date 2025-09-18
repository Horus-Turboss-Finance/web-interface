import { useState } from 'react';
import { useUser } from '../../../hooks/user';
import { useForm } from "../../../hooks/useForm";
import { buildModalFieldMap } from "../utils/buildModalFieldMapProfil";
import { validateProfilSettingForm } from '../validations/validation';
import { mapProfilSettingServerError } from "../validations/mapServerError";
import type { ModalFieldType, ProfilSettingsFormErrors, ProfilSettingsFormValues } from '../types/ProfiTypes';

/**
 * Hook personnalisé gérant toute la logique métier de la page GeneralSettings.
 * Sépare les états, les actions, la validation, et évite que le composant UI soit « spaghettifié ».
 */
export const useProfilSettings = () => {
  const { user, UpdateMyCredentialUser, UpdateMyEmailUser, UpdateMyProfilUser, DeleteMyAccountUser } = useUser()

  const {
    values,
    errors,
    isValid,
    setErrors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm<ProfilSettingsFormValues, ProfilSettingsFormErrors>({
    validate: validateProfilSettingForm,
    mapServerError: mapProfilSettingServerError,
    onSubmit: async (valueSubmitted) => {
      handleChange("password", undefined)
      if (modalType === "password") {
        await UpdateMyCredentialUser({ oldPassword: String(valueSubmitted.password), newPassword: String(valueSubmitted.new_pass) })
      } else if (modalType === "email") {
        await UpdateMyEmailUser({
          email: String(valueSubmitted.email),
          password: String(valueSubmitted.password),
        });
      } else if (modalType === "name") {
        await UpdateMyProfilUser({
          name: String(valueSubmitted.name),
        })
      } else if (modalType === "pseudo") {
        await UpdateMyProfilUser({
          pseudo: String(valueSubmitted.pseudo),
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
    values,
    errors,
    isValid,
    modalData,
    modalType,
    isSubmitting,
    setErrors,
    handleChange,
    setModalType,
    onDeleteClick: () => DeleteMyAccountUser(),
    handleModalSubmit: handleSubmit,
  };
}