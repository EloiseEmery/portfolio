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
        colorSecondary: '#001430',
        colorTertiary: '#4468FD',
        colorQuaternary: '#64FFF4',
        colorQuinary: '#E4FA25',
        colorQuinaryLight: '#b3c133',
        colorWhite: '#FFFFFF',
        colorBlack: '#030303',
      },
      backgroundImage: {
        'gradient-main-secondary-main': 'linear-gradient(to bottom, #010106, #001430, #010106)',
        'gradient-main-secondary-light-mode': 'linear-gradient(to bottom, #4468FD20, #FFFFFF, #4468FD20)',
        'gradient-text': 'linear-gradient(to right, #4468FD, #64FFF4)',
        'noise-texture': 'url("/src/assets/png/noise_texture.png")',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        }
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}