---
layout: ../layouts/Legal.astro
title: Documentation
description: How Metronomo works — grooves, beats, subdivisions, accents, tempo, and the settings behind them.
updated: 26 August 2026
version: '1.0.0-beta.1'
---

Metronomo is a metronome you build rather than configure. This page covers what each part
of the app does and how the parts fit together.

## Export

**Settings** → **Utilities** → **Export** writes your saved Grooves to a file you
choose the folder for. The file is named `metronomo-backup-yyyy-mm-dd.json`, dated so a
folder of them sorts in order; a second export on the same day becomes
`metronomo-backup-yyyy-mm-dd (2).json` rather than overwriting the first.

The file holds your **saved Groove library and nothing else**. Preferences and whatever is
currently loaded in the editor belong to the device, not the file.

### The file is JSON

It is a plain UTF-8 JSON document, indented two spaces, and you can open it in any text
editor. Nothing in it is encrypted, compressed, or encoded — a backup you cannot read is a
backup you cannot check.

The top level is an object with five keys. `grooves` is shown empty here and detailed
below; a real file with an empty `grooves` is rejected on import:

```json
{
  "format": "metronomo.backup",
  "version": 1,
  "exportedAt": "2026-08-26T14:22:31.004Z",
  "appVersion": "1.0.0 (4)",
  "grooves": []
}
```

| Key | Type | Meaning |
| --- | --- | --- |
| `format` | string | Always `metronomo.backup`. Import rejects a file without it. |
| `version` | number | Format version, currently `1`. A file from a newer version of the app is refused rather than guessed at. |
| `exportedAt` | string | ISO 8601 timestamp of the export. Written for you and for support; the app does not read it back. |
| `appVersion` | string | The app version and build that wrote the file, for example `1.0.0 (4)`. Also informational. |
| `grooves` | array | The saved Grooves. Import fails if this is empty. |

### A Groove

Each entry in `grooves` is one saved Groove:

```json
{
  "id": "mt1d6i07-4f2a91",
  "name": "Shuffle",
  "bpm": 96,
  "beats": 4,
  "accents": [
    "strong",
    "normal",
    "weak",
    "normal"
  ],
  "subdivision": 3,
  "subdivisionPattern": {
    "subdivision": 3,
    "levels": [
      "mute",
      "tick",
      "weak"
    ]
  },
  "countIn": 4,
  "alarm": {
    "enabled": true,
    "mode": "every",
    "seconds": 300
  },
  "pause": {
    "enabled": false
  },
  "createdAt": 1787220902311,
  "updatedAt": 1787752724902
}
```

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | string | Unique within the library. A collision on import re-mints the incoming one and renames it `<name> (imported)`, so both Grooves survive. |
| `name` | string | What you named it. A Groove with no name is skipped on import. |
| `bpm` | number | Tempo, 20–480. |
| `beats` | number | Beats per bar, 1–16. There are no time signatures. |
| `accents` | array | One level per beat; the length matches `beats`. |
| `subdivision` | number | Slots per beat, 1–8, the beat included and first. `1` is no subdivision. |
| `subdivisionPattern` | object or null | A tick pattern drawn for one subdivision count. `null` means the undrawn default — every subdivision at `tick`, slot 0 aside. |
| `countIn` | number | Bars counted in before the practice clock starts, 0–8. `0` is no count-in. |
| `alarm` | object | Off, or an interval rule carrying `mode` and `seconds`. `mode` is `every` to repeat, `at` to fire once. |
| `pause` | object | Off, or a rule carrying `seconds`, after which the transport stops itself. |
| `createdAt` | number | Unix milliseconds. |
| `updatedAt` | number | Unix milliseconds. |

An accent level — on a beat or a subdivision slot — is one of `strong`, `normal`, `weak`,
`tick`, or `mute`. In a `subdivisionPattern`, slot 0 is the beat’s own place in the grid and
is always `mute`, because the beat sounds from `accents` instead.

### Editing the file by hand

You can, and import repairs most of what you get wrong. A number outside its range is
clamped; a number that is missing or unreadable takes the app's default rather than the
nearest bound, so deleting `"countIn"` gives you a four-bar count-in, not none, and
deleting `"bpm"` gives you 120. An unrecognized accent level becomes `normal`, an
`accents` array of the wrong length is trimmed or padded, and keys the app does not know
are dropped rather than stored. A Groove that survives import is one the app could have
created itself.

Three things are not repaired that way.

- A Groove with no usable `name`, or no usable `beats`, is skipped entirely.
- A `subdivisionPattern` is kept only if it still describes its own count exactly. If
  `subdivision` is outside 1–8, if `levels` is not exactly that long, or if any level is
  unrecognized, the whole pattern is dropped and the Groove imports with its ticks
  undrawn. Unlike `accents`, it is never trimmed or padded to fit.
- A file whose `format` is not `metronomo.backup` is not a backup at all, and nothing in
  it is read.
