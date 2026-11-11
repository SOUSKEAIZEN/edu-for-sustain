import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#172D49",
          deep: "#0F1E31",
          light: "#263B52",
          muted: "#3A516B",
        },
        cream: {
          DEFAULT: "#F4EBDD",
          light: "#FAF5EE",
          dark: "#E6DED0",
        },
        coral: {
          DEFAULT: "#F47C68",
          hover: "#E46A55",
          light: "#FCD8D2",
          deep: "#C85542",
        },
        sage: {
          light: "#DDE8DE",
          DEFAULT: "#5B7866",
          dark: "#445C4D",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(23, 45, 73, 0.08)",
        card: "0 10px 30px -10px rgba(23, 45, 73, 0.06)",
        float: "0 25px 50px -12px rgba(23, 45, 73, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
