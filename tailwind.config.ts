import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF8",
        espresso: "#4A403A",
        rose: { 100: "#FFF0F5", 200: "#FADADD", 400: "#F4E1E6" },
        pistachio: { 100: "#F1F8F1", 400: "#D6E4D6" },
        lemon: { 100: "#FFFEF0", 400: "#FDFD96" },
        lavender: { 100: "#F8F7FC", 400: "#DCD6F7" }
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
export default config;