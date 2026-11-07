import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fbf8f1",
          100: "#f5eedc",
          200: "#eadab8",
          300: "#dec08d",
          400: "#d4af37",
          500: "#c59b27",
          600: "#a87d1e",
          700: "#865f1b",
          800: "#704d1d",
          900: "#5f401c",
        },
        obsidian: {
          900: "#0a0a0c",
          800: "#111115",
          700: "#18181e",
          600: "#22222a",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
