import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
const root = resolve(__dirname, "./src");
const outDir = resolve(__dirname, "./dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        contentScript: resolve(root, "content_scripts", "content_script.ts"),
        popup: resolve(root, "popup", "index.html"),
        options: resolve(root, "options", "index.html"),

        background: resolve(root, "background", "background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
