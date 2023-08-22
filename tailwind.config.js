/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily :{
      body : ['IRANSans' , 'sans-serif'],
      display : ['IRANSans' , 'sans-serif']
    },
    extend: {
      colors : {
        "blue-color" : "linear-gradient(45deg, #0078c8 0%, #0032a0 100%);",
        "primery-color" : "#666",
        "white-color" : "#fff"
      },
      boxShadow: {
        'bar': '-72vw 0 0 8px #78be1e, -65vw 0 0 8px #019e43, -58vw 0 0 8px #0182c6, 0vw 0 0 8px #1d4f9b;',
        'search': '0 -4px 7px rgba(0,0,0,0.07)'
      },
      zIndex: {
        '999': '999',
      }
    },
  },
  plugins: [],
}

