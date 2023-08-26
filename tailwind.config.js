/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#1D3557',
        light: '#F1FAEE',
        primary: '#457B9D',
        secondary: '#A8DADC',
        accent: '#E63946',
      },
    },
  },
  plugins: [],
}
