const colors = require("tailwindcss/colors")
const {fontFamily,  spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    extend: {
      colors:{
        amber:colors.amber,
      },
      spacing:{
        50:'12.5rem'
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
