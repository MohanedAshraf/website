const colors = require("tailwindcss/colors")
const {fontFamily,  spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs':'360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    extend: {
      colors:{
        amber:colors.amber,
        spotify: "#1ED760",
      },
      spacing:{
        50:'12.5rem'
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
       },
       inset:{
         '17':'68px',
         '26':'104px'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
