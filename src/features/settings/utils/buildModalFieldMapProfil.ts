// Pourquoi : sortir la grosse map de la modale en utilitaire permet la testabilité,
// la lisibilité et évite d'avoir du code volumineux dans le composant principal.
import type { AnyInputType } from "../../../types/@types.inputs";
import type { ProfilSettingsFormErrors, ProfilSettingsFormValues, ModalField, ModalFieldType } from "../types/ProfiTypes";

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
  errors: ProfilSettingsFormErrors,
  modalType: ModalFieldType;
  modalValue?: ProfilSettingsFormValues;
  handleChange: <K extends keyof ProfilSettingsFormValues>(field: K, value: ProfilSettingsFormValues[K]) => void;
}): ModalField {
  const UpdatePseudoInput: AnyInputType = {
    id: "pseudo",
    type: "text",
    placeholder: "Viiper :]",
    obligatoire: true,
    stateInput: modalValue?.pseudo,
    setStateInput: (v) => handleChange("pseudo", `${v}`),
    errorMessage: errors.pseudo
  };

  const UpdateNameInput: AnyInputType = {
    id: "name",
    type: "text",
    placeholder: "Harold",
    stateInput: modalValue?.name,
    setStateInput: (v) => handleChange("name", `${v}`),
    errorMessage: errors.name,
  };
  
  const UpdateEmailInput: AnyInputType[] = [
    {
      id: "email",
      type: "email",
      placeholder: "harold@gmail.com",
      obligatoire: true,
      stateInput: modalValue?.email,
      setStateInput : (v) => handleChange("email", `${v}`),
      errorMessage: errors.email
    },
    {
      id: "password",
      type: "password",
      placeholder: "****************",
      obligatoire: true,
      stateInput: modalValue?.password,
      setStateInput : (v) => handleChange("password", `${v}`),
      errorMessage: errors.password
    },
  ];
  
  const UpdatePasswordInput: AnyInputType[] = [
    {
      id: "password",
      type: "password",
      placeholder: "****************",
      label: "Mot de passe actuel",
      obligatoire: true,
      stateInput: modalValue?.password,
      setStateInput : (v) => handleChange("password", `${v}`),
      errorMessage: errors.password
    },
    {
      id: "new_password",
      type: "password",
      placeholder: "****************",
      label: "Nouveau mot de passe",
      obligatoire: true,
      stateInput: modalValue?.new_pass,
      setStateInput : (v) => handleChange("new_pass", `${v}`),
      errorMessage: errors.confirm_pass
    },
    {
      id: "confirm_password",
      type: "password",
      placeholder: "****************",
      label: "Confirmer le mot de passe",
      obligatoire: true,
      stateInput: modalValue?.confirm_pass,
      setStateInput : (v) => handleChange("confirm_pass", `${v}`),
      errorMessage: errors.confirm_pass
    },
  ];

  // Mapping final
  if (modalType === "email") {
    return {
      title: "Modifier mon mail",
      description: "Entrer votre nouvelle adresse email et validez le avec votre mot de passe",
      inputs: [...UpdateEmailInput],
    };
  } else if(modalType === "name") {
    return {
      title: "Modifier mon nom",
      description: "Entrez votre nom complet",
      inputs: [UpdateNameInput],
    };
  } else if (modalType === "password") {
    return {
      title: "Modifier mon mot de passe",
      description: "Entrez votre nouveau mot de passe",
      inputs: [...UpdatePasswordInput],
    }
  } else {
    return {
      title: "Modifier mon pseudo",
      description: "Entrez votre nouveau pseudo",
      inputs: [UpdatePseudoInput],
    }
  }
}