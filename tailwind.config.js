/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(270deg, rgba(0, 27, 12, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%)",
      },
    },
  },
  plugins: [],
};
