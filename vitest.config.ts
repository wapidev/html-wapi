import { defineConfig } from 'vitest/config'

export default defineConfig({
  // Los tests corren contra el sitio nuevo.
  define: { __SITIO_NUEVO__: 'true' },
  test: {
    // jsdom para los tests que montan componentes (el acordeón de preguntas).
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['src/test/setup.ts'],
  },
})
