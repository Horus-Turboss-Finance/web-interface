import type { JSX } from "react";

type ButtonProps = {
  textBtn: string|JSX.Element;
  linkAdr?: string;
  disabled?: boolean;
  destructive?: boolean;
  type?: "submit" | "reset";
  importance: "primary"|"secondary"|"tertiary"|"optionnel";
  size?: "small" | "medium" | "large";
  square?: boolean;
};

export const Button = ({
  importance,
  textBtn,
  linkAdr,
  disabled = false,
  destructive,
  type = "submit",
  size = "medium",
}: ButtonProps) => {
  const classMap = {
    small: "smallBtn",
    medium: "mediumBtn",
    large: "largeBtn",
  };

  const importanceMap = {
    primary: "primary-btn",
    secondary: "secondary-btn",
    tertiary: "tertiary-btn",
    optionnel: "optionnel"
  }

  const containerClass = [
    classMap[size],
    destructive && "destructiveBtn",
    disabled && "disabledBtn",
    importanceMap[importance],
    "text-sm",
    "btn-component"
  ].filter(Boolean).join(" ");

  const content = linkAdr ? (
    <a href={disabled?"#":linkAdr} className={containerClass}>{textBtn}</a>
  ) : (
    <button disabled={disabled} type={type} className={containerClass}>{textBtn}</button>
  );

  return <>{content}</>;
};

export const IconButton = ({
  importance,
  textBtn,
  linkAdr,
  disabled = false,
  square,
  destructive,
  type = "submit",
  size = "medium",
}: ButtonProps) => {
  const classMap = {
    small: "smallBtn",
    medium: "mediumBtn",
    large: "largeBtn",
  };

  const importanceMap = {
    primary: "primary-btn",
    secondary: "secondary-btn",
    tertiary: "tertiary-btn",
    optionnel: "optionnel"
  }

  const containerClass = [
    destructive && "destructiveBtn",
    disabled && "disabledBtn",
    !square && "round-btn",
    square && "square-btn",
    classMap[size],
    importanceMap[importance],
    "text-sm",
    "btn-component"
  ].filter(Boolean).join(" ");

  const content = linkAdr ? (
    <a href={disabled?"#":linkAdr} className={containerClass}>{textBtn}</a>
  ) : (
    <button disabled={disabled} type={type} className={containerClass}>{textBtn}</button>
  );

  return <>{content}</>;
};