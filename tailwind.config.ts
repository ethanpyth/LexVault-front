import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#fdf8f8",
        "surface-dim": "#ddd9d8",
        "surface-bright": "#fdf8f8",

        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f7f2f2",
        "surface-container": "#f1edec",
        "surface-container-high": "#ece7e7",
        "surface-container-highest": "#e6e1e1",

        "surface-lowest": "#FFFFFF",
        "surface-low": "#F6F3F2",

        "on-surface": "#1c1b1b",
        "on-surface-variant": "#454653",

        "inverse-surface": "#313030",
        "inverse-on-surface": "#f4f0ef",

        "outline": "#767685",
        "outline-variant": "#C6C5D6",

        "surface-tint": "#4850c6",

        "primary": "#000053",
        "on-primary": "#ffffff",
        "primary-container": "#000091",
        "on-primary-container": "#7a82fb",
        "inverse-primary": "#bfc2ff",

        "secondary": "#5d5f5f",
        "on-secondary": "#ffffff",
        "secondary-container": "#e2e3e2",
        "on-secondary-container": "#636565",

        "tertiary": "#00122f",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#002655",
        "on-tertiary-container": "#738fc3",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "error-base": "#BA1A1A",

        "primary-fixed": "#e0e0ff",
        "primary-fixed-dim": "#bfc2ff",
        "on-primary-fixed": "#00006e",
        "on-primary-fixed-variant": "#2f36ae",

        "secondary-fixed": "#e2e3e2",
        "secondary-fixed-dim": "#c6c7c6",
        "on-secondary-fixed": "#1a1c1c",
        "on-secondary-fixed-variant": "#454747",

        "tertiary-fixed": "#D7E2FF",
        "tertiary-fixed-dim": "#abc7ff",
        "on-tertiary-fixed": "#001B40",
        "on-tertiary-fixed-variant": "#2a4677",

        "background": "#fdf8f8",
        "on-background": "#1c1b1b",

        "surface-variant": "#e6e1e1",
      },

      spacing: {
        "base": "4px",
        "gutter": "24px",
        "margin-desktop": "40px",
        "margin-mobile": "16px",
        "container-max": "896px",
        "stack-md": "16px", 
        "stack-lg": "32px",
      },

      borderRadius: {
        "sm": "0.125rem",
        "DEFAULT": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
      },

      fontFamily: {
        "sans": ["Public Sans", "sans-serif"],
      },

      fontSize: {
        "display-lg": [
          "48px",
          {
            "lineHeight": "1.2",
            "letterSpacing": "-0.02em",
            "fontWeight": "700",
          },
        ],

        "headline-md": [
          "30px",
          {
            "lineHeight": "1.3",
            "letterSpacing": "-0.01em",
            "fontWeight": "700",
          },
        ],

        "title-sm-caps": [
          "12px",
          {
            "lineHeight": "1.5",
            "letterSpacing": "0.1em",
            "fontWeight": "700",
          },
        ],

        "body-md": [
          "16px",
          {
            "lineHeight": "1.6",
            "fontWeight": "400",
          },
        ],

        "label-md": [
          "14px",
          {
            "lineHeight": "1.2",
            "fontWeight": "700",
          },
        ],

        "helper-xs": [
          "11px",
          {
            "lineHeight": "1.4",
            "fontWeight": "500",
          },
        ],
      },

      maxWidth: {
        "container": "896px",
        "container-max": "896px",
        "200": "50rem"
      },
    },
  },

  plugins: [],
};
 
export default config;