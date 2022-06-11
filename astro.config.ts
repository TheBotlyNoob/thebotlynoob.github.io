// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import { defineConfig } from "astro/config";

export default defineConfig({
  server: ({ command }) => ({
    port: command === "dev" ? parseInt(process.env.PORT) || 3000 : 80,
    host: true
  }),
  site: "https://jj.is-a.dev/"
});
