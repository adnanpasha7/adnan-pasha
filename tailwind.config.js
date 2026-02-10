/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        border: "var(--border)",
        danger: "var(--danger)",
      },
    },
  },
  plugins: [],
};
