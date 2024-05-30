/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lavanda: "#e00097",
        vanilla: "#fdf3b7",
        pink: "#d67bd3",
        "strong-pink": "#ff00d6",
        purple: "#e652c3",
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
