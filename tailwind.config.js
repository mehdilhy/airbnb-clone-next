module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'airbnb': "url('https://hdwallpaperim.com/wp-content/uploads/2017/08/24/112359-house-Everlasting_Summer.jpg')",
        'airbnb-night':"url('https://hdwallpaperim.com/wp-content/uploads/2017/08/24/112357-skull_and_bones-night-trees-Everlasting_Summer-house.jpg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
