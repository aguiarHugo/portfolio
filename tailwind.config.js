/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#d0d0d0",
          200: "#a0a0a1",
          300: "#717172",
          400: "#414143",
          500: "#121214",
          600: "#0e0e10",
          700: "#0b0b0c",
          800: "#070708",
          900: "#040404"
        },
        purple: {
          100: "#e6ddfa",
          200: "#cdbcf5",
          300: "#b49aef",
          400: "#9b79ea",
          500: "#8257e5",
          600: "#6846b7",
          700: "#4e3489",
          800: "#34235c",
          900: "#1a112e"
        },
        yellow: "#FDCC49"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

