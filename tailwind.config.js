/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appBlack: "#262626",
        appWhite: "#ECEEEE",
      },
      fontFamily: {
        mulish: ["Mulish"],
      },
      backgroundImage: {
        "linear-gradient": "linear-gradient(to right, #8FFFAE, #ABFF74)",
      },
    },
  },
  plugins: [],
};
