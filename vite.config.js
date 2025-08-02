import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/pixxelhack-demo/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
