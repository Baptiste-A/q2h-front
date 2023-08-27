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
        primary: '#563d7c',
        light: '#FAFAFA',
        warning: '#FFC111'
      },
    },
  },
  plugins: [],
}

