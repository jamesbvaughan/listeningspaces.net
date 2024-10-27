/** @type {import('tailwindcss').Config} */
export default {
  content: ["hugo_stats.json", "assets/*.svg"],
  theme: {
    extend: {
      animation: {
        "spin-33rpm": "spin 1.8s linear infinite",
      },
    },
  },
  plugins: [],
};
