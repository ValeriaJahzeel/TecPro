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
        gris: "#333333",
        azul: "#3498DB",
        "verde-oscuro": "#00431f",
        "verde-medio": "#006930",
        "azul-oscuro": "#001781",
        "azul-medio": "#0026b3",
        whatsapp: "#25D366",
        naranja: "#E67E22",
        "amarillo-dorado": "#F4A828",
        verde: "#58B947",
        "rojo-anaranjado": "#D35400",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Roboto", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      spacing: {
        25: "6.25rem",
        45: "11.25rem",
        50: "12.5rem",
      },
    },
  },
  plugins: [],
};