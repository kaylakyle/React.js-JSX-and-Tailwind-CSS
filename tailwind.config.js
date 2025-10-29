/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", //  enable manual dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinky: {
          light: "#fbcfe8",
          DEFAULT: "#ec4899",
          dark: "#be185d",
        },
      },
    },
  },
  plugins: [],
};
