/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-1": "#1c1c18",
        "custom-2": "#cfb47d",
        "custom-3": "#f3be5c",
        "custom-4": "#a3772f",
        "custom-5": "#fffefb",
      },
    },
  },
  plugins: [],
};
