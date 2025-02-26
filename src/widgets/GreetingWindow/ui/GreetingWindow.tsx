import { FC, memo } from "react"
import InteractiveButton from "../../../shared/InteractiveButton/ui/InteractiveButton";
import StarBackground from "../../StarBackground/ui/StarBackground";

const GreetingWindow: FC = () => {
    return (
        <>
            <StarBackground>
                <div className='text-white items-center mt-50'>
                    <div className="text-center">
                        <div className='font-semibold text-3xl mb-10' style={{textShadow: '0px 4px 10px rgba(255, 255, 255, 0.25)'}}>
                            Добро пожаловать на
                            <p>мою страницу</p>
                        </div>
                        <div className="text-xl" style={{textShadow: '0px 4px 10px rgba(255, 255, 255, 0.25)'}}>
                            Меня зовут <a>Александр</a>, я <a>Middle-Разработчик</a>,
                            <p>и эта страница создана в качестве сводки информации</p>
                            <p>обо мне</p>
                        </div>
                        <div className="items-center mt-15 text-center">
                            <InteractiveButton text="Узнать больше" onClick={() => {}}/>
                        </div>
                    </div>
                </div>
            </StarBackground>
        </>
    )
}

export default memo(GreetingWindow);