/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        principalColor: "#00CC99",
        secondColor: "#a29bfe",
        dangerColor: "#fc5c65",
        darkColor: "#282c34",
      },
      fontFamily: {
        fontBold: "Cairo Bold",
        fontExtraBold: "Cairo Extra Bold",
        fontLight: "Cairo Light",
        fontRegular: "Cairo Regular",
        fontCodeRegular: "FiraCode Regular",
        fontCodeBold: "FiraCode Bold",
      },
      backgroundImage: {
        "principal-bg": 'url("./assets/images/bg.svg")',
        "second-bg": 'url("./assets/images/second-bg.svg")',
      },
      screens: {
        exsm: { max: "400px" },
        esm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
