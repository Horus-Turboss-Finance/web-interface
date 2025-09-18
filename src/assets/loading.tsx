export const LoadingIcon = ({color} : {color?:string}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5.25V8.25" stroke={color||"#111322"} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.25 7.25L9.5 9.5" stroke={color||"#111322"} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5.75 12H8" stroke={color||"#111322"} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.5 16.5L9.5 14.5" stroke={color||"#111322"} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 16V17.75" stroke={color||"#111322"} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 7L14.5 9.5" stroke={color||"#111322"} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}