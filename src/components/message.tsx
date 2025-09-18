import { CloseIcon } from "../assets/close";

const LABELS = {
  error: "Error",
  success: "Success",
  warning: "Warning",
  brand: "Information",
  secondary: "Information",
};

export const BannerMessage = ({type, message, handleClose}: {message: string; type: keyof typeof LABELS, handleClose: () => void}) => {
  return (
    <div className={`banner-message ${type}`} onClick={handleClose}>
      <div className="context">
        <p className="banner text-xs">{LABELS[type]}</p>
        <p className="message text-sm">{message}</p>
      </div>
      <CloseIcon />
    </div>
  );
};
