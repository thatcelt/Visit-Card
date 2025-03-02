import { FC, memo } from "react";
import { SkillData } from "../model/types";

const SkillEntity: FC<SkillData> = ({ title, icon, description }) => {
    return (
        <>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-2'>
                    <div className='font-bold'>
                        {title}
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
                <div className='mr-10'>
                    <img src={icon} className='w-50 aspect-square mt-5'/>
                </div>
            </div>
        </>
    )
}

export default memo(SkillEntity);