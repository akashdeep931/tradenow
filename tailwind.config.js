/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        tertiary: "#151030",
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
};
