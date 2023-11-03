import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import Socials, { SocialIcon } from "../../socials";

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
      <h3>Contact me</h3>
      <Socials class={styles.socials} style="outline" icons={socials} />
      <h4>Made with 💜 ©2023</h4>
      <span>See ya!</span>
    </footer>
  );
});
