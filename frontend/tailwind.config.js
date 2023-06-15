/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        dgray: "hsl(0, 0%, 55%)",
        vdgray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        bgHeroMobile:
          "linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%),url('/src/images/mobile/image-hero.jpg')",
        bgHeroDesktop:
          "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('/src/images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
