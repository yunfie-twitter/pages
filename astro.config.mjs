import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yunfie-twitter.github.io",
  base: "pages",
  integrations: [sitemap()],
});
