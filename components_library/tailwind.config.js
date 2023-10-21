/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      firstB: "480px",
      // => @media (min-width: 640px) { ... }

      secondB: "650px",
      // => @media (min-width: 1024px) { ... }

      thirdB: "850px",
      // => @media (min-width: 1280px) { ... }
      fourthB: "1200px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
