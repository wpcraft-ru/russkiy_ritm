import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.ASTRO_SITE || "http://localhost:4321";
const base = process.env.ASTRO_BASE || "/";

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: false,
    },
  },
});
