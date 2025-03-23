/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Mono"', 'ui-sans-serif', 'system-ui'],
        proxima: ['"Proxima Nova"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}