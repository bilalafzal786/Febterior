module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bggray: "#334048",
        bggray2: "rgba(32, 43, 50, 1)",
        customWhite: "rgba(255, 255, 255, 1)",
        customWhite2: "rgba(255, 255, 255, 0.5)",
        customBlack: "rgba(26, 32, 44, 1)",
        textPara: "rgba(99, 99, 99, 1)",
        teamText: "rgba(51, 64, 72, 1)",
        miniPara: "rgba(226, 232, 240, 1)",
        ulColor: "rgba(27, 27, 27, 1)",
      },
    },
  },
  plugins: [],
};
