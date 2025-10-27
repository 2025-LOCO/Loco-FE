import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Vercel 배포 시 CSS, 이미지, 폰트 경로 깨짐 방지
  base: "./",
});
