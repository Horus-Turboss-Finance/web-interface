import { RightArrowIcon } from "../../../assets/right-arrow"

export const SettingHeader = ({close, setClose, title, noLine}: {close: boolean, setClose: (v: boolean) => void, title: string, noLine?: boolean}) => {
  return (
    <header className='main-header-setting-page'>
      <div className="contain-header">
        <div className="rotate-icon-180" onClick={() => setClose(!close)}>
          <RightArrowIcon />
        </div>
        <h1 className="display-sm">{title}</h1>
      </div>
      {!noLine && <div className="line"></div>}
    </header>
  )
}

export default SettingHeader