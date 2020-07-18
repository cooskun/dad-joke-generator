module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2da286",
        "primary-dark": "#144327",
        secondary: "#8ec4e9",
        "custom-gray": "#6f706f",
        "custom-white": "#e0f3ff",
      },
      fontSize: {
        "3-6": "3.6rem",
        giant: "26rem",
      },
      opacity: {
        "60": ".6",
      },
      rotate: {
        "360": "360deg",
      },
      width: {
        "9/10": "90%",
      },
    },
  },
  variants: {},
  plugins: [],
};
