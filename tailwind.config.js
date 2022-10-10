/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7c3aed",

          "secondary": "#f3f4f6",

          "accent": "#22d3ee",

          "neutral": "#111827",

          "base-100": "#2F3941",

          "info": "#60a5fa",

          "success": "#34d399",

          "warning": "#facc15",

          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
