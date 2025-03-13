/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4CAF50",
          dark: "#388E3C",
        },
        secondary: {
          light: "#8BC34A",
          dark: "#558B2F",
        },
        background: {
          light: "#f3faf7",
          dark: "#111827",
        },
        border: {
          dark: "#6b7280",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E1E1E",
        },
        text: {
          primary: {
            light: "#212121",
            dark: "#FFFFFF",
          },
          secondary: {
            light: "#757575",
            dark: "#B0BEC5",
          },
        },
        success: {
          light: "#4CAF50",
          dark: "#66BB6A",
        },
        error: {
          light: "#F44336",
          dark: "#EF5350",
        },
        warning: {
          light: "#FFC107",
          dark: "#FFCA28",
        },
        info: {
          light: "#2196F3",
          dark: "#42A5F5",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "zoom-in": "zoom-in 0.8s ease-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
