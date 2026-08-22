# Copy

Rules for the marketing copy in `src/pages/index.astro`. The legal and support pages run on
a different register — see **Register by page** below.

## Voice

**Affirmative, not defensive.** A privacy claim states what is true about the reader's
position, not what an unnamed villain does.

| No | Yes |
| --- | --- |
| Your practice is nobody else's business | Your practice is your business |
| Anonymous usage analytics are on by default | Yes to some anonymous analytics |

**Second person, present, active.** The reader is a player with an instrument in their
hands. Musician vocabulary — groove, syncopate, subdivision, count-in — is house language,
not jargon to be explained.

**Contrast without the sneer.** One neutral sentence about what other apps do is enough.
Nothing gets called bolted-on, and no line implies the reader was fooled by a competitor.

| No | Yes |
| --- | --- |
| a tempo dial with a time-signature dropdown bolted to it | apps that start with presets and time signatures |
| instead of choosing from a menu of the four somebody thought you would want | One to eight slots per beat, each independently accented. |

**Name the mechanism; do not explain it.** The pitch says *hardware clock timing*. It does
not say what it is scheduled against, what the alternative is, or why the alternative
drifts. That explanation lives on `/support`.

## Where the charm goes

Charm concentrates at the entry point and drains out through the body.

- **`h1`** — a phrase with sound in it. No terminal period.
- **`h2`** — a plain claim, often an antithesis: *Built for making music, not for reading music*.
- **`h3` (feature titles)** — flat labels. The conventional word beats the coined one:
  *Customizable subdivisions*, not *Drawable subdivisions*.
- **feature bodies** — one sentence, roughly fifteen words. A fact, not an argument. No
  *so you can* clause unless the payoff is not obvious from the fact.

## The claim layer

Every number, feature name, and negation in the copy is a factual assertion about
`~/zzz/met`. The authority is the app source, never an earlier draft of this site:

- tempo range — `met/src/metronome/tempoMarkings.ts` (`MIN_BPM`, `MAX_BPM`)
- beats a bar, subdivision slots, accent levels — `met/src/metronome/`
- what the app sends — the sources listed under **Keeping the privacy policy true** in `README.md`

Product nouns match the app's own UI labels. The app says **count-in**, so the site says
count-in.

**Every negation survives a literal reading.** *No account* and *no network calls* are
absolutes the app cannot hold; *no name, no email address* and *no outbound tracking* are.
A promise that needs a qualifier gets the qualifier: *Free foundational engine*.

## Register by page

| Page | Register |
| --- | --- |
| `/` | Compressed. One sentence where two would fit. Rhetorical questions and an exclamation are in range. |
| `/support` | Expository. Full explanations, mechanism included, second person throughout. |
| `/privacy`, `/terms` | Plain and literal. The claim layer rules apply hardest here. |

## Mechanics

Typographic quotes and apostrophes throughout: `’`, `“ ”`. Ranges use `&ndash;`, asides use
an em dash. American spelling. No trailing whitespace. Source lines break at clause
boundaries rather than at a fixed column.
