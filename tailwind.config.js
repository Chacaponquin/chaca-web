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
        fontBold: "Poppins Bold",
        fontTitle: "Poppins Extra Bold",
        fontLight: "Poppins Light",
        fontMedium: "Poppins Medium",
        fontRegular: "Cairo Regular",
        fontCodeRegular: "JetBrains Mono Regular",
        fontCodeMedium: "JetBrains Mono Medium",
        fontCodeBold: "JetBrains Mono Bold",
        fontDoc: "Poppins Regular",
      },
      backgroundImage: {
        "first-bg": 'url("./assets/images/first-bg.svg")',
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
