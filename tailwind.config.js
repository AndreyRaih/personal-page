/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'spin-n-rotation': {
          '0%': { transform: 'translate(-50%,-50%) rotate(0);' },
          '100%': { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
        'circle-pulse': {
          '0%': { transform: 'translate(-50%, 50%) scale(1)'},
          '15%': { transform: 'translate(-50%, 50%) scale(.95)'},
          '30%': { transform: 'translate(-50%, 50%) scale(1)'},
          '100%': { transform: 'translate(-50%, 50%) scale(1)'}
        },
        'simple-circle': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '30%': { transform: 'rotate(108deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        },
        'levitate': {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-25px)' },
          '75%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'spin-slow': 'spin-n-rotation 60s linear infinite',
        'circle-pulse': 'circle-pulse 6s ease infinite',
        'simple-circle': 'simple-circle 12s infinite cubic-bezier(0.5, 0, 0.5, 1)',
        'levitate': 'levitate 15s infinite ease-in-out'
      }
    }
  },
  plugins: [require("tailwindcss-animation-delay")],
};
