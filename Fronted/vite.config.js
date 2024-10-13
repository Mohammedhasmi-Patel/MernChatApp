import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3001,
    cors: false,
    proxy: {
      "/api": {
        target: "http://192.168.29.66:8000",
        changeOrigin: true,
      },
    },
  },
});
