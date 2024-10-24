/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
      },
      spacing: {
        1440: "1440px",
        30: "120px",
        41: "164px",
        4.5: "18px",
        15: "60px",
        5.5: "22px",
      },
      colors: {
        customblue: "#001770",
        customWhite: "#FCFDFF",
        menuColor: "#DFE1E5",
        lineColor: "#BFC3CC",
        blackColor: "#000414",
        blackColor2: "#000A33",
        searchColor: "#41465C",
        bgWColor: "#F6F7F8",
        borderColorT: "#707380",
        borderColorB: "#B5B9C8",
        bgColorP: "#EAEEFE",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
       addVariant("child", "& > *");
       addVariant("child-hover", "& > *:hover");
    },
 ],
};
