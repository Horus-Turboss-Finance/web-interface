import { TitleIcon } from "./title-icon";

type CardProps = {
  children?: React.JSX.Element;
  icon: "clock"|"link"|"thumbtack"|"search"|"shake";
  title: string;
};

export const CardContact = ({
  children,
  title,
  icon
}: CardProps) => {
  return (
    <div className="cards-contact">
      <div className="icon">
        <TitleIcon type={icon} />
      </div>
      <div className="content">
        <h3 className="text-xl">{title}</h3>
        <div className="content-text">
          {children}
        </div>
      </div>
    </div>
  )
};