import { component$ } from "@builder.io/qwik";
import styles from './greeting.module.css'

import MemojiImg from '~/media/memoji-img.png?jsx'
import Card from "~/components/shared/card";
import useParallax from "~/hooks/useParallax";

export default component$(() => {
    const circles = Array.from({length: 5}, (_, i) => i + 1);
    const translateY = useParallax(0.1);

    return (
        <Card class={styles.card}>
            <div class={styles['parallax-container']} style={{ transform: `translateY(${translateY.value}px)` }}>
                <MemojiImg sizes="320px" class={styles.image} alt="Greeting section memoji image" />
                <div class={styles.circles}>
                    {circles.map((i) => <div class={[styles.circle]} key={i}></div>)}
                </div>
            </div>
        </Card>
    )
});
