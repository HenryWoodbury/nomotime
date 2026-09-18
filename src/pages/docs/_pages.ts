// The docs set: which pages are in it, and in what order. Underscored so Astro leaves
// it out of the routes, and kept beside the pages it orders rather than in `site.ts`,
// since nothing outside `/docs` reads it.
//
// Titles and descriptions are NOT repeated here. Each page's own frontmatter is the
// only place either is written; this file names the page and nothing else, so a page
// drops out of the sidebar, the hub, and prev/next by leaving this list.

// The app version the set describes: `expo.version` in met/app.json at the tagged store
// release (`v1.0.0`), never a version of the docs themselves. DOCS_UPDATED is bumped
// whenever the set changes.
export const DOCS_VERSION = '1.0.0';
export const DOCS_UPDATED = '13 September 2026';

export const DOC_ORDER = [
  'beats',
  'subdivisions',
  'tempo',
  'timers',
  'sound',
  'playback',
  'grooves',
  'export',
  'settings',
] as const;

type DocFrontmatter = { title: string; description: string };

// Lazy on purpose. Each page here lists Doc.astro as its layout, and Doc.astro reads
// this module, so an eager glob would be a cycle: the pages would still be initializing
// and every module would come back undefined. Loaded at render instead, the graph is
// whole, and the two consumers pay one await.
const sources = import.meta.glob<{ frontmatter: DocFrontmatter }>('./*.md');

export type DocPage = { href: string; title: string; description: string };

// A slug with no page — or a page missing either field — fails the build here rather
// than rendering an empty entry in the sidebar.
export async function loadDocPages(): Promise<DocPage[]> {
  return Promise.all(
    DOC_ORDER.map(async (slug) => {
      const load = sources[`./${slug}.md`];
      if (!load) {
        throw new Error(`DOC_ORDER names "${slug}", which has no src/pages/docs/${slug}.md`);
      }
      const { title, description } = (await load()).frontmatter;
      if (!title || !description) {
        throw new Error(`src/pages/docs/${slug}.md: frontmatter is missing a title or description`);
      }
      return { href: `/docs/${slug}`, title, description };
    }),
  );
}
