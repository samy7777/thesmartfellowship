/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        'custom-pink': '0 11px 104px rgba(234, 62, 126, 0.3)', // Custom drop shadow with your color
        'custom-yellow': '7px 7px 96px #EF8A372E', // Custom drop shadow with your color
      },
    },
  },
  plugins: [],
};
