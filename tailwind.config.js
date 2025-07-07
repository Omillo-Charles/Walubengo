/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E3',
          100: '#FFF3BF',
          200: '#FFE066',
          400: '#FFD700',
          600: '#B8860B',
          DEFAULT: '#FFD700',
          dark: '#B8860B',
          light: '#FFE066',
        },
      },
    },
  },
  plugins: [],
};
