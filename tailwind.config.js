/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        greyText: "#909090",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};

