import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
        "mono-dm": ['"DM Mono"', "monospace"],
      },
      colors: {
        gold: "#C9A96E",
        "gold-light": "#E8C98A",
        cream: "#F5F0E8",
        ink: "#0A0A0F",
        "ink-mid": "#14141C",
        "ink-soft": "#1E1E2A",
        accent: "#FF5C35",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        shimmer: "shimmer 4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;