import React, { useState } from 'react';
import { Modal } from '../../../components/modals';
import type { ModalField as ModalGeneralFields, ModalFieldType as ModalGeneralFieldType } from "../types/GeneralTypes";
import type { ModalField as ModalProfilFields, ModalFieldType as ModalProfilFieldsType } from "../types/ProfiTypes";

interface ModalSettingGeneralProps {
  modalData: ModalGeneralFields;
  modalType: ModalGeneralFieldType;
  onClose: () => void;
  onSubmit: (deleted?:boolean) => Promise<boolean> | void;
  isSubmitting: boolean;
  errors?:string;
}

interface ModalSettingProfilProps {
  modalData: ModalProfilFields;
  modalType: ModalProfilFieldsType;
  onClose: () => void;
  onSubmit: (deleted?:boolean) => Promise<boolean> | void;
  isSubmitting: boolean;
  errors?:string;
}

export const ModalSettingProfil: React.FC<ModalSettingProfilProps> = ({
  modalData, onClose, onSubmit, isSubmitting
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  // Build FormData and call onSubmit
  const submit = async () => {
    const success = await onSubmit();

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
      deletedOption={false}
      handleSubmit={submit}
      handleClose={onClose}
      isSubmitting={isSubmitting}
      isSubmitted={isSubmitted}
      inputs={modalData.inputs}
    />
  );
};

export const ModalSettingGeneral: React.FC<ModalSettingGeneralProps> = ({
  modalData, onClose, onSubmit, isSubmitting, errors
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  // Build FormData and call onSubmit
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
      description={modalData.description}
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