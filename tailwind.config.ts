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
        xl: "1152px",
      },
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#242424",
      white: "#FFFFFF",
      primary: {
        light: "#7FB65F",
        hover: "#5b994e",
        DEFAULT: "#3D6734",
      },
      secondary: {
        DEFAULT: "#F5F5F5",
        dark: "#665F5F",
      },
    },
    extend: {
      rotate: {
        "hero-text": "-5deg",
      },
    },
  },
} satisfies Config
