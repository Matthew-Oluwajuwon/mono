/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    fontFamily: {
      InterBlack: ["InterBlack"],
      InterBold: ["InterBold"],
      InterExtraBold: ["InterExtraBold"],
      InterExtraLight: ["InterExtraLight"],
      Interlight: ["Interlight"],
      InterMedium: ["InterMedium"],
      InterRegular: ["InterRegular"],
      InterSemiBold: ["InterSemiBold"],
      InterThin: ["InterThin"],
    },
    colors: {
      primary: "#1B5C58",
      secondary: "#2F7E79",
      accent: "#D0E5E4",
      'primary-light': "#438883",
      white: "#FFFFFF",
      gray: {
        500: "#DDDDDD"
      },
      dark: {
        gray: {
          500: "#DDDDDD"
        }
      }
    }
  },
  plugins: [],
}