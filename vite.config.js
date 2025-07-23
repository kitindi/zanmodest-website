import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8888, // Replace 8888 with your preferred port number
  },
  extend: {
    fontFamily: {
      sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
    },
  },
});
