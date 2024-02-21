import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"

const config = defineConfig({ 
  plugins: [viteSingleFile()],
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
  },
  css: {
    transformer: 'lightningcss',
  }
})

export default config
