import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

const buildingForGitHub = !!process.env.GH_PAGE

const gitHubConfig = defineConfig({
  site: "https://lehoczky.github.io/torleykatalin.hu/",
  base: "/torleykatalin.hu",
})

const prodConfig = defineConfig({
  site: "https://www.torleykatalin.hu/",
})

// https://astro.build/config
export default defineConfig({
  ...(buildingForGitHub ? gitHubConfig : prodConfig),
  integrations: [tailwind(), sitemap()],
})
