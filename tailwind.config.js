/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 8px #e1ff26, 0 0 15px #e1ff26",
      },
      colors: {
        glow: "#e1ff26",
      },
      backdropBlur: {
        custom: "9.1px",
        60: "60px",
        30: "30px",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
