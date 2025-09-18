// Hook custom qui centralise toute la logique métier et la gestion des states
// -> Rend le composant DashboardPage beaucoup plus lisible
import { useState } from "react";
import { useUser } from "../../../hooks/user";
import { useForm } from "../../../hooks/useForm";
import { useFinancial } from "../../../hooks/financial";
import { buildModalFieldMap } from "../utils/buildModalFieldMap";
import { validateDashboardForm } from "../validations/validation";
import { mapDashboardServerError } from "../validations/mapServerError";
import type { ModalFieldType, TransactionFormErrors, TransactionFormValues } from "../types/types";


export const useDashboard = () => {
  const { user } = useUser();
  const { bank, category, transaction, addTransaction, removeTransaction, updateTransaction } = useFinancial();
  const {
    values,
    errors,
    isValid,
    setErrors,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = useForm<TransactionFormValues, TransactionFormErrors>({
    validate: validateDashboardForm,
    mapServerError: mapDashboardServerError,
    onSubmit: async (valueSubmitted, deleted) => {
      if (deleted && modalType === "editTransaction") {
        await removeTransaction({ id : Number(valueSubmitted.id) })
      } else if (modalType === "editTransaction") {
        await updateTransaction({
          id: Number(valueSubmitted.id),
          amount: Number(valueSubmitted.amount),
          bankId: Number(valueSubmitted.bankId),
          categoryId: Number(valueSubmitted.categoryId),
          description: valueSubmitted.description,
          date: String(valueSubmitted.date),
          baseCategory: String(valueSubmitted.baseCategory),
        });
      } else if (modalType === "createTransaction") {
        await addTransaction({
          amount: Number(valueSubmitted.amount),
          bankId: Number(valueSubmitted.bankId),
          categoryId: Number(valueSubmitted.categoryId),
          type: String(valueSubmitted.type) === "Revenus" ? "credit" : "debit",
          description: valueSubmitted.description,
          date: valueSubmitted.date,
          baseCategory: String(valueSubmitted.categoryId),
        });
      }
    },
    submitSuccessMessage: ""
  })

  // États principaux
  const [transactionFilter, setTransactionFilter] = useState<"debit" | "credit">("debit");
  const [modalType, setModalType] = useState<ModalFieldType>(null);

  // Génération des inputs dynamiques pour la modale
  const modalData = modalType ? buildModalFieldMap({ modalType, bank, category, handleChange, defaultEntryType: transactionFilter=="debit"?"dépenses":"revenus", modalValue: values, errors }) : null;

  return {
    user,
    values,
    errors,
    isValid,
    modalData,
    modalType,
    isSubmitting,
    transactionFilter,
    transactions: transaction||[],
    setErrors,
    handleChange,
    setModalType,
    setTransactionFilter,
    handleModalSubmit : handleSubmit,
  };
};