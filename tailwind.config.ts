import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"
import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1340px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#f5faf3",
          100: "#e8f3e5",
          200: "#d1e7cb",
          300: "#acd3a2",
          400: "#80b672",
          500: "#5d994e",
          600: "#497d3c",
          700: "#3d6633",
          800: "#32502b",
          900: "#2b4225",
          950: "#132310",
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["simple-icons"]),
    }),
  ],
} satisfies Config
