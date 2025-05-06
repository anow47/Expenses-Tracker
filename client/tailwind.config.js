/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SoftRed: 'hsl(10, 79%, 65%)',
        Cyan:'hsl(186, 34%, 60%)',
        Darkbrown: 'hsl(25, 47%, 15%)',
        MediumBrown: 'hsl(28, 10%, 53%)',
        Cream: 'hsl(27, 66%, 92%)',
        VeryPaleOrange: 'hsl(33, 100%, 98%)',
      },
      fontFamily: {
        sans: ['DM', 'sans-serif'],
      },
      gridTemplateColumns: {
        // '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}