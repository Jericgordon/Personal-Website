import {defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    base: "/Personal-Website/",
    test: {
        globals: true, // 
        environment: 'jsdom'
     },
    build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Split vendor libraries
          }
          if (id.includes('src/components/')) {
            return 'components'; // Split components into their own chunk
          }
        },
      },
    },
  }
});