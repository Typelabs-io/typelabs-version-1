/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Purple: "#8B00FF",
        Lavender: "#CCCCFF",
        Teal: "#39A5A5",
      },
      fontFamily: {
        secular: ["Secular One, sans-serif"],
      },
    },
  },
  plugins: [],
};
