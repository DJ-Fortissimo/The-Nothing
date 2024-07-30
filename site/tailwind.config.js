/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/app/home/home.component.html", "src/app/nothing/nothing.component.html", "src/app/app.component.html"],
  theme: {
    extend: {},
     container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro"],
  },
}

