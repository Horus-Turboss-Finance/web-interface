import { LineProfilCard } from './linkProfilCard';
import { RightArrowIcon } from '../assets/right-arrow';
import { LinkCards } from './linkcards';
import useUser from '../hooks/user';

export const SettingBar = ({close}:{close: boolean}) => {
  const { user } = useUser();

  return (
    <div className={"settingBar shadows-md" + (close?"":" open")}>
      <main className="settingBarHeaderIcon">
        <header className='settingTopHeaderBar'>
          <div className="uptop">
            <a className="rotate-icon-180" href='/@me'>
              <RightArrowIcon />
            </a>
            <h1 className="displaysm">Paramètre</h1>
          </div>
          <LineProfilCard href='/@me/setting' name={user?.name??""} profilPictURL={user?.PPURL??""} pseudo={user?.pseudo??""} />
        </header>
        <main className="settingMainHeaderBar">
          <LinkCards href='/@me/setting/general' icon='chevron' title='Général' />
          <LinkCards href='/@me/setting/notif' icon='chevron' title='Notification' />
          <LinkCards href='/@me/setting/privacy' icon='chevron' title='Donnée de confidentialité' />
        </main>
      </main>  
      <footer className="settingFooterBar">
        <div className="lineSeparation"></div>
        <main className="settingFooterMainBar">
          <LinkCards href='https://coff.ee/Horus.Turboss' icon='external' title='Supportez nous !' />
          <LinkCards href='/contact' icon='external' title='Contact' />
          <LinkCards href='/terms' icon='external' title="Condition d'utilisation" />
        </main>
      </footer>
    </div>
  )
}