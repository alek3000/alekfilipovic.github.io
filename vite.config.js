import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change this to '/your-repo-name/' when deploying to GitHub Pages
  // Example: base: '/alekfilipovic/'
  base: '/',
})

