import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Mindset from "~/views/mindset";
import Greeting from "~/views/greeting";
import Skills from "~/views/skills";
import Workplace from "~/views/workplace";

import Grid from "~/layouts/grid";

export const head: DocumentHead = {
  title: "Andrew Raikh - Software Engineer | Web & Mobile",
  meta: [
    {
      name: "description",
      content: "Andrew Raikh - Software Engineer | Web & Mobile",
    },
  ],
};

export default component$(() => {
  return (
    <Grid>
      <Mindset />
      <Greeting />
      <Workplace />
      <Skills />
    </Grid>
  );
});

