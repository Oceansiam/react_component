import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // uncommet this before build but comment it after build
  // base: '/react_test_experiment/',
})
