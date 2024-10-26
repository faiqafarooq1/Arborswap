/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        'greens':'#00783F40',
        'textc':'#00783F',
        'cardb':'#D9D9D9',
        'btnc':'#CEC75380',
      }
    },
  },
  plugins: [],
}

