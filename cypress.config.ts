import { defineConfig } from 'cypress';

export default defineConfig({
  responseTimeout: 40000,
  e2e: {
    baseUrl: 'https://www.mercadolibre.com.ar',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});