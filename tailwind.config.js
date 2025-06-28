/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            400: '#00d4aa',
            500: '#00c596',
            600: '#00b085',
          },
          accent: {
            400: '#ff6b9d',
            500: '#e55a87',
            600: '#cc4975',
          },
          dark: {
            100: '#2a2a2a',
            200: '#1f1f1f',
            300: '#161616',
            400: '#0d0d0d',
          }
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        }
      },
    },
    plugins: [],
  }