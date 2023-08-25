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
      backgroundImage :{
        "blue-color" : "linear-gradient(45deg, #0078c8 0%, #0032a0 100%);",
        "blue-green" : "linear-gradient(-90deg, #0078c8 0%, #78be1e 100%);",
      },
      boxShadow: {
        'bar': '-72vw 0 0 8px #78be1e, -65vw 0 0 8px #019e43, -58vw 0 0 8px #0182c6, 0vw 0 0 8px #1d4f9b;',
        'search': '0 -4px 7px rgba(0,0,0,0.07)',
        'cart-container' : '0 1px 7px rgba(0,0,0,0.1)',
        'cart-header' : '0 0.3125rem 0.625rem 0 rgba(0,0,0,0.05)',
        'intro-content' : ' 0 0.0625rem 0.125rem rgba(0,0,0,0.02)',
        'intro-introduction' : '0 0.0625rem 0.125rem rgba(0,0,0,0.02)'
      },
      zIndex: {
        '999': '999',
        '1000': '1000',
      },
      width: {
        '150': '150rem',
        '45': '45rem',
        '48': '48rem',
        '.8': '.8rem',
        '29': '29rem',
        '97%': '97%',
        '95%': '95%',
        '65%': '65%',
        '45%': '45%',
        '30%': '30%',
      },
      height: {
        '170vh': '170vh',
        '120vh': '120vh',
        '150vh': '150vh',
        '90vh': '90vh',
        '60vh': '60vh',
        '.8': '.8rem',
        '27': '27rem',
        '90%': '90%',
        '660': '660px',
      },
      spacing: {
        '(-100)': '-100rem',
        '(-60)': '-60rem',
        '(-40)': '-40rem',
        '(-.2)': '-.2rem',
        '35': '35rem',
        '25': '25rem',
        '27.5': '27.5rem',
        '28.5': '28.5rem',
        '18.5': '18.5rem',
        '25': '25rem',
        '70': '70rem',
        '40%': '40%',
      },
      brightness: {
        5.5: '5.5'
      }
    },
  },
  plugins: [],
}

