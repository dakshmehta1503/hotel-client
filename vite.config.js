import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path-browserify"

export default defineConfig({
  plugins: [react()],
  xmln: "true",
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
})
