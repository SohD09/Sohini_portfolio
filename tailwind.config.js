/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
    screens: {
      desktop: { max: "1535px" },
      // => @media (max-width: 1279px) { ... }

      laptop: { max: "1280px" },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      mobile: { max: "768px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
