import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const port = Number(env.VITE_FRONTEND_PORT) || 3000

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port,
    },
  }
})
