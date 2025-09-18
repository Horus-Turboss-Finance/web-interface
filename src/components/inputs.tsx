import { useState, useRef, useEffect, useCallback } from "react";
import { fr } from "date-fns/locale/fr";
import { format } from "date-fns";

import { Mail01_Icon } from "../assets/mail-01.tsx";
import { ChevronIcon } from "../assets/chevron.tsx";
import type {
  DatePickerInputType,
  EmailInputType,
  SelectIconInputType,
  SelectInputType,
  SwitchInputType,
  TextareaInputType,
  TextInputType,
} from "../types/@types.inputs.ts";
import { ALL_ICONS } from "../types/@types.financesParams.ts";

import { DateIcon } from "../assets/date.tsx";

export const EmailInput = ({
  id,
  icon,
  label,
  small,
  placeholder,
  obligatoire,
  errorMessage,
  setStateInput,
  stateInput = "",
  disabled = false,
}: EmailInputType) => {
  const [focused, setFocused] = useState(false);
  if (errorMessage && disabled)
    throw new Error("Un input:email ne peut être désactivé et en erreur.");

  const handleFocus = () => !disabled && setFocused(true);
  const handleBlur = () => !disabled && setFocused(false);

  const inputProps = {
    id,
    name: id,
    type: "email",
    disabled,
    placeholder: placeholder
      ? placeholder
      : setStateInput
      ? "james-bond-007@gmail.com"
      : "john-wick-and-dog@gmail.com",
    className: "text-md",
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...(setStateInput && {
      value: stateInput,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setStateInput(e.target.value),
    }),
  };

  const containerClass = [
    "input-group",
    small && "smallInput",
    focused && "focus",
    errorMessage && "errorInput",
    disabled && "disabled",
    "shadows-xs",
  ]
    .filter(Boolean)
    .join(" ");

  const labeltextcomponent = label && (
    <label htmlFor={id} className="text-sm mediumText">
      <p className="labelText">{label}</p>
      {obligatoire && <p className="textBrandPrimaryColor">*</p>}
    </label>
  );

  return (
    <div className="group-form">
      {labeltextcomponent}
      <div className={containerClass}>
        {icon && <Mail01_Icon />}
        <input {...inputProps} />
      </div>
      <p className="errorLabel">{errorMessage}</p>
    </div>
  );
};

export const TextInput = ({
  id,
  type,
  label,
  small,
  placeholder,
  obligatoire,
  errorMessage,
  setStateInput,
  stateInput = "",
  disabled = false,
}: TextInputType) => {
  const [focused, setFocused] = useState(false);
  if (errorMessage && disabled)
    throw new Error("Un input:email ne peut être désactivé et en erreur.");

  const handleFocus = () => !disabled && setFocused(true);
  const handleBlur = () => !disabled && setFocused(false);

  const inputProps = {
    id,
    name: id,
    type: type ?? "text",
    disabled,
    placeholder: placeholder ? placeholder : "",
    className: "text-md",
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...(setStateInput && {
      value: stateInput,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setStateInput(e.target.value),
    }),
  };

  const containerClass = [
    "input-group",
    small && "smallInput",
    focused && "focus",
    errorMessage && "errorInput",
    disabled && "disabled",
    "shadows-xs",
  ]
    .filter(Boolean)
    .join(" ");

  const labeltextcomponent = label && (
    <label htmlFor={id} className="text-sm mediumText">
      <p className="labelText">{label}</p>
      {obligatoire && <p className="textBrandPrimaryColor">*</p>}
    </label>
  );

  return (
    <div className="group-form">
      {labeltextcomponent}
      <div className={containerClass}>
        <input {...inputProps} />
      </div>
      <p className="errorLabel">{errorMessage}</p>
    </div>
  );
};

