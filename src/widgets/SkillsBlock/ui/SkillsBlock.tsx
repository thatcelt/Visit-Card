import { FC, memo, useEffect, useState } from "react";
import { SkillData } from "../../SkillEntity/model/types";
import { SKILLS } from "../constants/constants";
import SkillEntity from "../../SkillEntity/ui/SkillEntity";
import { motion } from "motion/react";

const SkillsBlock: FC = () => {
    const [currentSkill, setCurrentSkill] = useState<{ skill: SkillData, index: number }>({skill: SKILLS[0], index: 0})
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          const nextIndex = (currentSkill.index + 1) % SKILLS.length;
          setCurrentSkill({ skill: SKILLS[(currentSkill.index + 1) % SKILLS.length], index: nextIndex });
        }, 5000);

        return () => clearInterval(intervalId);
      }, [currentSkill.index]);

    return (
        <>
            <div className='bg-[#0D0D0D] rounded-lg w-200 h-70'>
                <div className='flex ml-5 gap-5'>
                    <div className='flex flex-col gap-1 mt-5'>
                        {SKILLS.map((_, index) =>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`w-1 h-5 rounded-full ${index == currentSkill.index ? 'bg-[#ffffff]' : 'bg-[#282828]'}`}>
                            </motion.div>
                        )}
                    </div>
                    <div className='mt-5'>
                        <SkillEntity {...currentSkill.skill}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(SkillsBlock);