import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@shared': '/src/shared',
      '@components': '/src/components',
      '@screens': '/src/screens',
      '@game-logic': '/scr/game-logic'
    },
  },
})
