/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"var(--primary-color)",
        "paragraph-color":"var(--paragraph-color)"
      },
      fontFamily:{
        "jost":["Jost",'sans-serif'],
      }
    },
  },
  plugins: [],
}