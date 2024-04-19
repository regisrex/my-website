
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': '#000',
        'ble': '#0F172A',
        'bluish': {
          '100': '#E2E8F0',
          '200': '#8D9BB0'
        }
      },
      fontFamily: {
        'inter': 'Inter, system-ui'
      },
      screens: {
        msm: '0px'
      }
    },
  },
  plugins: [],
}

