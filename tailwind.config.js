/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    clipPath: {
      octagon:
        "polygon(50% 0px, 95% 5%, 100% 50%, 95% 95%, 50% 100%, 5% 95%, 0px 50%, 5% 5%)",
    },
    screens: {
      fourK: "2560px",
      laptopL: "1440px",
      laptop: "1024px",
      tablet: "768px",
      tabletS: "524px",
      tabletM: "624px",
      mobileL: "425px",
      mobileM: "375px",
      mobileS: "320px",
      navBreakM: "547px",
    },
    extend: {
      borderRadius: {
        standard: "20px",
        "standard/2": "10px",
        "standard/4": "5px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      colors: {
        Blue: "#5784F7",
        bgBlack: "#1b1b1b",
        bgBlackSec: "#0c0c0c",
        bgWhiteSec: "#F9FBFD",
        bgWhite: "#f0f1f8",
        White: "#9598AE",
      },
      keyframes: {
        bounceRight: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        popUp: {
          from: {
            transform: "scale(0)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.2s ease-in-out 3",
        wiggleInfinite: "wiggle 0.2s ease-in-out infinite",
        bounceRight: "bounceRight 1s ease-in-out infinite",
        popUp: "popUp 0.4s",
      },
      fontFamily: {
        openS: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
