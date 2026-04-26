import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ccjg-cleaning-services.ca',
  // Si lo subes a la raíz (public_html), elimina el base o pon '/'
  base: '/', 
  build: {
    assets: 'assets' 
  },
  integrations: [tailwind()],
});