import { FC, memo, useState } from "react";

const SearchBar: FC<{ description: string }> = ({ description }) => {
    const [isFocused, setFocusState] = useState(false);

    return (
        <>
            <div className={`flex items-center p-1.5 rounded-full w-35 gap-1.5 text-sm text-white transition-all duration-300 ease-in-out ${isFocused ? 'bg-black outline-[1px] outline-[#282828]' : 'bg-[#282828] outline-none'}`}>
                <img src="src/assets/magnifier.png" className='w-5 aspect-square ml-1'/>
                <input placeholder={description} className="w-23" onClick={() => setFocusState(true)} onBlur={() => setFocusState(false)}/>
            </div>
        </>
    )
}

export default memo(SearchBar);