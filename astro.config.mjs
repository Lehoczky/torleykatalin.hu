import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "http://www.torleykatalin.hu/",
  integrations: [tailwind(), sitemap()],
})
