import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic', // Ajoutez cette ligne si nécessaire
  })],
  resolve: {
    alias: {
      buffer: 'buffer/',
    },
  },
  // Peut aussi aider pour certains packages qui utilisent process.env
  define: {
    'process.env': {}
  },
  // optimizeDeps peut être nécessaire pour que Vite pré-compile 'buffer'
  optimizeDeps: {
    include: ['buffer'],
  }
  
  ,
  esbuild: {
    loader: 'jsx',
  },
})