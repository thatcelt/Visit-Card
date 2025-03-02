import { FC, memo, MouseEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FillingRectangle from "../../FillingRectangle/ui/FillingRectangle";

const BackButton: FC<{ navigation: string }> = ({ navigation }) => {
    const [roundingCoordinates, setRoundingCoordinates] = useState({x: 0, y: 0, clicked: false});
    const navigate = useNavigate()

    const onClickBackButton = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setRoundingCoordinates({
            x: event.clientX,
            y: event.clientY,
            clicked: true
        })
    }, [event])

    return (
        <>
            <button
                className="transition-transform ease-in-out duration-300 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-125"
                onClick={(e) => {onClickBackButton(e)}}
            >
                <img src="src/assets/left-arrow.png" className="w-4 mr-1" />
            </button>
            {
                roundingCoordinates.clicked && <FillingRectangle x={roundingCoordinates.x} y={roundingCoordinates.y} color='bg-black' onContinue={() => navigate(navigation)}/>
            }
        </>
    );
};

export default memo(BackButton);