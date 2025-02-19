import { FC } from "react";
import NavigationBar from "../widgets/NavigationBar/ui/NavigationBar";
import GreetingWindow from "../widgets/GreetingWindow/ui/GreetingWindow";

const MainPage: FC = () => {
    return (
        <>
        <div className='mx-25 mt-5'>
            <NavigationBar/>
            <GreetingWindow/>
        </div>
        </>
    )
}

export default MainPage;