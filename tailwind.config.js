/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        principalColor: "#7d5fff",
        secondColor: "#590ce8",
        thirdColor: "#9900FF",
        dangerColor: "#eb4d4b",
        darkColor: "#282c34",
        grayColor: "#E0E0E0",
        grayStrongColor: "#667085",
      },
      fontFamily: {
        fontBold: "Montserrat Bold",
        fontTitle: "Cairo Extra Bold",
        fontLight: "Cairo Light",
        fontRegular: "Cairo Regular",
        fontCodeRegular: "FiraCode Regular",
        fontCodeBold: "FiraCode Bold",
        fontDoc:
          '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Twemoji Country Flags","Segoe UI Emoji","Segoe UI Symbol"',
      },
      backgroundImage: {
        "principal-bg": 'url("./assets/images/bg.svg")',
        "second-bg": 'url("./assets/images/second-bg.svg")',
        "third-bg": 'url("./assets/images/third-bg.svg")',
      },
      screens: {
        exsm: { max: "400px" },
        esm: { max: "640px" },
        "2xl": { min: "1400px" },
      },
    },
  },
  plugins: [],
}
