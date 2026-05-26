const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        divider: "rgb(var(--divider) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.55' }],
        'lg': ['1.25rem', { lineHeight: '1.3' }],
        'xl': ['1.5rem', { lineHeight: '1.2' }],
        '2xl': ['1.875rem', { lineHeight: '1.15' }],
        '3xl': ['2.25rem', { lineHeight: '1.05' }],
        '4xl': ['2.75rem', { lineHeight: '1.0' }],
        '5xl': ['3.5rem', { lineHeight: '0.95' }],
        '6xl': ['4.5rem', { lineHeight: '0.9' }],
        '7xl': ['5.5rem', { lineHeight: '0.82' }],
      },
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
