import { FC, memo } from "react";
import { InteractiveButtonProps } from "../model/types";

const InteractiveButton: FC<InteractiveButtonProps> = ({ text, onClick }) => {
    return (
        <>
            <button onClick={onClick} className='bg-[#282828] text-[19px] shadow-[#282828] shadow-md text-white font-semibold w-45 h-14 p-2.5 rounded-2xl'>{text}</button>
        </>
    )
}

export default memo(InteractiveButton);