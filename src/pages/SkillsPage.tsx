import { FC, memo, useEffect } from "react";

const SkillsPage: FC = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#a0a0a0'

        return () => { document.body.style.backgroundColor = '#000000' }
    }, [])

    return (
        <div className='bg-[#a0a0a0] text-9xl text-black absolute text-center size-full flex items-center justify-center'>
            СОСИ
        </div>
    )
}

export default memo(SkillsPage);