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
            config: `${path.resolve(__dirname, "./src/config/")}`,
            hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
            routes: `${path.resolve(__dirname, "./src/routes/")}`,
            services: `${path.resolve(__dirname, "./src/services/")}`,
            types: `${path.resolve(__dirname, "./src/types/")}`,
            utils: `${path.resolve(__dirname, "./src/utils/")}`,
            views: `${path.resolve(__dirname, "./src/views/")}`,
            atoms: `${path.resolve(__dirname, "./src/views/atoms/")}`,
            molecules: `${path.resolve(__dirname, "./src/views/molecules/")}`,
            features: `${path.resolve(__dirname, "./src/views/_features/")}`,
        }
    }
})