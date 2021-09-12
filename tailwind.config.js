module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': '#18191A',
        'dark-nav-footer': '#242526', 
        'dark-card': '#242526',
        'dark-button': '#3A3B3C',
        'button-hover': '#4E4F50',
        'dark-input': '#3A3B3C',
        'dark-placeholder': '#B8BBBF',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
