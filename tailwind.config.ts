import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#FAFAFA",
          alt: "#F0EEEC",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F5F5F4",
        },
        accent: {
          DEFAULT: "#18181B",
          hover: "#3F3F46",
          contrast: "#FFFFFF",
        },
        primary: "#09090B",
        secondary: "#64748B",
        muted: "#94A3B8",
        subtle: "#E4E4E7",
        success: {
          DEFAULT: "#DCFCE7",
          text: "#166534",
        },
        error: {
          DEFAULT: "#FEE2E2",
          text: "#991B1B",
        },
      },
      fontFamily: {
        display: ["var(--font-dm-serif-display)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
