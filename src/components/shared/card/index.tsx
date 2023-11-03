import { Slot, component$ } from "@builder.io/qwik";
import styles from "./card.module.css";

export type CardProps = {
    highlight?: 'ltr' | 'rtl',
    class?: string
    id?: string
}

export default component$((props: CardProps) => {
    function generateHighlightedStypes(highlight: CardProps['highlight']) {
        switch (highlight) {
            case 'rtl':
                return styles['highlight-bl-tr'];
            case 'ltr':
                return styles['highlight-tl-br'];
            default:
                return;
        }
    }
    return (
        <div id={props.id} class={[styles.card, props.class, generateHighlightedStypes(props.highlight)]}>
            <Slot></Slot>
        </div>
    );
});
