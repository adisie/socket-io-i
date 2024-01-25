/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'anti-clock': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'anti-spin': 'anti-clock 1s linear infinite',
      }
    },
  },
  plugins: [],
}

