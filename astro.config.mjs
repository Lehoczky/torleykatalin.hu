import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "http://www.torleykatalin.hu/",
  // TODO: Remove when building for the live site
  base: "/torleykatalin.hu",
  integrations: [tailwind(), sitemap()],
})
