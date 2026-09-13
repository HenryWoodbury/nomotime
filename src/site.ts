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
// Asserted, not annotated: TypeScript narrows an annotated const to its initializer,
// which makes every comparison below the current phase a ts(2367) error.
export const LAUNCH_PHASE = 'soon' as LaunchPhase;

export const IS_SOON = LAUNCH_PHASE === 'soon';
export const IS_BETA = LAUNCH_PHASE === 'beta';

// The tester opt-in links: Play's closed-testing URL and TestFlight's public link.
// Neither is a listing URL. An empty string hides that store's CTA.
export const PLAY_BETA_URL = '';
export const TESTFLIGHT_URL = '';

export const LEGAL_PAGES = [
  { href: '/docs', label: 'Docs' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
] as const;
