/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        softBg: "#F8F7FC",
        pastelPurple: "#CDB4DB",
        pastelBlue: "#BDE0FE",
        pastelPink: "#FFC8DD",
        pastelMint: "#A8E6CF",
        softGray: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
