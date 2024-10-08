/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Add custom max-width breakpoints
        'max-2xl': {'max': '1536px'},
        'max-xl': {'max': '1280px'},
        'max-lg': {'max': '1024px'},
        'max-md': {'max': '768px'},
        'max-sm': {'max': '512px'},
        'max-xs': {'max': '385px'},
     
    
        
      },
    },
  },
  plugins: [],
  
}
