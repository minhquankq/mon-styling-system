module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B8405E",
        secondary: "#313552",
        success: {
          main: "#2E8618",
          1: "#2E8618",
          2: "#1A6307",
          3: "#DAF7D2",
        },
        alert: {
          main: "#FBC622",
          1: "#F08C00",
          2: "#FAB005",
          3: "#FEF7E2",
        },
        error: {
          main: "#B81818",
          1: "#840F0F",
          2: "#9E0D0D",
          3: "#FDE4E4",
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active", "disabled"],
      backgroundColor: ["active", "disabled"],
      ringColor: ["hover", "active", "disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
