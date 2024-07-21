/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: [ "monospace"],
      }
    },
  },
  plugins: [],
}

