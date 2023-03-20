/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'oncured': {
          50: '#fff1f3',
          100: '#ffe0e4',
          200: '#ffc7cd',
          300: '#ffa0ab',
          400: '#ff697a',
          500: '#f93a50',
          600: '#e71f36',
          700: '#c21327',
          800: '#a01424',
          900: '#851724',
        },
      }
    },
  },
  plugins: [],
}
