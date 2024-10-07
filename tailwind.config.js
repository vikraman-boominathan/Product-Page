/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["KumbhSans", "sans-serif"], // Add the custom font family
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [require("daisyui")],
};
