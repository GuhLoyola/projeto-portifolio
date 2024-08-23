/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#0A0A0A",
        "black-russian": "#121212",
        "black-russian-66": "#121212a9",
        "cod-gray": "#282828",
        "mine-shaft": "#3f3f3f",
        "dove-gray": "#575757",
        "boulder": "#717171",
        "gray-light": "#8b8b8b",
        "blue-violet": "#8a2be2",
        "medium-purple": "#9a48e6",
        "amethyst": "#a960ea",
        "lavender": "#b777ee",
        "bright-lavender": "#c58ef1",
        "alice-blue": "#d1e4f4",
        'smoky-white': "#f5f5f5"
      },
      fontFamily: {
        'poppins': 'Poppins'
      }
    },
  },
  plugins: [],
}

