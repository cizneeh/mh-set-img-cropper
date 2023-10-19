/// <reference types="vitest" />
// ↑triple slash command https://vitest.dev/config/#configuration
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/dist/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
  },
  test: {
    exclude: [...configDefaults.exclude],
  },
})
