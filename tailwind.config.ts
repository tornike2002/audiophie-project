import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobileHeader: "url('/assets/home/mobile/image-header.jpg')",
      },
      backgroundColor: {
        darkBlack: "#191919",
        customYellow: "#D87D4A",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        customYellow: "#D87D4A",
      },
    },
  },
  plugins: [],
};
export default config;
