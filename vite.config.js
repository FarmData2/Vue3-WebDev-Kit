import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: 'tutorials/flashword',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
