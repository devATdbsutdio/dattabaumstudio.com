import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react(), tailwind()],
  security: {
    checkOrigin: false
  },
  adapter: vercel({
    imageService: false,
    // devImageService: "sharp",
    // sizes: [320, 640, 750, 828, 1080, 1200],
    // minimumCacheTTL: 60,
  }),
});
