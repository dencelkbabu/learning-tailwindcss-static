/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['"Figtree"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyui settings:
};
