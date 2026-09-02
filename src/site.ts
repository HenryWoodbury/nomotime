// Facts about the site that more than one page needs to agree on.

export const SITE_NAME = 'Metronomo';
export const SUPPORT_EMAIL = 'support@nomotime.com';

// Beta state. Setting this to false hides the masthead tag AND the landing
// page's beta line; the sentence in support.md is prose and stays a manual edit.
export const IS_BETA = true;

// Play issues this once the tester opt-in exists. It is not the listing URL.
export const BETA_URL = '#';

export const LEGAL_PAGES = [
  { href: '/docs', label: 'Docs' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
] as const;

// The docs set. /docs is a hub over these; the sub-pages carry no stamp of their
// own, so the two constants below date the whole set and are bumped with it.
export const DOCS_VERSION = '1.0.0-beta.1';
export const DOCS_UPDATED = '1 September 2026';

export const DOC_PAGES = [
  {
    href: '/docs/beats',
    label: 'Beats and accents',
    blurb: 'One to sixteen beats a bar, and the five levels each one can take.',
  },
  {
    href: '/docs/subdivisions',
    label: 'Subdivisions',
    blurb: 'One to eight slots per beat, and drawing what lands in them.',
  },
  {
    href: '/docs/tempo',
    label: 'Tempo',
    blurb: '20 to 480 BPM, the windowed slider that reaches it, and the markings.',
  },
  {
    href: '/docs/timers',
    label: 'Count-in and timers',
    blurb: 'The count-in, the practice clock, the repeating alarm, and the pause.',
  },
  {
    href: '/docs/sound',
    label: 'Sound and volume',
    blurb: 'What each accent level sounds like, the two timbres, and where volume lives.',
  },
  {
    href: '/docs/playing',
    label: 'Playing',
    blurb: 'The transport, how the click is timed, and what keeps running in the background.',
  },
  {
    href: '/docs/grooves',
    label: 'Grooves',
    blurb: 'What a Groove holds, and saving, loading, renaming, and deleting one.',
  },
  {
    href: '/docs/export',
    label: 'Export and import',
    blurb: 'The backup file, field by field: what Export writes, and what Import repairs.',
  },
  {
    href: '/docs/settings',
    label: 'Settings',
    blurb: 'Every control on the Settings screen, and where each one is explained.',
  },
] as const;
