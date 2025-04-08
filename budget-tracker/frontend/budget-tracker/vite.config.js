import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // This enables SPA routing (important for refreshing subroutes like /income)
    historyApiFallback: true,
  },
})
