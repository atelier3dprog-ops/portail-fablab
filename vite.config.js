import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // On indique à Vite que le site est dans un sous-dossier
  base: '/Portail_Doc_Atelier3dprog/',
})