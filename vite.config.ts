import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: "./frontend",
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'frontend', 'src') },
    ],
  },
})
