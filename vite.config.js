import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using 'alekfilipovic.github.io' repo - deploys to root domain, so base is '/'
  base: '/',
})

