/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'spin 9s linear infinite',
      }
    },
  },
  plugins: [],
}
