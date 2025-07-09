/** @type {import('tailwindcss').Config} */
export default {
  heme: {
    extend: {
      fontFamily: {
        material: ['"Material Symbols Outlined"'],
      },
    },
  },
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      colors: {
        primary: "##E8DEF8",
      },
      fontSize: { "button-title": "24px" },
      fontFamily: {
        text: ["Inter", "Helvetica", "Arial", "sans"],
        title: ["Esteban", "cursive"],
      },
      maxWidth: {
        xlPageContent: "1200px",
        lgPageContent: "944px",
        mdPageContent: "728px",
        smPageContent: "320px",
      },
    },
  },
  plugins: [],
};
