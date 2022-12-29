/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Gilroy Regular"],
        title: ["Acrom Bold"],
        hwrite: ["Astrum Script Cyrillic"],
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
    },
  },
  plugins: [require("flowbite/plugin")],
};
