module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    scrollbar: ['dark']
  },
  plugins: [ require("@tailwindcss/forms")({
    strategy: 'class',
  }),
  require('tailwind-scrollbar'),
  require('tailwind-scrollbar-hide')
],
}

