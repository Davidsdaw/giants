/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        text: '#6C757D', // Gris de los textos
        hover: '#000000', // Negro al pasar el mouse
      },
      fontFamily: {
        monument: ["pp-monument-extended", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
}

