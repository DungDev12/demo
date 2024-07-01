import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/demo/",
  build: {
    outDir: "dist",
    minify: "terser", // Sử dụng Terser để minify mã nguồn
    sourcemap: false, // Tắt sourcemap để giảm kích thước build
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
