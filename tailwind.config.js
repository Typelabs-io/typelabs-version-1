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
    screens: {
      'mobile': '425px',
      'tablet': '768px',
      'desktop': '1024px',
      'large': '1440px',
    },
    extend: {
      colors: {
        reef: {
          100: '#DDE0FF',
          200: '#5465FF',
          300: '#4654D4'
        },
        wave: {
          100: '#D0ECE8',
          200: '#129E8B',
          300: '#0F8474'
        }
      },
      fontFamily: {
        lora: ["Lora, serif"],
      },
      fontSize: {
        caption: "12px",
        overline: "10px",
        sm: "14px",
        base: "16px",
        lg: "17px"
      },
      boxShadow: {
        "right": '1px 0 0 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
