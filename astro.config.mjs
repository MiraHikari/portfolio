// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon'

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroIcon({
    include: {
      mdi: ["*"],
      'ri': ['*'],
      'simple-icons': ['*'],
    },
  }), playformCompress()],
});
