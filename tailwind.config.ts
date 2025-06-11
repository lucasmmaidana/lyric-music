import type {Config} from "tailwindcss"

const config: Config = {
  content: ["./src/app/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: "#007264",
        black: {
          light: "#181818",
          DEFAULT: "#000000",
          dark: "#0F0F0F",
        },
        white: {
          light: "#CBCBCB",
          DEFAULT: "#FFFFFF",
          dark: "#9C9C9C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
}

export default config
