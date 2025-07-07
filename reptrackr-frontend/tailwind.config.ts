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
      },
      animation: {
        "slide-down": "slide-down 0.2s ease-in",
        "slide-up": "slide-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
