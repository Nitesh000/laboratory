/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#3C6255",
        mediumGreen: "#61876E",
        lightGreen: "#A6BB8D",
        pale: "#EAE7B1",
      },
    },
  },
  plugins: [],
};
