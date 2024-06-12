import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}", "./ui/**/*.{ts,tsx,mdx}"],
  theme: {
    colors: {
      brand: colors.purple,
      secondary: colors.zinc,
      green: colors.green,
      orange: colors.orange,
      red: colors.red,
      black: "#000000",
      white: "#FFFFFF",
      current: "currentColor",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    fontFamily: {
      mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
