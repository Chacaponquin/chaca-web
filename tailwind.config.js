/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        principalColor: "#00CC99",
        secondColor: "#a29bfe",
      },
      fontFamily: {
        fontBold: "Cairo Bold",
        fontExtraBold: "Cairo Extra Bold",
        fontLight: "Cairo Light",
        fontRegular: "Cairo Regular",
      },
      backgroundImage: {
        "principal-bg": 'url("./assets/images/bg.svg")',
        "second-bg": 'url("./assets/images/second-bg.svg")',
      },
    },
  },
  plugins: [],
};
