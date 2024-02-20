import { defineConfig } from 'vite'

const config = defineConfig({
  build: {
    target: 'esnext',
    assetsInlineLimit: 100,
  },
  preview: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
    cors: false,
    proxy: {
    },
  }
})

export default config
