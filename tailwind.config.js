/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors: {
        "real-black": "#464646",
        "real-red": "#c04c4b",
        "real-yellow": "#f0dba5",
        "real-yellow2": "#ffcb05",
        "real-navy": "#363b81",
        "real-navy2": "#3b5ba7",
        "real-white": "#e7e7e6",
        "real-blue": "#6ea4bb",
      },
      dropShadow: {
        standard: " drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))",
      },
      backgroundImage: {
        water: "url(./src/assets/water.jpg)",
        fire: "url(./src/assets/fire.png)",
        grass: "url(./src/assets/grass.png)",
        bug: "url(./src/assets/bug.jpg)",
        psychic: "url(./src/assets/psychic.jpg)",
        dragon: "url(./src/assets/dragon.png)",
        rock: "url(./src/assets/rock.png)",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "760px",
      // => @media (min-width: 768px) { ... }

      lg: "1020px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
