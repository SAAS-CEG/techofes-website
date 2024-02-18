/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // important: '#root',
  theme: {
    extend: {
      backgroundImage: {
        sea1: "url('https://source.unsplash.com/Ke6Pr-9A2ac')",
        sea2: "url('https://source.unsplash.com/AUXanrckXn0')",
        sea3: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        playFair: "Playfair Display",
        anta: "Anta",
        exo2: "Exo 2",
        courgette: "Courgette",
        unbounded: "Unbounded",
        rubik: "Rubik Doodle Shadow",
        viga: "Viga",
      },
    },
  },
  plugins: [Myclass],
};
