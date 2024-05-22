/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "cursive"],
      },
      colors: {
        primary: "#FF7900",
        green_bg: "#008080",
        orange: "#FFC500"
        // darkbg: "#14431B",
      },
    },
  },
  plugins: [],
};