export const MontantInput = ({
  id,
  label,
  small,
  placeholder,
  obligatoire,
  errorMessage,
  setStateInput,
  stateInput = "",
  disabled = false,
}: TextInputType) => {
  const [focused, setFocused] = useState(false);
  if (errorMessage && disabled)
    throw new Error("Un input:email ne peut être désactivé et en erreur.");

  const handleFocus = () => !disabled && setFocused(true);
  const handleBlur = () => !disabled && setFocused(false);

  const inputProps = {
    id,
    name: id,
    type: "number",
    disabled,
    placeholder: placeholder ? placeholder : "",
    className: "text-md",
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...(setStateInput && {
      value: stateInput,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setStateInput(e.target.value),
    }),
  };

  const containerClass = [
    "input-group",
    small && "smallInput",
    focused && "focus",
    errorMessage && "errorInput",
    disabled && "disabled",
    "shadows-xs",
  ]
    .filter(Boolean)
    .join(" ");

  const labeltextcomponent = label && (
    <label htmlFor={id} className="text-sm mediumText">
      <p className="labelText">{label}</p>
      {obligatoire && <p className="textBrandPrimaryColor">*</p>}
    </label>
  );

  return (
    <div className="group-form">
      {labeltextcomponent}
      <div className={containerClass}>
        <input {...inputProps} step="0.01" />
        <p>€</p>
      </div>
      <p className="errorLabel">{errorMessage}</p>
    </div>
  );
};

export const TextareaInput = ({
  id,
  label,
  obligatoire,
  placeholder,
  errorMessage,
  setStateInput,
  stateInput = "",
  disabled = false,
}: TextareaInputType) => {
  const [focused, setFocused] = useState(false);
  if (errorMessage && disabled)
    throw new Error("Un input:email ne peut être désactivé et en erreur.");

  const handleFocus = () => !disabled && setFocused(true);
  const handleBlur = () => !disabled && setFocused(false);

  const inputProps = {
    id,
    name: id,
    disabled,
    placeholder: placeholder ?? "Écris ici",
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...(setStateInput && {
      value: stateInput,
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setStateInput(e.target.value),
    }),
  };

  const containerClass = [
    "input-group",
    focused && "focus",
    errorMessage && "errorInput",
    disabled && "disabled",
    "shadows-xs",
    "text-md",
  ]
    .filter(Boolean)
    .join(" ");

  const labeltextcomponent = label && (
    <label htmlFor={id} className="text-sm mediumText">
      <p className="labelText">{label}</p>
      {obligatoire && <p className="textBrandPrimaryColor">*</p>}
    </label>
  );

  return (
    <div className="group-form">
      {labeltextcomponent}
      <textarea {...inputProps} className={containerClass} />
      <p className="errorLabel">{errorMessage}</p>
    </div>
  );
};

