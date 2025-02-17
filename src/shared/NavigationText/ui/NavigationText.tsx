import { FC, memo } from "react";
import { NavigationTextProps } from "../model/types";

const NavigationText: FC<NavigationTextProps> = ({ description, destination }) => {
    return (
        <>
        <div className='text-white text-[18px] font-normal' onClick={() => document.getElementById(destination)?.scrollIntoView()}>
            {description}
        </div>
        </>
    )
}

export default memo(NavigationText)