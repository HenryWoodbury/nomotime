// Facts about the site that more than one page needs to agree on.

export const SITE_NAME = 'Metronomo';
export const SUPPORT_EMAIL = 'support@nomotime.com';

// Launch state, in the order the site moves through it. 'soon' is the pre-announcement
// page: no masthead tag, no CTA, and the status line reads Coming soon. 'beta' recruits
// testers. 'live' drops the tag and the status line but keeps the CTA, which is swapped
// to store badges by hand. The sentence in support.md is prose and stays a manual edit
// in every phase. Internal and closed testing stay at 'soon': those testers are
// recruited directly, so the public page has nothing to hand them.
export type LaunchPhase = 'soon' | 'beta' | 'live';
export const LAUNCH_PHASE: LaunchPhase = 'soon';

export const IS_SOON = LAUNCH_PHASE === 'soon';
export const IS_BETA = LAUNCH_PHASE === 'beta';

// The tester opt-in link — Play's, or TestFlight's public link. It is not a listing URL,
// and it is one link: a two-store beta needs a second constant and a second CTA.
export const BETA_URL = '#';

export const LEGAL_PAGES = [
  { href: '/docs', label: 'Docs' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
] as const;

// The docs set. /docs is a hub over these; the sub-pages carry no stamp of their own.
// DOCS_VERSION is the app version the set describes: `expo.version` in met/app.json at
// the tagged store release (`v1.0.0`), never a version of the docs themselves.
// DOCS_UPDATED is bumped whenever the set changes.
export const DOCS_VERSION = '1.0.0';
export const DOCS_UPDATED = '11 September 2026';

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
