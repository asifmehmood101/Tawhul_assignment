import type { IconProps } from "@/@types/iconsTypes"

export const DocumentFlagIcon = ({size=18,color="#DB1F26",...props}: IconProps) => {
    return (
        <svg 
            width={size} 
            height={size * (22/18)} 
            viewBox="0 0 18 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            {...props}
        >
            <path 
                d="M16.75 12.75V9.407C16.75 8.589 16.75 8.181 16.598 7.813C16.446 7.446 16.157 7.156 15.578 6.578L10.842 1.842C10.343 1.343 10.094 1.094 9.784 0.946C9.71984 0.915181 9.65408 0.887808 9.587 0.864C9.264 0.75 8.911 0.75 8.206 0.75C4.961 0.75 3.338 0.75 2.239 1.636C2.01709 1.81494 1.81494 2.01709 1.636 2.239C0.75 3.34 0.75 4.961 0.75 8.206V12.75C0.75 16.521 0.75 18.407 1.922 19.578C3.094 20.749 4.979 20.75 8.75 20.75M9.75 1.25V1.75C9.75 4.578 9.75 5.993 10.629 6.871C11.507 7.75 12.922 7.75 15.75 7.75H16.25" 
                stroke={color} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M13.75 20.75C14.357 20.16 16.75 18.59 16.75 17.75C16.75 16.91 14.357 15.34 13.75 14.75M15.75 17.75H8.75" 
                stroke={color} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    )
}

