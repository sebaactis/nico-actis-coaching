/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#E6FF00',
          yellowHover: '#D4EB00',
          yellowDark: '#B8CC00',
          yellowGlow: 'rgba(230, 255, 0, 0.3)',
          black: '#070708',
          dark: '#0B0B0E',
          card: '#121216',
          cardHover: '#18181F',
          border: '#23232C',
          borderLight: '#353544',
          muted: '#9CA3AF'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Impact', 'sans-serif']
      },
      boxShadow: {
        'neon': '0 0 25px rgba(230, 255, 0, 0.35)',
        'neon-sm': '0 0 12px rgba(230, 255, 0, 0.25)',
        'neon-strong': '0 0 45px rgba(230, 255, 0, 0.6)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px -5px rgba(230, 255, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
