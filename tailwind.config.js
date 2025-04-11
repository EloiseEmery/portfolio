/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Mono"', 'ui-sans-serif', 'system-ui'],
        figtree: ['"Figtree"', 'sans-serif'],
      },
      colors: {
        colorMain: '#0D1115',
        colorSecondary: '#001427',
        colorTertiary: '#4468FD',
        colorQuaternary: '#64FFF4',
        colorQuinary: '#E4FA25',
        colorWhite: '#FFFFFF',
        colorBlack: '#030303',
      },
      backgroundImage: {
        'gradient-main-secondary-main': 'linear-gradient(to bottom, #030303, #001427, #030303)',
        'gradient-main-secondary-light-mode': 'linear-gradient(to bottom, #4468F720, #F3F3F3, #4468F720)',
        'gradient-text': 'linear-gradient(to right, #4468FD, #64FFF4)',
      },
    },
  },
  plugins: [],
}