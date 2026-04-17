import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        // Editorial spacing scale (8 / 16 / 24 / 32 / 48 / 64 / 96 / 128)
        'section': '8rem',      // 128px - between sections
        'section-lg': '10rem',  // 160px - large section gaps
        'section-sm': '6rem',   // 96px - smaller section gap
        'internal': '2rem',     // 32px - within sections
        'internal-sm': '1rem',  // 16px - tight internal
        '18': '4.5rem',         // 72px
        '22': '5.5rem',         // 88px
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '65ch',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        // Editorial typography scale
        'display': ['clamp(3.5rem, 8vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2.25rem, 5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'subheading': ['clamp(1.5rem, 3vw, 1.75rem)', { lineHeight: '1.2' }],
        'body-lg': ['clamp(1rem, 1.2vw, 1.125rem)', { lineHeight: '1.6' }],
        'micro': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        electric: {
          DEFAULT: "hsl(var(--electric))",
          foreground: "hsl(var(--electric-foreground))",
        },
        border: "hsl(var(--border))",
        "border-subtle": "hsl(var(--border-subtle))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
