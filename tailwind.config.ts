import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary-fixed-dim": "#bfc2ff",
        "on-secondary-fixed-variant": "#454747",
        "surface-tint": "#4850c6",
        "primary": "#000091",
        "inverse-surface": "#313030",
        "outline": "#767685",
        "on-tertiary-container": "#498df7",
        "tertiary": "#00122f",
        "surface": "#fcf9f8",
        "on-error": "#ffffff",
        "surface-dim": "#dcd9d9",
        "on-primary-fixed-variant": "#2f36ae",
        "surface-container-high": "#eae7e7",
        "on-error-container": "#93000a",
        "secondary-container": "#dddddd",
        "on-surface": "#1c1b1b",
        "background": "#fcf9f8",
        "surface-container-low": "#f6f3f2",
        "on-background": "#1c1b1b",
        "surface-variant": "#e5e2e1",
        "on-primary-fixed": "#00006e",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed-variant": "#004590",
        "primary-container": "#000091",
        "on-tertiary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#454653",
        "primary-fixed": "#e0e0ff",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#c6c6c6",
        "tertiary-container": "#002655",
        "surface-container-highest": "#e5e2e1",
        "on-secondary-container": "#606161",
        "surface-container": "#f0edec",
        "tertiary-fixed-dim": "#acc7ff",
        "on-primary": "#ffffff",
        "tertiary-fixed": "#d7e2ff",
        "secondary": "#5d5f5f",
        "error": "#ba1a1a",
        "inverse-on-surface": "#f3f0ef",
        "on-tertiary-fixed": "#001b40",
        "secondary-fixed": "#e2e2e2",
        "on-primary-container": "#7a82fb",
        "surface-bright": "#fcf9f8",
        "inverse-primary": "#bfc2ff",
        "outline-variant": "#c6c5d6",
        "on-secondary-fixed": "#1a1c1c"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "stack-lg": "48px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "stack-sm": "8px",
        "container-max": "1200px",
        "stack-md": "24px",
        "unit": "8px"
      },
      "fontFamily": {
        "sans": ["Public Sans", "sans-serif"]
      }
    },
  },
}
 
export default config;