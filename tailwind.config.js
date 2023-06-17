/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E4EBF3",
        secondary: "#db2727",
      },
      fontFamily: {
        ddc: ["var(--DDC_Hardware)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
