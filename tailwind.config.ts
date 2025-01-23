import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        roll: {
          '0%': { transform: 'translateX(-50px) rotate(0deg)' },
          '50%': { transform: 'translateX(50px) rotate(180deg)' },
          '100%': { transform: 'translateX(-50px) rotate(360deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'scale-up': 'scale-up 0.5s ease-out',
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"],
      },
      colors: {
        apple: {
          light: {
            bg: '#F1F1F1',
            text: '#222222',
            secondary: '#333333',
          },
          dark: {
            bg: '#221F26',
            text: '#FFFFFF',
            secondary: '#F1F1F1',
          }
        },
        brand: {
          blue: "#4F46E5",
          purple: "#9b87f5",
          pink: "#D946EF",
        },
        stage: {
          blue: "#7DD3FC",
          green: "#86EFAC",
          yellow: "#FDE047",
          orange: "#FDBA74",
          pink: "#F9A8D4",
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #4F46E5, #9b87f5, #D946EF)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;