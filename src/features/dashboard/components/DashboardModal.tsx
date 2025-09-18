// Rôle : rendre une modale avec inputs dynamiques (select, date, number, textarea, switch-option)
// Pourquoi : isoler la logique d'affichage du formulaire et d'assemblage du FormData.

import React, { useState } from "react";
import type { ModalField, ModalFieldType } from "../types/types";
import { Modal } from "../../../components/modals";

interface DashboardModalProps {
  modalData: ModalField;
  modalType: ModalFieldType;
  onClose: () => void;
  onSubmit: (deleted?:boolean) => Promise<boolean> | void;
  isSubmitting: boolean;
  errors?:string;
}

export const DashboardModal: React.FC<DashboardModalProps> = ({
  modalData, onClose, onSubmit, isSubmitting, errors
  }) => {
  // Build FormData and call onSubmit
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submit = async ( deleted = false ) => {
    const success = await onSubmit(deleted);

    if (success && !isSubmitted) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 300); // Tu peux réduire le timeout
    }

    return;
  };

  return (
    <Modal
      title={modalData.title}
      description={`${modalData.description}`}
      deletedOption={modalData.deleted!}
      isSubmitting={isSubmitting} 
      handleSubmit={submit}
      handleClose={onClose}
      isSubmitted={isSubmitted}
      inputs={modalData.inputs}
      error={errors}
    />
  );
};