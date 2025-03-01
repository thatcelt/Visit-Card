import { MouseEvent } from "react"

export interface InteractiveButtonProps {
    text: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}