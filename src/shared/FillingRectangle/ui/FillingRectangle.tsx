import { FC, memo, useEffect } from "react"
import { FillingRectangleProps } from "../model/types"

const FillingRectangle: FC<FillingRectangleProps> = ({ x, y, color, onContinue }) => {
    useEffect(() => {
        setTimeout(() => {onContinue?.()}, 500)
    }, [x, y, color, onContinue])

    return (
        <>
        <div className={`fixed z-5 w-10 h-10 rounded-full animate-expand ${color}`} style={{left: x, top: y}}/>
        </>
    )
}

export default memo(FillingRectangle);