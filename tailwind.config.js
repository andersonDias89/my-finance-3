module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151521",
        secondary: "#245274",
        blue: "#3699FF",
        blueLight: "#52a6f9",
        blueLightHover: "#80c0fc",
        redTransparent: "rgba(221, 11, 56, 0.2)",
        line: "rgba(206, 206, 206, 0.1)",
        green: "#04aa77",
        greenTransparent: "rgba(4, 170, 119, 0.2)",
        box: "#1e1e2d"
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },
      fontSize: {
        "xs": "12px",
        "sm" : "14px",
        "md": "16px",
        "lg": "20px"
      }
    },
  },
  plugins: [],
}
