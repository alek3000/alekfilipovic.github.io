import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repository is under alek3000, so base path must match the repo name
  base: '/alekfilipovic.github.io/',
})

