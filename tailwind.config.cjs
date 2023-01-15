/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/ava.jpg')",
      },
      colors: {
        'primary-bg': '#191919',
        'placeholder-color': '#BABABA',
        'gray-01': '#666666',
        'border-01': '#403E3E',
      },
      borderRadius: {
        custom01: '80px',
      },
    },
  },
  plugins: [],
};
