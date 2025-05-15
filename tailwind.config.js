/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E65100", // Odisha temple orange/saffron
          foreground: "#ffffff",
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9800",
          600: "#FB8C00",
          700: "#F57C00",
          800: "#EF6C00",
          900: "#E65100",
        },
        secondary: {
          DEFAULT: "#01579B", // Deep blue inspired by Odisha coastal waters
          foreground: "#ffffff",
          50: "#E1F5FE",
          100: "#B3E5FC",
          200: "#81D4FA",
          300: "#4FC3F7",
          400: "#29B6F6",
          500: "#03A9F4",
          600: "#039BE5",
          700: "#0288D1",
          800: "#0277BD",
          900: "#01579B",
        },
        accent: {
          DEFAULT: "#8D6E63", // Earthy brown from temple stone
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#FF5722",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        jagannath: {
          red: "#D32F2F",
          yellow: "#FFB300",
          black: "#212121",
          white: "#FAFAFA",
        },
        temple: {
          stone: "#A1887F",
          sand: "#D7CCC8",
          gold: "#FFC107",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 0.8 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 15s linear infinite reverse",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.DEFAULT"),
                opacity: 0.8,
              },
            },
          },
        },
      }),
      backgroundImage: {
        "pattachitra-pattern": "url('/pattachitra-bg.png')",
        "temple-pattern": "url('/temple-pattern.png')",
        "konark-wheel": "url('/konark-wheel.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
