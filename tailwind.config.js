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
        'search': '0 -4px 7px rgba(0,0,0,0.07)',
        'cart-container' : '0 1px 7px rgba(0,0,0,0.1)',
        'cart-header' : '0 0.3125rem 0.625rem 0 rgba(0,0,0,0.05)'
      },
      zIndex: {
        '999': '999',
        '1000': '1000',
      },
      width: {
        '45': '45rem',
        '.8': '.8rem',
        '29': '29rem',
      },
      height: {
        '90vh': '90vh',
        '.8': '.8rem',
      },
      spacing: {
        '(-100)': '-100rem',
        '(-60)': '-60rem',
        '(-.2)': '-.2rem',
        '25': '25rem',
        '40%': '40%',
      }
    },
  },
  plugins: [],
}

