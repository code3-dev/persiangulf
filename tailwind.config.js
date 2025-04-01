/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        vazir: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-from-left': 'slideInFromLeft 0.5s ease-out forwards',
        'slide-from-right': 'slideInFromRight 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

