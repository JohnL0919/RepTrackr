export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", "sans-serif"],
        open: ["var(--font-open)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        "3xs": "0.5625rem", // 9px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(0px)", opacity: "1" },
          "100%": { transform: "translateY(20px)", opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "color-shift": {
          "0%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(30deg)" },
          "100%": { filter: "hue-rotate(0deg)" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.2s ease-in",
        "slide-up": "slide-up 0.2s ease-out",
        pulse: "pulse-glow 5s ease-in-out infinite",
        "color-shift": "color-shift 8s infinite",
      },
    },
  },
  plugins: [],
};
