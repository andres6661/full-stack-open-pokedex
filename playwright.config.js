import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-tests', // carpeta donde estarán tus tests
  timeout: 30 * 1000, // tiempo máximo por test
  retries: 1, // reintentos si falla
  use: {
    headless: true, // corre en modo headless
  },
  webServer: {
    command: 'npm start',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
})
