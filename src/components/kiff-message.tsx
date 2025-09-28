const LABELS = {
  relax: "✨",
  serré: "🛡️",
  alerte: "🚨",
};

export const KiffMessage = ({type, message}: {message: string; type: keyof typeof LABELS}) => {
  return (
    <div className={`banner-message ${type == "alerte"? "error" : type == "serré" ? "warning" : "success"}`}>
      <div className="context">
        <p className="banner text-xs">{LABELS[type]}</p>
        <p className="message text-sm">{message}</p>
      </div>
    </div>
  );
};
