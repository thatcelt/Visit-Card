export const TEXT_APPEARENCE_OPTIONS = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: 'easeInOut', scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 } }
}

export const BUTTON_APPEARENCE_OPTIONS = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, delay: 0.3, ease: 'easeInOut', scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 } }
}

export const TEXT_SHADOW_OPTIONS = { textShadow: '0px 4px 10px rgba(255, 255, 255, 0.25)' }