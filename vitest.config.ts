import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [],
  test: {
    globals: true,
    root: './',
    include: ['**/*.spec.ts'],
  },
} as any);
