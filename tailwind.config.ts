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
        }
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #4F46E5, #9b87f5, #D946EF)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;