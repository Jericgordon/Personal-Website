import {defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    base: "/Personal-Website/",
    test: {
        globals: true, // 
        environment: 'jsdom'
     }
});