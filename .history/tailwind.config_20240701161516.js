const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        modalOpen: "modalOpen 0.5s linear",
      },
      keyframes: {
        modalOpen: {
          "20%": { transform: " translate(-50%, -50%) scale(0.8)" },
          "80%": { transform: " translate(-50%, -50%) scale(1.05)" },
          "90%": { transform: " translate(-50%, -50%) scale(0.95)" },
          "100%": { transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
