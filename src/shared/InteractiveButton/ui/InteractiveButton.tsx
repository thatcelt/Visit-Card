import { FC, memo } from "react";
import { InteractiveButtonProps } from "../model/types";

const InteractiveButton: FC<InteractiveButtonProps> = ({ text, onClick }) => {
    return (
        <>
            <button onClick={(e) => onClick(e)} className='bg-neutral-800 text-sm inset-ring-2 inset-ring-[#1f1f1f] text-white font-semibold w-35 h-10 p-2.5 rounded-lg transition-all duration-500 ease-in-out hover:bg-transparent'>{text}</button>
        </>
    )
}

export default memo(InteractiveButton);