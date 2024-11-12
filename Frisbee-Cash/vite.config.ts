import { defineConfig,splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),splitVendorChunkPlugin()],
  base: '/',
  build: {
    sourcemap: true,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //       }
    //     },
    //     chunkFileNames: 'assets/js/[name]-[hash].js',
    //     entryFileNames: 'assets/js/[name]-[hash].js',
    //     assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
    //   },
    // },
  },
})
