// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilitar el modo oscuro mediante clase
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}', // Asegúrate de incluir todos los directorios y extensiones relevantes
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Azul violeta para el modo claro
          dark: '#818CF8',    // Azul claro para el modo oscuro
        },
        background: {
          DEFAULT: '#FFFFFF', // Blanco para el fondo claro
          dark: '#1F2937',    // Gris oscuro para el fondo oscuro
        },
        text: {
          DEFAULT: '#333333', // Gris oscuro para el texto claro
          dark: '#DDDDDD',    // Gris claro para el texto oscuro
        },
        'background-header': {
          DEFAULT: '#FFFFFF', // Fondo del header en modo claro
          dark: '#1F2937',    // Fondo del header en modo oscuro
        },
        'background-footer': {
          DEFAULT: '#F3F4F6', // Fondo del footer en modo claro
          dark: '#374151',    // Fondo del footer en modo oscuro
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};