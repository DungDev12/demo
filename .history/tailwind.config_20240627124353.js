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
        "text-code": "text-code 2s linear infinite",
      },
      keyframes: {
        'text-code': {
          '0': {}
        }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
