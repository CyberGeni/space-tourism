/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkBlue: "#0B0D17",
      lavender: "#D0D6F9",
    },
    extend: {
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
}