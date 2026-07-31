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
        jua: ['"Jua"', "sans-serif"],
      },
      colors: {
        pastelPink: "#ffb3ba",
        pastelMint: "#baffc9",
        pastelBlue: "#bae1ff",
        pastelLemon: "#ffffba",
        pastelPeach: "#ffdfba"
      }
    },
  },
  plugins: [],
};
export default config;
