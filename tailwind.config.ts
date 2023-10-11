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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ptSans: ["PT Sans", "sans-serif"],
      },
    },
    colors: {
      "dark-blue": "#011E6E",
      white: "#ffffff",
      transparent: "transparent",
      black: "#050505",
      lime: "#DFFFF3",
      "custom-white": "#FCFDFF",
      "pale-blue": "#F1F5FF",
      "custom-white-two": "#F2FFFA",
      "custom-white-three": "#F0F4FF",
    },
  },
  plugins: [],
};
export default config;