export const SelectInput = ({
  id,
  label,
  obligatoire,
  placeholder,
  errorMessage,
  setStateInput,
  stateInput = "",
  options = [],
  disabled = false,
}: SelectInputType) => {
  const [stateInput2, setStateInput2] = useState(stateInput)
  const [open, setOpen] = useState(false);
  const [animationType, setAnimationType] = useState<"open" | "close" | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const ANIMATION_DURATION = 500; // en ms, doit matcher la CSS

  const handleSelect = (value: string) => {
    if(setStateInput) setStateInput(value);
    else setStateInput2(value)
    triggerClose();
  };

  const triggerOpen = () => {
    if (disabled || open) return;
    setOpen(true);
    requestAnimationFrame(() => setAnimationType("open"));
  };

  const triggerClose = useCallback(() => {
    if (disabled || !open) return;
    setAnimationType("close");
    setTimeout(() => {
      setOpen(false);
      setAnimationType(null);
    }, ANIMATION_DURATION);
  }, [disabled, open]);

  const toggleDropdown = () => {
    if(open) return triggerClose(); 
    return triggerOpen();
  };

  // Ferme le menu si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        triggerClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [triggerClose]);

  const containerClass = [
    "linkCardDiv",
    "profilLine",
    disabled && "disabled",
    "shadows-xs",
  ]
    .filter(Boolean)
    .join(" ");

  const labeltextcomponent = label && (
    <label htmlFor={id} className="text-sm labelDiv mediumText">
      <p className="labelText">{label}</p>
      {obligatoire && <p className="textBrandPrimaryColor">*</p>}
    </label>
  );

  return (
    <div className="group-form" ref={containerRef}>
      {labeltextcomponent}
      <input
        type="text"
        className="hiddenInput"
        name={id}
        value={(setStateInput?stateInput:stateInput2) ?? ""}
        readOnly
        id={id}
      />
      <div
        className={containerClass + " input-group"}
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
      >
        <main className="profilMain">
          {options.find((opt) => opt.id == (setStateInput?stateInput:stateInput2)) && (
            <div className="imgContain">
              {(() => {
                const Icon = options.find((opt) => opt.id == (setStateInput?stateInput:stateInput2))?.icon;
                if(!Icon) return null;
                if(typeof Icon == "string") return <img src={Icon} alt="icon picture" />
                else return <Icon color="#5d6b98" />
              })()}
            </div>
          )}
          <div className="profildesc">
            <p className="linkCards text-sm">
              {options.find((opt) => opt.id == (setStateInput?stateInput:stateInput2))?.label ||
                placeholder ||
                "Sélectionner"}
            </p>
            {(setStateInput?stateInput:stateInput2) && options.find((opt) => opt.id == (setStateInput?stateInput:stateInput2))?.value && (
              <p className="text-xs linkCards">
                {options.find((opt) => opt.id == (setStateInput?stateInput:stateInput2))?.value ?? ""}
              </p>
            )}
          </div>
        </main>

        <div
          className={`${animationType === "open" ? "rotate-icon-180" : ""} ${
            animationType === "close" ? "rotateIcon0" : ""
          } chevron`}
        >
          <ChevronIcon color="#5d6b98" />
        </div>
      </div>

      {open && (
        <div
          className={`${containerClass} dropdownMenu ${
            animationType === "open" ? "opening" : ""
          } ${animationType === "close" ? "closing" : ""}
          ${options.length == 0 ? "noOption" : ""}`}
        >
          {options.length > 0 ? (
            options.map((opt) => (
              <main
                className={
                  (opt.id == (setStateInput?stateInput:stateInput2) ? "selected " : "") + "profilMain"
                }
                key={`${opt.id==`${0}`?opt.label:opt.id}-option-select-key`}
                onClick={() => handleSelect(opt.id)}
              >
                {opt.icon && (() => {
                  const Icon = opt.icon;
                  if(!Icon) return null;
                  if(typeof Icon == "string") return <div className="imgContain"><img src={Icon} alt="icon picture" /></div>;
                  else return <div className="imgContain"><Icon color={opt.id == (setStateInput?stateInput:stateInput2)? "#776646" : "#5d6b98"} /></div>;
                })()}

                <div className="profildesc">
                  <p className="linkCards text-sm">{opt.label}</p>
                  {opt.value && (
                    <p className="text-xs linkCards">{opt.value}</p>
                  )}
                </div>
              </main>
            ))
          ) : (
            <main className="profilMain disabled">
              <div className="profildesc">
                <p className="linkCards text-sm">Aucune option</p>
              </div>
            </main>
          )}
        </div>
      )}
    <p className="errorLabel">{errorMessage}</p>
    </div>
  );
};

