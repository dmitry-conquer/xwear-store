module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#49d0ff",
        dark: "#121214",
        "dark-gray": "#303030",
        "light-gray": "#8C8F96",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
    },
    fontFamily: {
      dewi: ["Dewi", "serif"],
      cera: ["Cera", "serif"],
    },
  },
};
