import { FC, memo } from "react"
import InteractiveButton from "../../../shared/InteractiveButton/ui/InteractiveButton";

const GreetingWindow: FC = () => {
    return (
        <>
            <div className='text-white flex items-center justify-between mt-15'>
                <div>
                    <div className='font-semibold text-5xl mb-10' style={{textShadow: '0px 4px 10px rgba(255, 255, 255, 0.25)'}}>
                        Добро пожаловать на
                        <p>мою страницу</p>
                    </div>
                    <div className="text-2xl" style={{textShadow: '0px 4px 10px rgba(255, 255, 255, 0.25)'}}>
                        Меня зовут <a>Александр</a>, я <a>Middle-Разработчик</a>,
                        <p>и эта страница создана в качестве сводки информации</p>
                        <p>обо мне</p>
                    </div>
                    <div className="flex items-center mt-15">
                        <InteractiveButton text="Узнать больше" onClick={() => {}}/>
                    </div>
                </div>
                <img src="src/assets/github-icon.png" className="w-125 mr-10"/>
            </div>
        </>
    )
}

export default memo(GreetingWindow);