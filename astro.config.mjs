import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Súper importante: Pon el dominio del test
  site: 'https://test.jafetbrito.com',
  base: './', // Esto hace que las rutas sean relativas y funcionen en cualquier carpeta
  build: {
    assets: 'assets' // Seguimos evitando el guion bajo
  },
  integrations: [tailwind()],
});