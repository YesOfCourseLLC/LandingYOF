/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-blue': '#00effc',
        'secundary-blue': '#00c7d1',
        'brand-yellow': '#f9e715',
        'dark-black': '#0A0A0A',
        'dark-brand': '#1b393a'
      },
    },
  },
  plugins: [],
}
