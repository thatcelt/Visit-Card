import { FC, memo } from "react";

const SearchBar: FC<{ description: string }> = ({ description }) => {
    return (
        <>
            <div className='flex items-center p-1.5 rounded-full bg-[#282828] w-50   gap-1.5 text-white'>
                <img src="src/assets/magnifier.png" className='w-7 aspect-square ml-1'/>
                {description}
            </div>
        </>
    )
}

export default memo(SearchBar);