/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        linkanim: 'all 0.3s ease-in-out',
      },
      fontFamily: {
        'helvetica-cursive': ['Helvetica', 'cursive'],
      },
      transitionProperty: {
        all: 'all',
      },
      zIndex: {
        2: '2',
      },
    },
  },
  plugins: [],
}
