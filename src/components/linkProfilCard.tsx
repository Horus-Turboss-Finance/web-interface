import { ChevronIcon } from '../assets/chevron';

type CardProps = {
  name: string;
  href: string;
  pseudo: string;
  profilPictURL: string;
};

export const LineProfilCard = ({
  href,
  name,
  pseudo,
  profilPictURL
}: CardProps) => {
  return (
    <a href={href}  className="linkCardDiv profilLine">
      <main className="profilMain">
        <div className="imgContain">
          <img src={profilPictURL} alt="profil picture" />
        </div>
        <div className="profildesc">
          <p className="linkCards text-sm">{pseudo}</p>
          <p className="linkCards text-xs">{name}</p>
        </div>
      </main>
      <div className="rotateIcon90">
        <ChevronIcon color='#5d6b98' />
      </div>
    </a>
  )
};