export const SelectIconInput = ({
  id,
  label,
  obligatoire,
  options = [],
  errorMessage,
  setStateInput,
  stateInput = "",
  disabled = false,
  placeholder,
}: SelectIconInputType) => {
  const [stateInput2, setStateInput2] = useState(stateInput)
  const [open, setOpen] = useState(false);
  const [animationType, setAnimationType] = useState<"open" | "close" | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const ANIMATION_DURATION = 500; // en ms, doit matcher la CSS

  const handleSelect = (value: string) => {
    if(setStateInput) setStateInput(value);
    else setStateInput2(value)
    triggerClose();
  };

  const triggerOpen = () => {
    if (disabled || open) return;
    setOpen(true);
    requestAnimationFrame(() => setAnimationType("open"));
  };

  const triggerClose = useCallback(() => {
    if (disabled || !open) return;
    setAnimationType("close");
    setTimeout(() => {
      setOpen(false);
      setAnimationType(null);
    }, ANIMATION_DURATION);
  }, [disabled, open]);

  const toggleDropdown = () => {
    if(open) return triggerClose();
    return triggerOpen();
  };

  // Ferme le menu si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        triggerClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [triggerClose]);

  const containerClass = [
    "linkCardDiv",
    "profilLine",
    disabled && "disabled",
    "shadows-xs",
  ]
    .filter(Boolean)
    .join(" ");

  const labeltextcomponent = label && (
    <label htmlFor={id} className="text-sm labelDiv mediumText">
      <p className="labelText">{label}</p>
      {obligatoire && <p className="textBrandPrimaryColor">*</p>}
    </label>
  );

  return (
    <div className="group-form" ref={containerRef}>
      {labeltextcomponent}
      <input
        type="text"
        className="hiddenInput"
        name={id}
        value={(setStateInput?stateInput:stateInput2) ?? ""}
        readOnly
        id={id}
      />
      <div
        className={containerClass + " input-group"}
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
      >
        <main className="profilMain">
          {(setStateInput?stateInput:stateInput2) && (
            <div className="imgContain">
              {(() => {
                const IconComp = ALL_ICONS[(setStateInput?stateInput:stateInput2) as keyof typeof ALL_ICONS];
                if(!IconComp) return null;
                if(typeof IconComp == "string") return <img src={IconComp} alt="icon" />
                else return <IconComp color="#5d6b98" />
              })()}
            </div>
          )}
          {!(setStateInput?stateInput:stateInput2) && (
            <div className="profildesc">
              <p className="linkCards text-sm">
                {placeholder || "Sélectionner"}
              </p>
            </div>
          )}
        </main>

        <div
          className={`${animationType === "open" ? "rotate-icon-180" : ""} ${
            animationType === "close" ? "rotateIcon0" : ""
          } chevron`}
        >
          <ChevronIcon color="#5d6b98" />
        </div>
      </div>

      {open && (
        <div
          className={`${containerClass} dropdownMenu ${
            animationType === "open" ? "opening" : ""
          } ${animationType === "close" ? "closing" : ""}
          ${options.length == 0 ? "noOption" : ""}`}
        >
          {options.length > 0 ? (
            options.map((Opt, i) => (
              <main
                className={
                  (Opt == (setStateInput?stateInput:stateInput2) ? "selected " : "") + "profilMain"
                }
                key={`${i}-option-modal-select-icon`}
                onClick={() => handleSelect(Opt)}
              >
                {Opt && (() => {
                  const IconComp = ALL_ICONS[Opt as keyof typeof ALL_ICONS];
                  if(!IconComp) return  <div className="imgContain"><img src="/logo.png" alt="icon"/></div>;
                  if(typeof IconComp == "string") return <div className="imgContain"><img src={IconComp} alt="icon"/></div>;
                  else return <div className="imgContain"><IconComp color={Opt == (setStateInput?stateInput:stateInput2)? "#776646" : "#5d6b98"} /></div>;
                })()}

                <div className="profildesc"></div>
              </main>
            ))
          ) : (
            <main className="profilMain disabled">
              <div className="profildesc">
                <p className="linkCards text-sm">Aucune option</p>
              </div>
            </main>
          )}
        </div>
      )}
    <p className="errorLabel">{errorMessage}</p>
    </div>
  );
};

