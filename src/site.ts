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
