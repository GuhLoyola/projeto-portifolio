/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#1e1724",
        "dark-gray": "#121212",
        "almost-black": "#1C1C1C",
        "smoky-white": "#F5F5F5"
      }
    },
  },
  plugins: [],
}

