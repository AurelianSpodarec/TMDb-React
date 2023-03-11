import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            assets: `${path.resolve(__dirname, "./src/assets/")}`,
            routes: `${path.resolve(__dirname, "./src/routes/")}`,
            services: `${path.resolve(__dirname, "./src/services/")}`,
            views: `${path.resolve(__dirname, "./src/views/")}`,
        }
    }
})
