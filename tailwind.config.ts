import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chalk: ['"Nanum Pen Script"', "cursive"],
        note: ['"Gowun Dodum"', "sans-serif"],
      },
      colors: {
        chalkboard: "#134e4a",
        chalk: "#fdfbf7",
        chalkYellow: "#fef08a",
      }
    },
  },
  plugins: [],
};
export default config;
