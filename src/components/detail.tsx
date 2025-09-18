import { useState } from 'react'
import { ChevronIcon } from '../assets/chevron'


export const Detail = ({title, detail}: {title: string|React.JSX.Element, detail: string|React.JSX.Element}) =>{
  const [close, setClose] = useState(true)
  return (
    <div className="detail-component" onClick={() => setClose(!close)}>
      <div className={"titleDetail" + (close?" closed":"")}>
        <p className="text-md mediumText">{title}</p>
        <ChevronIcon />
      </div>
      <p className={"text-sm detail" + (close?" closed":"")}>{detail}</p>
    </div>
  )
}