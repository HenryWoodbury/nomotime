// Facts about the site that more than one page needs to agree on.

export const SITE_NAME = 'Metronomo';
export const SUPPORT_EMAIL = 'support@nomotime.com';

// Launch state, in the order the site moves through it. 'soon' is the pre-announcement
// page: no masthead tag, no CTA, and the status line reads Coming soon. 'beta' recruits
// testers. 'live' drops the tag and the status line but keeps the CTA, which is swapped
// to store badges by hand. The sentence in support.md is prose and stays a manual edit
// in every phase.
export type LaunchPhase = 'soon' | 'beta' | 'live';
// Asserted, not annotated: TypeScript narrows an annotated const to its initializer,
// which makes every comparison below the current phase a ts(2367) error.
export const LAUNCH_PHASE = 'beta' as LaunchPhase;

export const IS_SOON = LAUNCH_PHASE === 'soon';
export const IS_BETA = LAUNCH_PHASE === 'beta';

// The tester opt-in links: Play's open-testing URL and TestFlight's public link.
// Neither is a listing URL. An empty string hides the iOS CTA; for Android it swaps the
// CTA to an email request, since Play's internal track has no public link and a tester
// is added to it by hand.
export const PLAY_BETA_URL = '';
export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/hE9W1tnd';
export const PLAY_REQUEST_URL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  'Metronomo Android beta',
)}&body=${encodeURIComponent('Please add this Google account to the Android beta: ')}`;

export const LEGAL_PAGES = [
  { href: '/docs', label: 'Docs' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/support', label: 'Support' },
] as const;
