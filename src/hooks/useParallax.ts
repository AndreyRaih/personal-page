import { $, useOnWindow, useSignal } from "@builder.io/qwik"

export default function useParallax(ratio: number) {
    const translateY = useSignal(0)

    useOnWindow('scroll', $(() => {
        const { scrollY } = window as Window
        translateY.value = scrollY * ratio
    }))

    return translateY
}
