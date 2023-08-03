
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'red': '#FF0207',
        'gray': 'rgba(255, 255, 255, 0.80)',
        'border-colour' : 'rgba(255, 255, 255, 0.20)',
        'darkBrown' : 'rgba(187, 0, 4, 0.12)',
      },
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Rubik': ['Rubik Mono One', 'sans-serif']
    },
  },
  plugins: [],
};
