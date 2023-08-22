/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {

    fontFanily: {
      body : ['IRANSans' , 'sans-serif'],
      display : ['IRANSans' , 'sans-serif']
    },
    extend: {
      fontSize: {
        ".5": '0.5rem',
      "1": '1rem',
      "1.5": '1.5rem',
      "2": '2rem',
      "2.5": '2.5rem',
      "3": '3rem',
      "3.5": '3.5rem',
      "4": '4rem',
      "4.5": '4.5rem',
      "5": '5rem',
      "5.5": '5.5rem',
      "6": '6rem',
      "6.5": '6.5rem',
      "7": '7rem',
      "7.5": '7.5rem',
      "8": '8rem',
      "8.5": '8.5rem',
      "9": '9rem',
      "9.5": '9.5rem',
      "10": '10rem',
      "10.5": '10.5rem',
      "11": '11rem',
      "11.5": '11.5rem',
      "12": '12rem',
      "12.5": '12.5rem',
      "13": '13rem',
      "13.5": '13.5rem',
      "14": '14rem',
      "14.5": '14.5rem',
      "15": '15rem',
      "15.5": '15.5rem',
      "16": '16rem',
      "16.5": '16.5rem',
      "17": '17rem',
      "17.5": '17.5rem',
      "18": '18rem',
      "18.5": '18.5rem',
      "19": '19rem',
      "19.5": '19.5rem',
      "20": '20rem',

      },
      colors: {
        'white': '#fff',
        'primery-text-color': '#666',
        'midnight': '#121063',
        'bg-section-rtl': '#F2F3F7',
        'blue-color': 'linear-gradient(45deg, #0078c8 0%, #0032a0 100%);',
      },
      boxShadow: {
        'color-bar': '-72vw 0 0 8px #78be1e, -65vw 0 0 8px #019e43, -58vw 0 0 8px #0182c6, 0vw 0 0 8px #1d4f9b',
      }
    },
  },
  plugins: [],
}

