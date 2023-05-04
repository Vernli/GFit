/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/js/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "920px",
        mdlg: "1080px",
        lg: "1280px",
        landscape: "(orientation: landscape)",
      },
      colors: {
        metalicGray: "#4b4b4b",
        lightRed: "#ff3333",
        darkRed: "cc0000",
      },
      boxShadow: {
        shadowNews: "2px 0px 3px 2px",
      },
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      roboto: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
