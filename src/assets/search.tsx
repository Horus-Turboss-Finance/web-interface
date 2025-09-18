export const SearchIcon = ({color} : {color?:string}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 19L15.6207 15.6207M16.5862 10.7931C16.5862 13.9925 13.9925 16.5862 10.7931 16.5862C7.59366 16.5862 5 13.9925 5 10.7931C5 7.59366 7.59366 5 10.7931 5C13.9925 5 16.5862 7.59366 16.5862 10.7931Z" stroke={color||"#111322"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}