import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A1712",
        "bg-elevated": "#0E1F17",
        surface: "#13291F",
        "surface-hi": "#1A3327",
        copper: "#C97A3D",
        "copper-bright": "#E8A868",
        signal: "#5ED3C7",
        silk: "#EDEAE0",
        muted: "#8FA396",
        line: "rgba(201,122,61,0.22)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-pcb":
          "linear-gradient(rgba(201,122,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,122,61,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        pcb: "48px 48px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.4" },
          "94%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        flicker: "flicker 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
