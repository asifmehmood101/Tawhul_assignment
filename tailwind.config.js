// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        color:{
            brand:{
              DEFAULT: "#243B5E",
              light: "#2F4C73",
              dark: "#1D3557",
            }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}