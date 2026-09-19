/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      // Kept in step with the CSS custom properties in app/globals.css.
      // Orange sampled from the "ip" in public/logo.png (#f16721).
      colors: { primary: "#f16721", dark: "#c04e12", light: "#fdeee5", ink: "#1a2030", cream: "#fbfaf9", muted: "#5a6478", border: "#e7e3df" },
      fontFamily: { cormorant: ["var(--font-cormorant)", "Georgia", "serif"], sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
module.exports = config;