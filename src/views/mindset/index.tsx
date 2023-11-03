import { component$ } from "@builder.io/qwik";
import styles from "./mindset.module.css";

import avatarImg from "~/media/memoji-avatar.svg";
import backgroundImg from "~/media/mesh-bg-light-blue.png";

import Card from "~/components/shared/card";
import Socials, { SocialIcon } from "~/components/socials";


export default component$(() => {
    const socials: SocialIcon[] = [
        {
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/andrewraikh/'
        },
        {
            type: "github",
            url: "https://github.com/AndreyRaih"
        }
    ]
    
    return (
        <Card highlight="rtl" id="mindset" class={styles.card}>
            <img src={backgroundImg} class={styles.background} width={1100} height={1400} />
            <div class={styles.content}>
                <section class={styles.headline}>
                    <div class={styles.greeting}>
                        <div class={styles.avatar}>
                            <img height="46" width="46" src={avatarImg} alt="Andrew Raikh" />
                        </div>
                        <div class={styles.title}>
                            <p>Hi, I’m Andrew.</p>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                    <Socials style="filled" icons={socials} />
                </section>
                
                <section class={styles.about}>
                    <h1>Write code that makes world better&nbsp;💡</h1>
                    <p>Prioritize intuitive user experiences, maintain clean and efficient code, and deeply appreciate the essence of well-structured systems.</p>
                </section>
            </div>
        </Card>
    );
});
