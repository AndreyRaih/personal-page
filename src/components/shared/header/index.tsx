import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

const links = [
  {
    href: "#mindset",
    label: "Mindset",
  },
  {
    href: "#present",
    label: "Present",
  },
  {
    href: "#contact",
    label: "Contact",
  },
]

export default component$(() => {
  return (
    <header class={styles.header}>
        <div class={styles.greeting}>
          <h1>Andrew<span>, Web & Mobile</span></h1>
        </div>
        <ul>
          {links.map((link, i) => (<li key={i}><a href={link.href}>{link.label}</a></li>))}
        </ul>
    </header>
  );
});
