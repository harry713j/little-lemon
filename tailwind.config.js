/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", ...defaultTheme.fontFamily.sans],
        markazi: ["Markazi Text", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        yellow: "#F4CE14",
        green: "#495E57",
        black: "#333333",
        creamWhite: "#EDEFEE",
        bluishWhite: "#F4F5F5",
        apricot: "#FBDABB",
        coral: "#EE9972",
        orange: "#FFB45B",
        validateGreen: "#58B9EF",
        invalidatePink: "#FF5D91",
        lightGreen: "#217D5F",
        darkYellow: "#E4BF09",
      },
    },
  },
  plugins: [],
};
