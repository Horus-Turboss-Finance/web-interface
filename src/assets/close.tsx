export const CloseIcon = ({color} : {color?:string}) => {
    return (
        <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7M1 7L7 1" stroke={color||"#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}