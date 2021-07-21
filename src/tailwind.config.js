// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    borderColor: {
      'border-yellow-500': colors.yellow
    }
  },
  variants: {
    extend: {
      borderStyle: ['hover']
    }
  }
}
