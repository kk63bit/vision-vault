import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages repository URL: https://kk63bit.github.io/karthik-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/karthik-portfolio/',
})
