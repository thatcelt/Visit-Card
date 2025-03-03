import { FC, memo, MouseEvent, useCallback, useState } from "react";
import StarBackground from "../widgets/StarBackground/ui/StarBackground";
import BackButton from "../shared/BackButton/ui/BackButton";
import PriceEntity from "../widgets/PriceEntity/ui/PriceEntity";
import { PRICINGS } from "../widgets/PriceEntity/constants/constants";
import InteractiveButton from "../shared/InteractiveButton/ui/InteractiveButton";
import { useNavigate } from "react-router-dom";
import FillingRectangle from "../shared/FillingRectangle/ui/FillingRectangle";
import { motion } from "motion/react";
import { BUTTON_APPEARENCE_OPTIONS, TEXT_APPEARENCE_OPTIONS } from "../widgets/GreetingWindow/constants/constants";

const PricingPage: FC = () => {
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
        <StarBackground>
            <div className='fixed z-10 left-5 top-5'>
                <BackButton navigation="/skills"/>
            </div>
            <div className='flex content-center justify-center items-center gap-50 w-full h-screen absolute text-white'>
                <div className='flex flex-col'>
                    <motion.div
                        initial={TEXT_APPEARENCE_OPTIONS.initial}
                        animate={TEXT_APPEARENCE_OPTIONS.animate}
                        transition={TEXT_APPEARENCE_OPTIONS.transition}
                        className='text-center font-bold text-xl mb-5'>
                        Прайс-Лист
                    </motion.div>
                    <div className='flex gap-5'>
                        <div className='grid grid-cols-2 gap-10'>
                            {PRICINGS.map((pricing, index) => 
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    >
                                    <PriceEntity key={index} {...pricing}/>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <motion.div
                        initial={BUTTON_APPEARENCE_OPTIONS.initial}
                        animate={BUTTON_APPEARENCE_OPTIONS.animate}
                        transition={BUTTON_APPEARENCE_OPTIONS.transition}
                        className='mt-5 flex justify-center'>
                        <InteractiveButton text='Вернуться' onClick={(e) => {onClickSeeMore(e)}}/>
                    </motion.div>
                    {
                        roundingCoordinates.clicked && <FillingRectangle x={roundingCoordinates.x} y={roundingCoordinates.y} color='bg-black' onContinue={() => navigate('/')}/>
                    }
                </div>
            </div>
        </StarBackground>
    )
}

export default memo(PricingPage);