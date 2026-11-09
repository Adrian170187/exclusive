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
        hyatt: {
          white: "#FFFFFF",
          ivory: "#FAF8F5",
          cream: "#F5F2EB",
          sand: "#EAE4D7",
          border: "#E0D8CA",
          taupe: "#9C7A54",
          bronze: "#8A6A46",
          burgundy: "#6A1B29",
          wine: "#822032",
          charcoal: "#1C1C1C",
          ink: "#282828",
          muted: "#5C5852",
        },
        gold: {
          50: "#fbf8f1",
          100: "#f5eedc",
          200: "#eadab8",
          300: "#dec08d",
          400: "#c59b6d",
          500: "#9c7a54",
          600: "#865f1b",
          700: "#704d1d",
          800: "#5f401c",
          900: "#4a3115",
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
