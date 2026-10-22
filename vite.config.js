import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <- ADD THIS LINE
  server: {
    host: "127.0.0.1",
    port: 20250, // Optional: Specify a port number, default is 5173
    allowedHosts: [
      'localhost', // Allow localhost
      '127.0.0.1', // Allow specific IP address
    ],
  },
  build: {
    outDir: 'dist',        // default is 'dist'
    sourcemap: false,      // change to true if you want source maps
    minify: 'esbuild',     // or 'terser' if you prefer
  },
})
