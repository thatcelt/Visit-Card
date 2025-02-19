import { FC, memo } from "react";
import { NavigationButtonProps } from "../model/types";

const NavigationButton: FC<NavigationButtonProps> = ({ path, alt, link }) => {
    return (
        <>
            <a href={link}>
                <img className='transition-all duration-300 ease-in-out hover:fill-[#5e5e5e] w-10 aspect-square' src={`src/assets/${path}`} alt={alt}/>
            </a>
        </>
    )
}

export default memo(NavigationButton);