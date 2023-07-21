/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#191919',
        foreground: '#2C2C2C',
        white: '#F2F2F2',
        gray: {
          100: '#7C7F82',
        },
      },
    },
  },
  plugins: [],
};
