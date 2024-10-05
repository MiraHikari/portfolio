// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon'

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroIcon({
    include: {
      mdi: ["*"], // (Default) Loads entire Material Design Icon set,
      'ri': ['*'],
      'simple-icons': ['*'],
    },
  })],
  // output: "hybrid",
  // adapter: cloudflare({ platformProxy: { enabled: true } })
});
