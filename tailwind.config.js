/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        2.25: "9px", // Define custom spacing key '2.25' as '9px'
      },

      screens: {
        xs: "320px",
        sm: "480px", // Custom width for small screens
        md: "768px", // Custom width for medium screens
        lg: "1024px", // Custom width for large screens
        xl: "1200px", // Custom width for extra-large screens
      },
      width: {
        15: "61px",
        25: "480px",
        xl: "1000px",
        10: "12px",
      },

      margin_top: {
        15: "61px",
      },

      border_radius: {
        2.5: "50px",
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".custom-mobile-style": {
    //       backgroundColor: "#ffcc00",
    //       color: "#333",
    //     },
    //   };
    //   addUtilities(newUtilities, ["responsive", "hover"]);
    // },
  ],
};
