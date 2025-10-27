import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// styled-components Babel 설정 추가
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["styled-components"],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
