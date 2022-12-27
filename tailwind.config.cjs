/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100':'44rem',
        '128': '50rem',
      },
      fontFamily: {
        'kanit': 'Kanit',
        'nunito-sans': 'Nunito',
      },
      backgroundImage: {
        'hero': "url(/images/bg-hero.jpg)",
        'rdcode': 'url(/images/RDCode.jpg)',
        'empty': 'url(/images/empty.jpg)',
      }
    },
  },
  plugins: [],
}
