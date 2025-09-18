import type { JSX } from 'react';
import { ChevronIcon } from '../assets/chevron';
import { ExternalLinkIcon } from '../assets/external-link';

type CardProps = {
  icon: "chevron"|"external";
  title: string;
  href: string;
};

export const LinkCards = ({
  href,
  title,
  icon
}: CardProps) => {
  let Icon;
  if(icon == "chevron") Icon = ChevronIcon;
  else Icon = ExternalLinkIcon;

  return (
    <a href={href}  className="linkCardDiv">
      <p className="linkCards text-sm">{title}</p>
      <div className={(icon == "chevron"?"rotateIcon90":"")}>
        <Icon color='#5d6b98' />
      </div>
    </a>
  )
};

type BtnCardProps = {
  onClickFunc?: () => void;
  subTitle?: string;
  title: string;
  Icon?: string|JSX.Element;
  amount?: string;
  size?:"small"|"medium"|"large"
};

export const BtnCard = ({  
  onClickFunc,
  subTitle,
  amount,
  title,
  Icon,
  size
}: BtnCardProps) => {
  return (
    <div className={"linkCardDiv profilLine " + size} onClick={() => { if(onClickFunc) onClickFunc()}}>
      <main className="profilMain spaceBet">
        {Icon && typeof Icon == "string" && (<div className="imgContain"><img src={Icon} alt="icon picture" /></div>)}
        {Icon && typeof Icon != "string" && (<div className="imgContain">{Icon}</div>)}
        
        <div className="profildesc">
          <p className="linkCards text-sm">{title}</p>
          {subTitle? <p className="text-xs linkCards">{subTitle}</p> : ""}
        </div>
      </main>
        
      <div className={"rotateIcon90 " + (amount ? "divamount":"")}>
        {amount ? <><p className='text-xs amount'>{amount}</p><ChevronIcon color='#5d6b98' /></> : <ChevronIcon color='#5d6b98' />}
      </div>
    </div>
  )
}

type BtnIconCardProps = {
  onClickFunc?: () => void;
  Icon?: JSX.Element;
  subTitle?: string;
  title: string;
  amount?: string;
};
export const BtnIconCard = ({  
  onClickFunc,
  subTitle,
  title,
  Icon,
  amount
}: BtnIconCardProps) => {
  return (
    <div className="linkCardDiv profilLine" onClick={() => { if(onClickFunc) onClickFunc()}}>
      <main className="profilMain spaceBet">
        {Icon && (<div className="imgContain">{Icon}</div>)}
        
        <div className="profildesc">
          <p className="linkCards text-sm">{title}</p>
          {subTitle? <p className="text-xs linkCards">{subTitle}</p> : ""}
        </div>
      </main>
        
      <div className={"rotateIcon90 " + (amount ? "divamount":"")}>
        {amount ? <p className='text-md amount'>{amount}</p> : <ChevronIcon color='#5d6b98' />}
      </div>
    </div>
  )
}