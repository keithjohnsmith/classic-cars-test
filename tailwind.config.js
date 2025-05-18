/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if your file structure is different
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F8F8F2', // Example: A common off-white. Choose your own!
        'dark-blue': '#1A202C', // Example: A common dark blue. Choose your own!
        'light-blue': '#63B3ED', // Example: A light blue for the link. Choose your own!
      },
    },
  },
  plugins: [],
}