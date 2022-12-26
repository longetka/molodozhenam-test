/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Rubik"],
        secondary: ["Cardo"],
        hwrite: ["Lobster"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      colors: {
        "sky-opacity": "rgba(224, 242, 254, .5)",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
