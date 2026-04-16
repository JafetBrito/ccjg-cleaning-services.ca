/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ccjg: {
          dark: '#0B1F3A',    // El azul marino profundo de las letras del logo.
          primary: '#0056B3', // El azul corporativo para fondos y elementos principales.
          cyan: '#00B4D8',    // El azul claro/brillante para botones que llamen a la acción.
          surface: '#F8FAFC'  // Un fondo casi blanco, muy limpio para la lectura.
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}