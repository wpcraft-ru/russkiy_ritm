import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://GITHUB_USER.github.io",
  base: "/GITHUB_REPO",
  vite: {
    plugins: [tailwindcss()],
  },
});
