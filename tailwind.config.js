const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
        times: ['Times New Roman'],
        brittany: ['Brittany Signature'],
        serif: ['Poppins'],
        mono: ['SFMono-Regular', 'Menlo'],
        poppin: ['Poppins']
      },
      backgroundImage: () => ({
        gingko: "url('/images/gingko.png')",
        daun1: "url('/images/daun1.png')",
        daun2: "url('/images/daun2.png')",
        daun3: "url('/images/daun3.png')",
        daun4: "url('/images/daun4.png')",
        kmbg1: "url('/images/kmbg1.png')",
        kmbg2: "url('/images/kmbg2.png')",
        kmbg3: "url('/images/kmbg3.png')",
        kmbg4: "url('/images/kmbg4.png')",
        kmbg5: "url('/images/kmbg5.png')",
        kmbg6: "url('/images/kmbg6.png')",
        couple1: "url('/images/couple1.png')",
        couple2: "url('/images/couple2.png')",
        roundedArdy: "url('/images/rounded-ardy.png')",
        roundedFirda: "url('/images/rounded-firda.png')",
        squareArdy: "url('/images/squar-ardy.png')",
        squareFirda: "url('/images/square-firda.png')",



      }),
      colors: {
        gold: {
          100: '#D6CFC1',
          900: '#AA7A32'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/custom-forms'),
  plugin(function ({ addComponents, addUtilities, theme }) {
   
    addComponents({
      '.card': {
        // backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.lg'),
        padding: theme('spacing.6'),
        // boxShadow: theme('boxShadow.xl'),
      }
    })

    addUtilities({
      '.content-auto': {
        contentVisibility: 'auto',
      }
    })
  })]
}
