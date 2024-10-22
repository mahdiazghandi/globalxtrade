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
        Navblue: "#001770",
        WhiteColor: "#FCFDFF",
        MenuColor: "#DFE1E5",
        LineCOlor: "#BFC3CC",
        BlackColor: "#000414",
        BlackColor2: "#000A33",
        SearchColor: "#41465C",
      },
    },
  },
  plugins: [],
};
