# nomotime.com

The marketing and legal site for **Metronomo**, the Android metronome app
(`com.nomotime.metronomo`). Astro, no runtime JavaScript, deployed to Netlify.

`/docs` is a hub over one page per functional area of the app, ordered and
described by `DOC_PAGES` in `src/site.ts` — which is also what the sidebar and the
prev/next links are built from. Adding a section means adding the `.md` file and the
`DOC_PAGES` entry, and nothing else.

| Path | Purpose |
| --- | --- |
| `/` | Landing page |
| `/docs` | Documentation hub, and the one version stamp the docs set carries |
| `/docs/*` | One page per functional area — see `DOC_PAGES` for the list |
| `/privacy` | Privacy Policy — **the URL the Play Console requires** |
| `/terms` | Terms of Use |
| `/support` | Support, FAQ, and the data-deletion request process |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy

Netlify builds from `main` using `netlify.toml` (`npm run build` → `dist`). To set it up:

1. Netlify → **Add new site → Import an existing project** → this repo. The build settings
   come from `netlify.toml`; nothing to type.
2. **Domain management → Add a custom domain** → `nomotime.com`.
3. At your DNS host, point the apex `A` record at Netlify's load balancer `75.2.60.5` and
   `www` at `<site-name>.netlify.app` via `CNAME`. Netlify provisions the TLS certificate.
4. Confirm `https://nomotime.com/privacy` returns **200** to a logged-out request. Google
   Play's reviewer fetches it unauthenticated, and a 404 or a redirect chain fails review.

## Keeping the privacy policy true

`src/pages/privacy.md` makes specific factual claims about what the app collects. Those
claims are only true as long as the app's analytics code matches them. The authority is:

- `met/src/config/posthog.ts` — SDK configuration, host, lifecycle capture
- `met/src/metronome/format.ts` — which groove properties are attached to events
- every `posthog.capture(...)` call site in `met/src` and `met/app`

**Any PR to `met` that changes the event list, adds an SDK, or changes what a property
contains must update `src/pages/privacy.md` in this repo and bump the `version` and
`updated` fields in its frontmatter.** `met/docs/build/analytics.md` carries a pointer back
here.

## Keeping the export format true

`src/pages/docs/export.md` documents the backup file field by field, and a reader checks it
against a file the app wrote. The authority is:

- `met/src/storage/backup.ts` — `BACKUP_FORMAT`, `BACKUP_VERSION`, the `Backup` shape,
  what `parseBackup` rejects, and what `repairGroove` repairs rather than skips
- `met/src/storage/backupFile.ts` — the filename and its collision rule
- `met/src/metronome/types.ts`, `defaults.ts`, `accents.ts`, `subdivisions.ts`,
  `subLevels.ts` — every field's type, range, and default

**Any PR to `met` that adds or removes a `Groove` field, changes a range or default,
changes what import repairs, or bumps `BACKUP_VERSION` must update
`src/pages/docs/export.md`.** The JSON samples on that page are `JSON.stringify(_, null, 2)`
output, not hand-written, and are regenerated rather than edited in place.

## Keeping the docs true

`src/pages/docs/*` describes the app's behavior page by page, and every number, label, and
range on those pages is checked against `~/zzz/met` rather than against an earlier draft of
the site. The per-page authorities are the same ones the claim-layer list in `docs/copy.md`
names.

Two things in `met` are deliberately **not** documented, because they are not reachable in
the shipping app. Both would be easy to write up from the source and wrong to publish:

- **Sessions.** Gated on the `sessions_enabled` PostHog flag (`met/src/featureFlags.ts`);
  `met/app/sessions.tsx` redirects to `/` when the flag is off, and the tab bar in
  `met/src/components/AppFrame.tsx` holds two destinations, not three.
- **Tap tempo.** `met/src/metronome/tapTempo.ts` and the `tap` action in
  `met/src/state/metronomeStore.ts` both exist, but no control calls it.

**When either ships, it gets a page and a `DOC_PAGES` entry.** Until then, a docs page
that mentions them is a claim the app does not hold.

## Publishing checklist

- [ ] `support@nomotime.com` alias exists and forwards to a real inbox
- [x] Governing-law jurisdiction filled in at `src/pages/terms.md` §10 — Massachusetts, US
- [ ] `BETA_URL` in `src/pages/index.astro` set to the Play tester opt-in link
- [ ] At public launch: flip `IS_BETA` to `false` in `src/layouts/Base.astro`, swap the CTA
      to a Google Play badge on the real listing URL, and drop the beta note from
      `src/pages/support.md`
- [ ] Screenshots in `public/screens/` replaced with real device captures
