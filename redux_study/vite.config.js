import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://43.200.45.232:28078',
      // '/api': 'http://192.168.10.249:28078',
    }
  }
})
