import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikPartytown } from "./components/partytown/partytown";
import { RouterHead } from "./router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <QwikPartytown forward={['dataLayer.push']} />
        <script defer type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-YRWED3ME0V"></script>
        <script defer type="text/partytown" src="/analytic/gtag.js"></script>
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
