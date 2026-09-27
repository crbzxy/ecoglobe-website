import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig(({ command }) => ({
  base: "/",
  server: {
    port: 3000
  },
  ssr: {
    noExternal: ["@mui/*", "@emotion/*"]
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: command === "build",
        crawlLinks: true
      }
    }),
    // El plugin de Netlify levanta Deno/Edge Functions en `vite dev` y falla
    // (Deno: unexpected argument '--allow-scripts'). Solo hace falta en build.
    command === "build" ? netlify() : null,
    viteReact()
  ]
}));
