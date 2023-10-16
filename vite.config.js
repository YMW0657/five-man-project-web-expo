import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 443,
    host: '0.0.0.0',
    open: false,
    cors: true,
    proxy: {
      '^/api': {
        target: 'http://13.55.123.35:3000',
        // target: 'http://localhost:3000',
        ws: false,
        changeOrigin: true,
        rewrite: path=> path.replace(/^\/api/, '')
        // autoRewrite:true, //:() => '' // {'^/api' : ''}
      },
      '^/scan-api': {
        target: 'http://13.55.123.35:5000/scan-api',
        //target: 'http://127.0.0.1:5000/scan-api',
        ws: false,
        changeOrigin: true,
        rewrite: path=> path.replace(/^\/scan-api/, '')
        // autoRewrite:true, //:() => '' // {'^/api' : ''}
      }
    }
  }
})
