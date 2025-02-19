import { FC, memo } from "react";
import { NavigationTextProps } from "../model/types";

const NavigationText: FC<NavigationTextProps> = ({ description, destination, onClick }) => {
    return (
        <>
        <div className='text-white text-[18px] font-normal transition-all duration-300 ease-in-out hover:text-[#5e5e5e]' onClick={() => !onClick ? document.getElementById(destination)?.scrollIntoView() : onClick()}>
            {description}
        </div>
        </>
    )
}

export default memo(NavigationText)