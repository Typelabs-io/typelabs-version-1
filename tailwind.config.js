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
        Teal: "#39A5A5",
        Leal: "#8FCACA",
        deal: "007979",
        "Leal-100": "27AEAE",
        accent: "#C3C3C3",
        Reef200: "#5465FF",
        Reef300: "#4654D4",
      },
      fontFamily: {
        secular: ["Secular One, sans-serif"],
        lora: ["Lora, serif"],
      },
      fontSize: {
        caption: "12px",
        overline: "10px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "25px",
        "2xl": "35px",
        "3xl": "49px",
        "4xl": "61px",
        "5xl": "96px",
      },
    },
  },
  plugins: [],
};
