import { FC, memo } from "react";

const Badge: FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <div className='p-1 bg-none border-2 text-sm text-[#6C6C6C] border-[#6C6C6C] rounded-full min-w-20 text-center transition-all duration-300 ease-in-out hover:text-white hover:border-white'>
                {title}
            </div>
        </>
    )
}

export default memo(Badge);