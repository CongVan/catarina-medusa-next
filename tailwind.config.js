/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      sub: ["var(--font-sub)", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: "#ffffff",
      body: "#171717",
      transparent: "transparent",
      brand: {
        50: "#fdf3f3",
        100: "#fbdfe1",
        200: "#f9d2d7",
        300: "#f3aeb6",
        400: "#ec8090",
        500: "#e0536b",
        600: "#cb3354",
        700: "#ab2546",
        800: "#8f2240",
        900: "#7b203c",
        950: "#440d1c",
        DEFAULT: "#e0536b",
      },
      neutral: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#313131",
        950: "#171717",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
