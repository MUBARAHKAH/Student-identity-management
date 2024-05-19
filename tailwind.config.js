/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        2.25: "9px", // Define custom spacing key '2.25' as '9px'
      },

      width: {
        15: "61px",
        25: "480px",
        xl: "1000px",
      },

      margin_top: {
        15: "61px",
      },

      border_radius: {
        2.5: "50px",
      },
    },
  },
  plugins: [],
};
