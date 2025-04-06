/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        colorBlack: '#000000',
      },
      backgroundImage: {
        'gradient-main-secondary-main': 'linear-gradient(to bottom, #0D1115, #001427, #0D1115)',
      },
    },
  },
  plugins: [],
}