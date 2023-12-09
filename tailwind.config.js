/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl': 'inset 0px 4px 0px #00000040'
      },
      backgroundColor: {
        backColorOne: '#5E5E5EB5',
        backColorTwo : '#5E5E5E82',
        backColorThree: 'transparent linear-gradient(180deg, #000000 0%, #000E09 100%)',
        backColorFour : 'red ',

      },
      opacity: 0.4,
      filter: 'blur(2px)'

    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
