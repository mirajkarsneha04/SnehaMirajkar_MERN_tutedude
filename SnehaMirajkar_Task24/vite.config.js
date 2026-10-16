import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SnehaMirajkar_MERN_tutedude/SnehaMirajkar_Task24/', // Update this to match your exact subpath
})