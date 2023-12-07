/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      veryDarkBlue: 'hsl(217, 54%, 11%)',
      darkBlue: 'hsl(216, 50%, 16%)',
      cyan: 'hsl(178, 100%, 50%)',
      white: 'hsl(0, 0%, 100%)',
      darkBlueLight: 'hsl(215, 51%, 70%)',
      darkBlueLine: 'hsl(215, 32%, 27%)',
    },
    fontFamily: {
      sans: ['Outfit','sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}

