import { component$ } from "@builder.io/qwik";
import styles from './skills.module.css'
import backgroundImage from "~/media/mesh-bg-blue.png";

import Card from "~/components/shared/card";
import Frameworks from "~/components/frameworks";
import StarsAnimation from "~/components/stars-animation";

export default component$(() => {
    return (
        <Card class={styles.card} highlight="ltr">
            <img src={backgroundImage} class={styles.background} width={1100} height={1200} />
            <StarsAnimation class={styles.stars} width={600} height={600} numStars={200} fps={30} />
            <section class={styles.headline}>
                <p>Continually on a path of self-improvement</p>
                <h1>
                    Now, I'm exploring Qwik.
                </h1>
                <span>Experienced in <b>Vue.js</b>, <b>React.js</b>, backend and cross-platform development with <b>Flutter</b> and <b>React Native</b>.</span>
            </section>
            <Frameworks />
        </Card>
    )
})
