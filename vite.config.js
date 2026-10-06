import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bodylab-fitness-gym/',
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
  },
})