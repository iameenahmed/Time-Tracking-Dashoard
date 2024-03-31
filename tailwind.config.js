/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        DarkBlue: "hsl(235, 43%, 20%)",
        VeryDarkBlue: "hsl(225, 42%, 10%)",

        LightOrange: "hsl(15, 100%, 70%)",
        SoftBlue: "hsl(195, 74%, 62%)",
        LightRed: "hsl(348, 100%, 68%)",
        LimeGreen: "hsl(145, 58%, 55%)",
        Violet: "hsl(264, 64%, 52%)",
        SoftOrange: "hsl(43, 84%, 65%)",
      },
    },
  },

  plugins: [],
};
