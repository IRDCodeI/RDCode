/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': 'Kanit',
        'nunito-sans': 'Nunito',
      },
      backgroundImage: {
        'hero': "url(/images/background.svg)"
      }
    },
  },
  plugins: [],
}
