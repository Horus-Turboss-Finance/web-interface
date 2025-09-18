import { CheckIcon } from '../assets/check'

export const Checkbox = ({checkValue, setCheckValue, disabled, label, supportLabel}:{label: string|React.JSX.Element, supportLabel?: string, checkValue: boolean, setCheckValue: (v:boolean) => void, disabled?: boolean}) => { 
  return (
    <div className={"toggles " + (disabled?"disabled":"")} onClick={() => !disabled && setCheckValue(!checkValue)}>
      <div className="labels">
        {label && <p className="text-sm">{label}</p>}
        {label && supportLabel && <p className="text-sm">{supportLabel}</p>}
      </div>
      <div className={"checkbox shadows-xs" + " " + (checkValue?"checked":"") + " " + (disabled?"disabled":"")}>{checkValue && <CheckIcon color='white' />}</div>
    </div>
  )
}