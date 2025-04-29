import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/songs': 'http://localhost:3000',  
    },
  },
});
