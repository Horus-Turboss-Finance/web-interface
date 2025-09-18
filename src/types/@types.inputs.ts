import type { ElementType } from "react";
import type { ALL_ICONS } from "./@types.financesParams";

export type TextInputType = {
  id: string, 
  type?: string,
  label?: string, 
  small?: boolean,
  disabled?: boolean, 
  stateInput?: string,  
  placeholder?: string,
  obligatoire?: boolean, 
  errorMessage?: string,
  setStateInput?: (value: unknown|string) => void, 
}

export type TextareaInputType = {
  id: string, 
  label?: string, 
  disabled?: boolean, 
  stateInput?: string,  
  placeholder?: string,
  obligatoire?: boolean, 
  errorMessage?: string,
  setStateInput?: (value: unknown|string) => void, 
}

export type EmailInputType = {
  id: string, 
  icon?: boolean,
  label?: string, 
  small?: boolean,
  disabled?: boolean, 
  stateInput?: string,  
  placeholder?: string,
  obligatoire?: boolean, 
  errorMessage?: string,
  setStateInput?: (value: unknown|string) => void, 
}

export type SelectInputOption = {
  id: string;
  icon?: string|ElementType<{ color?: string }>;
  label: string;
  value?: string;
};

export type SelectIconInputOption = keyof typeof ALL_ICONS;

export type SelectIconInputType = {
  type: "select-icon";
  id: string;
  label?: string;
  obligatoire?: boolean;
  placeholder?: string;
  disabled?: boolean;
  options: SelectIconInputOption[];
  stateInput?: string;
  setStateInput?: (value: string) => void;
  small?: boolean;
  icon?: boolean;
  errorMessage?: string;
}

export type SelectInputType = {
  type: "select";
  id: string;
  label?: string;
  obligatoire?: boolean;
  placeholder?: string;
  disabled?: boolean;
  options: SelectInputOption[];
  stateInput?: string;
  setStateInput?: (value: string) => void;
  small?: boolean;
  icon?: boolean;
  errorMessage?: string;
};

export interface DatePickerInputType {
  type: "date";
  id: string;
  label?: string;
  obligatoire?: boolean;
  placeholder?: string;
  disabled?: boolean;
  stateInput?: Date;
  small?: boolean;
  setStateInput?: (value: Date) => void;
  icon?: boolean;
  errorMessage?: string;
}

export interface SwitchInputType {
  type: "switch-option";
  id: string;
  options: string[];
  stateInput?: string;
  setStateInput?: (value: string) => void;
}

export type AllInputType = {
  type: "email" | "text" | "textarea" | "password" | "number" ;
  id: string;
  label?: string;
  placeholder?: string;
  obligatoire?: boolean;
  small?: boolean;
  icon?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  stateInput?: string;
  setStateInput?: (value: unknown|string|number) => void;
};

export type AnyInputType =
| AllInputType
| SelectInputType
| SelectIconInputType
| SwitchInputType
| DatePickerInputType;