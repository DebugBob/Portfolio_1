/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: '#ec3a15',
      secondary: '#df5847',
      accent1: '#4b70e9',
      accent2: '#756294',
      accent3: '#adb8c6',
      info: '#9700fe',
      success: '#5fab00',
      warning: '#ffc26f',
      danger: '#f50066',
      light: '#e8e7e7',
      dark: '#3c4332',
    },
  },
  plugins: [],
}