export const DatePickerInput = ({
  id,
  label,
  obligatoire,
  errorMessage,
  stateInput = new Date(),
  setStateInput,
  disabled = false,
  placeholder = "Sélectionner une date",
}:DatePickerInputType) => {
  const [open, setOpen] = useState(false);
  const [stateInput2, setStateInput2] = useState(new Date(stateInput))
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [animationType, setAnimationType] = useState<"open" | "close" | null>(
    null
  );
  const [tempDate, setTempDate] = useState<Date | null>((setStateInput?stateInput:stateInput2) || null);
  const ref = useRef<HTMLDivElement>(null);

  const ANIMATION_DURATION = 500; // en ms, doit matcher la CSS

  const triggerOpen = () => {
    if (disabled || open) return;
    setOpen(true);
    requestAnimationFrame(() => setAnimationType("open"));
  };

  const triggerClose = useCallback(() => {
    if (disabled || !open) return;
    setAnimationType("close");
    setTimeout(() => {
      setOpen(false);
      setAnimationType(null);
    }, ANIMATION_DURATION);
  }, [open, disabled]);

  const toggleDropdown = () => {
    if(open) return triggerClose();
    return triggerOpen();
  };

  // Fermer si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        triggerClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [triggerClose]);

  // Génère la grille de jours du mois
  const getDaysInMonth = (date: Date) => {
    const y = date.getFullYear();
    const m = date.getMonth()
    const dS = new Date(y, m, 0).getDay();

    const days = [];
    for (let i = 1; i <= 6*7; i++) {
      const day = new Date(y, m, i - dS);
      const isSelected =
        tempDate &&
        day.toDateString() === new Date(tempDate).toDateString();
      const isInMonth = day.getMonth() == m  
      days.push(<div
        key={`${day.toISOString()}-grid-inline-date-picker`}
        onClick={() => handleSelectDate(day)}
        className={`date-line-picker ${isSelected && "selected-date"} ${!isInMonth && "secondary-date"}`}
      >
        {day.getDate()}
      </div>);
    }
    return days;
  };

  const handleSelectDate = (day: Date) => {
    setTempDate(day);
    if (setStateInput) setStateInput(day);
    else setStateInput2(day)
    triggerClose();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const days = getDaysInMonth(currentMonth);
  const selectedDate = (setStateInput?stateInput:stateInput2) ? format((setStateInput?stateInput:stateInput2), "dd/MM/yyyy", { locale: fr }) : "";

  const containerClass = [
    "linkCardDiv",
    "profilLine",
    disabled && "disabled",
    "shadows-xs",
  ]
    .filter(Boolean)
    .join(" ");

  const labeltextcomponent = label && (
    <label htmlFor={id} className="text-sm labelDiv mediumText">
      <p className="labelText">{label}</p>
      {obligatoire && <p className="textBrandPrimaryColor">*</p>}
    </label>
  );

  return (
    <div className="group-form" ref={ref}>
      {labeltextcomponent}
      <input
        type="text"
        className="hiddenInput"
        name={id}
        value={(setStateInput?stateInput:stateInput2).toString() ?? ""}
        readOnly
        id={id}
      />

      <div
        className={containerClass + " input-group"}
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
      >
        <main className="profilMain">
          <div className="imgContain">
            {<DateIcon />}
          </div>
          <div className="profildesc">
            <p className="linkCards text-sm">
              {selectedDate || placeholder || "Sélectionner"}
            </p>
          </div>
        </main>

        <div
          className={`${animationType === "open" ? "rotate-icon-180" : ""} ${
            animationType === "close" ? "rotateIcon0" : ""
          } chevron`}
        >
          <ChevronIcon color="#5d6b98" />
        </div>
      </div>

      {/* Popup calendrier */}
      {open && (
        <div
          className={`${containerClass} customDrop dropdownMenu ${
            animationType === "open" ? "opening" : ""
          } ${animationType === "close" ? "closing" : ""}`}
        >          {/* Header mois */}
          <div className="headerDatePicker">
            <div className="rotateIcon270 iconSVGROT" onClick={handlePrevMonth}><ChevronIcon color="#A4A7AE"/></div>
            <p className="text-sm">
              {format(currentMonth, "MMMM yyyy", { locale: fr })}
            </p>
            <div className="rotateIcon90 iconSVGROT" onClick={handleNextMonth}><ChevronIcon color="#A4A7AE"/></div>
          </div>

          <main className="grid-contain">
            {/* Jours de la semaine */}
            <div className="gridDatePicker grid grid-cols-7 text-center text-xs font-semibold mb-2 text-gray-500">
              {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                <span key={`${day}-${i}-week-header`}>{day}</span>
              ))}
            </div>

            {/* Jours */}
            <div className="gridDateConsume grid grid-cols-7 gap-1">
              {...days}
            </div>

          </main>
        </div>
      )}
    <p className="errorLabel">{errorMessage}</p>
    </div>
  );
};

export const ToggleInput = ({
  id,
  stateInput = "",
  setStateInput,
  options,
}:SwitchInputType) => {
  const [stateInput2, setStateInput2] = useState(stateInput||options[0].toLowerCase())


  const containerClass = [
    "linkCardDiv",
    "profilLine",
    "shadows-xs",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="container-toggle group-form">
      <input
        type="text"
        className="hiddenInput"
        name={id}
        value={(setStateInput?stateInput:stateInput2) ?? ""}
        readOnly
        id={id}
      />

      <div className={containerClass + 'input-group switchInput'} role="button" tabIndex={0}>
        {options.map((e, i) => <div className={`switchInputOption ${(setStateInput?stateInput:stateInput2).toLocaleLowerCase() == e.toLocaleLowerCase() && "selectedSwitchOption"} ${i == 0 && "leftSwitchOption"} ${i == options.length - 1 && "rightSwitchOption"}`} key={`${id}-${e}-switch-input-option`} onClick={() => {if (setStateInput) setStateInput(e.toLocaleLowerCase()); else setStateInput2(e.toLocaleLowerCase())}}>{e}</div>)}
      </div>
    </div>
  )
}