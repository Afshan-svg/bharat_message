/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#d51e1a', 
        bg: '#202020',   
        text: '#f7f7f7',  
        secondary: '#8b8c8b',
      },
    },
  },
  plugins: [],
};
