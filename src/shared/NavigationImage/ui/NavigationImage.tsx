import { FC, memo } from "react";
import { NavigationImageProps } from "../model/types";

const NavigationText: FC<NavigationImageProps> = ({ path, alt }) => {
    return (
        <>
        <img src={`/${path}`} alt={alt} className='w-25 h-25 pointer-events-none'/>
        </>
    )
}

export default memo(NavigationText)