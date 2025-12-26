/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark grey theme with red accents
        primary: {
          DEFAULT: '#ff4500', // red-orange (matching car dashboard)
          light: '#ff6b35',   // lighter red
          dark: '#dc2626',    // darker red
        },
        secondary: {
          DEFAULT: '#ff4500', // same as primary for consistency
          light: '#ff6b35',
          dark: '#dc2626',
        },
        background: {
          DEFAULT: '#1a1a1a', // dark grey
          alt: '#2a2a2a',     // slightly lighter dark grey
        },
        text: {
          DEFAULT: '#f5f5f5', // light text for dark background
          secondary: '#a3a3a3', // grey text
          muted: '#737373',   // darker grey text
        },
      },
    },
  },
  plugins: [],
}

