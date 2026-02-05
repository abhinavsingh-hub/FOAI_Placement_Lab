import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "retro-orange": "hsl(var(--retro-orange))",
        "retro-yellow": "hsl(var(--retro-yellow))",
        "retro-lime": "hsl(var(--retro-lime))",
        "retro-purple": "hsl(var(--retro-purple))",
        "retro-pink": "hsl(var(--retro-pink))",
        "retro-bg": "hsl(var(--retro-bg))",
      },
      fontFamily: {
        retro: ["Courier New", "monospace"],
        display: ["Courier New", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        glitch: {
          "0%": {
            clipPath: "inset(40% 0 61% 0)",
            transform: "translate(0)",
          },
          "20%": {
            clipPath: "inset(92% 0 1% 0)",
            transform: "translate(-2px, 2px)",
          },
          "40%": {
            clipPath: "inset(43% 0 1% 0)",
            transform: "translate(-2px, -2px)",
          },
          "60%": {
            clipPath: "inset(25% 0 58% 0)",
            transform: "translate(2px, 2px)",
          },
          "80%": {
            clipPath: "inset(54% 0 7% 0)",
            transform: "translate(2px, -2px)",
          },
          "100%": {
            clipPath: "inset(58% 0 43% 0)",
            transform: "translate(0)",
          },
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            opacity: "1",
          },
          "20%, 24%, 55%": {
            opacity: "0.7",
          },
        },
        "scan-lines": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glitch: "glitch 2s infinite",
        flicker: "flicker 0.15s infinite",
        "scan-lines": "scan-lines 8s linear infinite",
      },
      boxShadow: {
        "retro-glow": "0 0 20px rgba(255, 165, 0, 0.5), 0 0 40px rgba(255, 200, 0, 0.3)",
        "neon": "0 0 10px currentColor, 0 0 20px currentColor",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
