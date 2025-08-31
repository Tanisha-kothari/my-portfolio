/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FFF8F6',
          100: '#FDEDED',
          200: '#F9E2E2'
        },
        cocoa: {
          700: '#6B4C46',
          900: '#39231F'
        },
        lavender: {
          200: '#EADFF6'
        },
        bow: '#FFD1E6',
        ribbon: '#CFE8FF'
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(54,33,25,0.06)',
        'cozy': '0 10px 30px rgba(60,42,40,0.07)'
      },
      borderRadius: {
        'xl2': '18px'
      }
    },
  },
  plugins: [],
}
