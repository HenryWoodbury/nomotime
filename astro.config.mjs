// @ts-check

import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const SITE = 'https://nomotime.com';

// Off-site links in the `.md` pages open in a new tab. Same-site links and `mailto:`
// stay in place, and `noopener` keeps the new page off `window.opener`.
/** @type {import('satteri').HastPluginDefinition} */
const externalLinksInNewTab = {
  name: 'external-links-in-new-tab',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (typeof href !== 'string') return;
      if (!/^https?:\/\//.test(href) || href.startsWith(SITE)) return;
      ctx.setProperty(node, 'target', '_blank');
      ctx.setProperty(node, 'rel', 'noopener');
    },
  },
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  // Shiki ships with Astro. Both themes are emitted so code follows the page
  // rather than sitting in a permanent dark slab; global.css switches them.
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
    processor: satteri({ hastPlugins: [externalLinksInNewTab] }),
  },
  integrations: [sitemap()],
});
