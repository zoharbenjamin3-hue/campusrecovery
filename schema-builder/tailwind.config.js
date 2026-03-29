/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 50: '#e8f4fa', 100: '#d1e9f5', 500: '#1A3A4A', 600: '#0f2530', 700: '#0a1a1f' },
        brand: { DEFAULT: '#E8833A', dark: '#d06e28', light: '#fff0e6' }
      }
    }
  },
  plugins: []
}
