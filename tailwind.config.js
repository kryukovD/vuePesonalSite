/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,vue,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      "sfiu": "sfui",
      
    },
    extend: {
      backgroundImage: {
        'circle': "url('src/assets/images/rectangle.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
