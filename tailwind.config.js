const { SERVER_FILES_MANIFEST } = require('next/dist/shared/lib/constants')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:( "poppins")
      },
    },
  },
  plugins: [],
}