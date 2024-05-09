/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
