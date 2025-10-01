import React, { useCallback, useMemo, useState } from "react";
import type { ApiErrorShape } from "../types/api";
import { useAutoClear } from "./useAutoClear";

type UseFormOptions<FormValues, FormErrors> = {
  /** Fonction qui valide les valeurs du formulaire et renvoie un objet d'erreurs */
  validate: (values: FormValues | null) => FormErrors;
  /** Fonction qui mappe un message d'erreur serveur vers des erreurs exploitables */
  mapServerError: (serverMsg?: string) => Partial<Record<"global" | keyof FormValues, string | undefined>>;
  /** Fonction principale appelée lors de la soumission */
  onSubmit: (values: FormValues, deleted?:boolean) => Promise<void> | void;
  submitSuccessMessage: string;
};

type UseFormReturn<FormValues, FormErrors> = {
  isValid: boolean;
  values: FormValues;
  errors: FormErrors;
  isSubmitting: boolean;
  successMessage: string | null;
  handleSubmit: (deleted?:boolean) => Promise<boolean>;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>;
  handleChange: <K extends keyof FormValues>(field: K, value: FormValues[K]) => void;
};

/**
 * Hook générique pour gérer la logique d'un formulaire contrôlé.
 * - Gestion des valeurs
 * - Validation locale
 * - Gestion des erreurs serveur
 * - Soumission avec callback
 * - Messages de succès
 */
export function useForm<FormValues, FormErrors>(
  { validate, mapServerError, onSubmit, submitSuccessMessage }: UseFormOptions<FormValues, FormErrors>
): UseFormReturn<FormValues, FormErrors> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<FormValues>({} as FormValues);
  const [errors, setErrors] = useState<FormErrors>({} as FormErrors);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { schedule } = useAutoClear();

  // Validation locale en temps réel
  const validationErrors = useMemo(() => validate(values), [values, validate]);
  const isValid = useMemo(
    () => Object.keys(validationErrors as object).length === 0,
    [validationErrors]
  );

  console.log(validationErrors)
  /**
   * Met à jour un champ du formulaire + réinitialise les erreurs locales
   */
  const handleChange = useCallback<<K extends keyof FormValues>(
    field: K,
    value: FormValues[K]
  ) => void>(
    (field, value) => {
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined, global: undefined }));
    },
    []
  );

  /**
   * Soumission du formulaire
   */
  const handleSubmit = useCallback(async (deleted?: boolean) => {
    // On affiche les erreurs locales si elles existent
    if (!isValid) {
      setErrors(validationErrors);
      schedule(() => setErrors({} as FormErrors), 15_000);
      return false;
    }

    setIsSubmitting(true);
    setErrors({} as FormErrors);

    try {
      await onSubmit(values, deleted);

      // Succès → On affiche un message + reset les champs
      setSuccessMessage(submitSuccessMessage);
      setValues({} as FormValues);

      // Auto-clear du message de succès après 10s
      schedule(() => setSuccessMessage(null), 10_000);
      return true;
    } catch (err) {
      const apiErr = err as ApiErrorShape;

      if (!apiErr?.response) {
        setErrors({ global: "Problème réseau. Réessaie plus tard." } as FormErrors);
      } else {
        const serverMsg = apiErr.response.data?.data;
        setErrors(mapServerError(serverMsg) as FormErrors);
      }

      // Auto-clear des erreurs serveur après 15s
      schedule(() => setErrors({} as FormErrors), 15_000);
      return false; 
    } finally {
      setIsSubmitting(false);
    }
  }, [isValid, validationErrors, values, onSubmit, mapServerError, submitSuccessMessage, schedule]);

  return {
    values,
    errors,
    successMessage,
    isSubmitting,
    isValid,
    handleChange,
    handleSubmit,
    setErrors,
    setSuccessMessage,
  } as const;
}