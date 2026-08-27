// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nomotime.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Shiki ships with Astro. Both themes are emitted so code follows the page
  // rather than sitting in a permanent dark slab; global.css switches them.
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  integrations: [sitemap()],
});
