/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1f3a2c",
          2: "#274732",
        },
        clay: {
          DEFAULT: "#be5334",
          dark: "#9c4227",
        },
        ochre: "#d6a24a",
        cream: "#f5f0e4",
        paper: "#fbf9f3",
        ink: {
          DEFAULT: "#22201b",
          soft: "#5b564c",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(245,240,228,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,228,0.16) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
