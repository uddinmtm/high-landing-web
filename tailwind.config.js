/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {    
    fontFamily: {
      NeueMachina: ["NeueMachina", "sans-serif"],
    },
    extend: {
      colors: {
        black: '#151515',
        grayen: '#F0F0F0',
      },
      listStyleType: {
        square: 'square'
      }
    }
  },
  plugins: [],
};
