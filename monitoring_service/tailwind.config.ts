/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // Black background
        textPrimary: '#ffffff', // White text
        cardBackground: '#1f1f1f', // Dark gray for cards
        cardText: '#cfcfcf', // Light gray for card text
      },
    },
  },
  plugins: [],
}