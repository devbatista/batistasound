tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        mono: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "oklch(0.08 0 0)",
        foreground: "oklch(0.98 0 0)",
        card: "oklch(0.12 0 0)",
        "card-foreground": "oklch(0.98 0 0)",
        popover: "oklch(0.12 0 0)",
        "popover-foreground": "oklch(0.98 0 0)",
        primary: "oklch(0.78 0.12 85)",
        "primary-foreground": "oklch(0.08 0 0)",
        secondary: "oklch(0.18 0 0)",
        "secondary-foreground": "oklch(0.98 0 0)",
        muted: "oklch(0.2 0 0)",
        "muted-foreground": "oklch(0.65 0 0)",
        accent: "oklch(0.45 0.18 25)",
        "accent-foreground": "oklch(0.98 0 0)",
        destructive: "oklch(0.5 0.2 25)",
        "destructive-foreground": "oklch(0.98 0 0)",
        border: "oklch(0.25 0 0)",
        input: "oklch(0.18 0 0)",
        ring: "oklch(0.78 0.12 85)",
        gold: "oklch(0.78 0.12 85)",
        "gold-light": "oklch(0.85 0.1 85)",
        "dark-red": "oklch(0.45 0.18 25)",
      },
      borderRadius: {
        lg: "0.625rem",
        md: "calc(0.625rem - 2px)",
        sm: "calc(0.625rem - 4px)",
        xl: "calc(0.625rem + 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(15 23 42 / 0.05)",
      },
    },
  },
};
