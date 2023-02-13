/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "780px",
        lg: "1280px",
        landscape: "(orientation: landscape)",
      },
      colors: {
        metalicGray: "#4b4b4b",
        lightRed: "#ff3333",
        darkRed: "cc0000",
      },
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      roboto: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
