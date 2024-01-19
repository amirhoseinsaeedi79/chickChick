/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    fontFamily: {
      vazir: ["vazir"],
    },
    // colors:{
    //   orange:'#ff8201',
    //   black:'black',
    //   white:'white',
    //   red:'red'
    // },

    extend: {
      colors:{
        rgba:'RGBA(10,10,10,0.45)'
      }
    },
  },
  plugins: [],
}