import { component$ } from "@builder.io/qwik";
import styles from './workplace.module.css'

import simpleAppIcon from '~/media/simple-icon.svg'

import Card from "~/components/shared/card";

export default component$(() => {
    return (
        <Card id="present" class={styles.card}>
            <section class={styles.headline}>
                <h1>
                    Currently&nbsp;I’m working at&nbsp;<a href="https://simple.life/" target="_blank">Simple</a>
                </h1>
                <p>Crafting applications aimed at enhancing individual health.</p>
            </section>
            <div class={styles['icon-wrapper']}>
                <img src={simpleAppIcon} width={320} height={320}  alt="Simple App Icon" class={styles.icon} />
            </div>
        </Card>
    );
});
