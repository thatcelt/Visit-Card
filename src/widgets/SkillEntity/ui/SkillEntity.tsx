import { FC, memo } from "react";
import { SkillData } from "../model/types";
import InteractiveButton from "../../../shared/InteractiveButton/ui/InteractiveButton";
import { motion } from "motion/react";
import { BUTTON_APPEARENCE_OPTIONS, TEXT_APPEARENCE_OPTIONS } from "../../GreetingWindow/constants/constants";

const SkillEntity: FC<SkillData> = ({ title, icon, description, link }) => {
    return (
        <>
            <div className='flex gap-5'>
                <div className='flex flex-col gap-5'>
                    <motion.div
                        initial={TEXT_APPEARENCE_OPTIONS.initial}
                        animate={TEXT_APPEARENCE_OPTIONS.animate}
                        transition={TEXT_APPEARENCE_OPTIONS.transition}
                        className='font-bold'>
                        {title}
                    </motion.div>
                    <motion.div
                        initial={TEXT_APPEARENCE_OPTIONS.initial}
                        animate={TEXT_APPEARENCE_OPTIONS.animate}
                        transition={TEXT_APPEARENCE_OPTIONS.transition}>
                        {description}
                    </motion.div>
                    <motion.div
                        initial={BUTTON_APPEARENCE_OPTIONS.initial}
                        animate={BUTTON_APPEARENCE_OPTIONS.animate}
                        transition={BUTTON_APPEARENCE_OPTIONS.transition}>
                        <InteractiveButton text="Подробнее" onClick={() => window.open(link, '_blank')}/>
                    </motion.div>
                </div>
                <motion.div
                    initial={TEXT_APPEARENCE_OPTIONS.initial}
                    animate={TEXT_APPEARENCE_OPTIONS.animate}
                    transition={TEXT_APPEARENCE_OPTIONS.transition}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='mr-10'>
                    <img src={icon} className='w-50 aspect-square mt-5 rounded-md border-solid border-2 border-white p-3'/>
                </motion.div>
            </div>
        </>
    )
}

export default memo(SkillEntity);