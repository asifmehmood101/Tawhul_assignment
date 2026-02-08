import type { IconProps } from "@/@types/iconsTypes"

export const LeftArrowIcon = ({size=16,color="#1D3557",...props}: IconProps) => {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            {...props}
        >
            <path 
                d="M2.66666 8.00008H13.3333M2.66666 8.00008C2.66666 8.87875 5.99999 11.3334 5.99999 11.3334M2.66666 8.00008C2.66666 7.12141 5.99999 4.66675 5.99999 4.66675" 
                stroke={color} 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    )
}

