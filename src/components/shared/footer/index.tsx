import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import Socials from "~/components/socials";
import type { SocialIcon } from "~/components/socials";

export default component$(() => {
  const socials: SocialIcon[] = [
    {
      type: "telegram",
      url: "https://t.me/prekraty_pole",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/prekraty_pole/"
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/andrewraikh/'
    }
  ]

  return (
    <footer id="contact" class={styles.footer}>
      <h1>Contact me</h1>
      <Socials class={styles.socials} style="outline" icons={socials} />
      <h2>Made with 💜 ©2023</h2>
      <span>See ya!</span>
    </footer>
  );
});
