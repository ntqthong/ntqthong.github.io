import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'serve-stock-analyzer',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/stock-analyzer' || req.url === '/stock-analyzer/') {
            req.url = '/stock-analyzer/index.html'
          }
          next()
        })
      },
    },
  ],
})
