import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr()
  ],
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      app: '/src/app',
      shared: '/src/shared',
      feature: '/src/feature',
      entities: '/src/entities',
      pages: '/src/pages',
      assets: '/src/assets',
      widgets: '/src/widgets'
  },
  }
})
