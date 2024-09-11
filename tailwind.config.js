import { CgEnter } from 'react-icons/cg'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#0070f3",
        secondary: '#FF8C00',
      }
    },
    container: {
      center: true,
      padding: {
        default: "20px",
        md: "40px",
      },
    }
  },
  plugins: [],
}

