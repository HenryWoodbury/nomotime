# nomotime.com

Astro marketing and legal site for **Metronomo**, the Android app in `~/zzz/met`. `README.md`
covers the build, the deploy, and the privacy-policy sourcing rule.

## Copy

`docs/copy.md` governs every word on `src/pages/index.astro`, and the claim layer of the
legal and support pages. Read it before drafting or editing copy.

Voice and claims are Henry's. Mechanics are Claude's, and get a pass after any hand edit.

### Sourcing a claim

Numbers, feature names, and negations are checked against `~/zzz/met` before they are
written. Draft copy never carries an inferred fact. Product nouns match the app's own UI
labels — the app says **count-in**, so the site says count-in.

### The mechanics pass

`src/pages/index.astro` is raw markup and gets no typographic substitution. The `.md` pages
run through smartypants, so straight quotes in them are correct.

- Typographic quotes and apostrophes in `.astro`: `’`, `“ ”`
- `&ndash;` for ranges, em dash for asides
- American spelling
- No trailing whitespace
- Subject-verb agreement across compound subjects
- Open compounds as nouns: *time signatures*, not *time-signatures*

Edit UTF-8 prose with `perl -CSD`, or the existing curly punctuation is mangled to `â`.
