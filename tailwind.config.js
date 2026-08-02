/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ember: '#d71920',
        coal: '#070707',
        graphite: '#151515'
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(215, 25, 32, 0.2)'
      }
    },
  },
  plugins: [],
}
