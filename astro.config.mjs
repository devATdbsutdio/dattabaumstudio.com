import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [react(), tailwind()],
  adapter: vercel({
    functionPerRoute: false,
    imageService: true,
    devImageService: "sharp",
    sizes: [320, 640, 750, 828, 1080, 1200],
    minimumCacheTTL: 2_629_746,
  }),
});
