/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lavanda: "#fec5f8",
        vanilla: "#fdf3b7",
        pink: "#d67bd3",
        "strong-pink": "#ff00d6",
        purple: "#eebfff",
        lightblue: "#c0fcee",
        blue: "#a6b7f6",
      },
    },
  },
  font: {
    extend: {
      family: {
        lucidity: "lucidity",
      },
    },
  },
  plugins: [],
};
