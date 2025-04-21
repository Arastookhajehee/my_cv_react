import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <- ADD THIS LINE
  server: {
    host: "0.0.0.0", // or '0.0.0.0'
    port: 20250, // Optional: Specify a port number, default is 5173
    allowedHosts: [
      'localhost', // Allow localhost
      '127.0.0.1', // Allow specific IP address
      'www.arastookhajehee.net', // Allow example.com and all its subdomains
    ],
  },
  build: {
    outDir: 'dist',        // default is 'dist'
    sourcemap: false,      // change to true if you want source maps
    minify: 'esbuild',     // or 'terser' if you prefer
  },
})
