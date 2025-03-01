import { FC, memo, MouseEvent, useCallback, useState } from "react"
import InteractiveButton from "../../../shared/InteractiveButton/ui/InteractiveButton";
import StarBackground from "../../StarBackground/ui/StarBackground";
import FillingRectangle from "../../../shared/FillingRectangle/ui/FillingRectangle";
import { motion } from 'motion/react';
import { BUTTON_APPEARENCE_OPTIONS, TEXT_APPEARENCE_OPTIONS, TEXT_SHADOW_OPTIONS } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const GreetingWindow: FC = () => {
    const [roundingCoordinates, setRoundingCoordinates] = useState({x: 0, y: 0, clicked: false});
    const navigate = useNavigate()

    const onClickSeeMore = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setRoundingCoordinates({
            x: event.clientX,
            y: event.clientY,
            clicked: true
        })
    }, [event])

    return (
        <>
            <StarBackground>
                <div className='text-white flex items-center justify-center w-full h-screen absolute'>
                    <div className="text-center">
                        <motion.div
                            initial={TEXT_APPEARENCE_OPTIONS.initial}
                            animate={TEXT_APPEARENCE_OPTIONS.animate}
                            transition={TEXT_APPEARENCE_OPTIONS.transition}
                            className='font-semibold text-3xl mb-10'
                            style={{textShadow: TEXT_SHADOW_OPTIONS.textShadow}}>
                                Добро пожаловать на
                                <p>мою страницу</p>
                        </motion.div>
                        <motion.div
                            initial={TEXT_APPEARENCE_OPTIONS.initial}
                            animate={TEXT_APPEARENCE_OPTIONS.animate}
                            transition={TEXT_APPEARENCE_OPTIONS.transition}
                            className="text-xl"
                            style={{textShadow: TEXT_SHADOW_OPTIONS.textShadow}}>
                                Меня зовут <a>Александр</a>, я <a>Middle-Разработчик</a>,
                                <p>и эта страница создана в качестве сводки информации</p>
                                <p>обо мне</p>
                        </motion.div>
                        <motion.div
                            initial={BUTTON_APPEARENCE_OPTIONS.initial}
                            animate={BUTTON_APPEARENCE_OPTIONS.animate}
                            transition={BUTTON_APPEARENCE_OPTIONS.transition}
                            className="items-center mt-15 text-center">
                                <InteractiveButton text="Узнать больше" onClick={(e) => {onClickSeeMore(e)}}/>
                        </motion.div>
                        {
                            roundingCoordinates.clicked && <FillingRectangle x={roundingCoordinates.x} y={roundingCoordinates.y} color='bg-[#a0a0a0]' onContinue={() => navigate('/skills')}/>
                        }
                    </div>
                </div>
            </StarBackground>
        </>
    )
}

export default memo(GreetingWindow);