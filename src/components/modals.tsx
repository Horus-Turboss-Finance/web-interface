import type { JSX } from 'react';
import { Button } from './buttons';
import type { AnyInputType } from '../types/@types.inputs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { DatePickerInput, EmailInput, MontantInput, SelectIconInput, SelectInput, TextInput, TextareaInput, ToggleInput } from './inputs';
import { BannerMessage } from './message';

type ModalProps = {
  title: string;
  description?: string;
  inputs: AnyInputType[];
  deletedOption: boolean;
  handleSubmit: (deleted?: boolean) => Promise<void>;
  handleClose: () => void;
  isSubmitting?: boolean;
  isSubmitted?: boolean;
  error?: string;
};

export const Modal = ({ title, description, inputs, handleSubmit, handleClose, deletedOption, isSubmitting, isSubmitted, error }: ModalProps): JSX.Element => {
  const [isClosing, setIsClosing] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  // Animate in on mount
  useEffect(() => {
    const timeout = setTimeout(() => setIsClosing(false), 10); // allow DOM to mount
    return () => clearTimeout(timeout);
  }, []);
 
  const handleCloseWithAnimation = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      handleClose();
    }, 500); // match CSS transition time
  }, [handleClose]);
  
  // Handle Escape key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseWithAnimation();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleCloseWithAnimation]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    return (async () => {
      await handleSubmit();
    })()
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as Node)
    ) {
      handleCloseWithAnimation();
    }
  };

  if(isSubmitted && !isClosing) handleCloseWithAnimation();

  const renderInput = (input: AnyInputType) => {
    switch (input.type) {
      case "select-icon" :
        return <SelectIconInput key={`${input.id}-modal-render-select-icon-input}`} {...input} />;
      case 'textarea':
        return <TextareaInput key={`${input.id}-modal-render-textarea-input}`} {...input} />;
      case 'number':
        return <MontantInput key={`${input.id}-modal-render-number-input}`} {...input} />;
      case "select" :
        return <SelectInput key={`${input.id}-modal-render-select-input}`} {...input} />;
      case 'email':
        return <EmailInput key={`${input.id}-modal-render-email-input}`} {...input} />;
      case "date": 
        return <DatePickerInput key={`${input.id}-modal-render-date-input}`} {...input} />;
      case "switch-option": 
        return <ToggleInput key={`${input.id}-modal-render-switch-input`} {...input} />;
      default:
        return <TextInput key={`${input.id}-modal-render-input}`} {...input} />;
    }
  };

  let messGlobal = error

  return (
    <div className={`modalContainer ${isClosing ? 'close' : ''}`} onClick={handleOutsideClick}>
      <div className="modals" ref={modalRef}>
        <header>
          <div className="line"></div>
          <h2>{title}</h2>
          <p>{description}</p>
          {messGlobal && <BannerMessage type='error' handleClose={() => messGlobal = ''} message={messGlobal} />}
        </header>

        <form onSubmit={onSubmit}>
          <main className='mainFom'>
            {inputs.map(renderInput)}
          </main>

          <footer>
            <div className="footer-rigth">
              <Button textBtn='Confirmer' disabled={isSubmitting}  importance='primary' type='submit' />
              <div className="cancel" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCloseWithAnimation();
              }}>
                <Button textBtn='Annuler' importance='secondary' type='reset' />
              </div>
            </div>
            {deletedOption && (<div className="reset" onClick={() => {handleSubmit(true);}}>
              <Button textBtn='Supprimer' disabled={isSubmitting} importance='secondary' type='submit' destructive />
            </div>)}
          </footer>
        </form>
      </div>
    </div>
  );
};