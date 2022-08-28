/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        black: "#111827",
        white: "#FFFFFF",
        grey: "#374151",
        "light-grey": "#E5E7EB",
        "dark-grey": "#374151",
        crimson: "#FF0653",
      },
      animation: {
        jump: "jump 2.5s ease infinite",
      },
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(23px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
