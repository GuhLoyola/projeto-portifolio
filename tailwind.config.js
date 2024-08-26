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
        "blue-violet": "#8a2be2",
        'smoky-white': "#f5f5f5"
      },
      fontFamily: {
        'poppins': 'Poppins'
      },
      spacing: {
        '4.5': '1.125rem'
      }
    },
  },
  plugins: [],
}

