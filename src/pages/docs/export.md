---
layout: ../../layouts/Doc.astro
title: Export and import
description: Metronomo’s backup file, field by field — what Export writes, how Import merges or replaces, and what it refuses.
---

## Exporting

**Settings** → **Utilities** → **Export** writes your saved Grooves to a file you
choose the folder for. The file is named `metronomo-yyyy-mm-dd-hhmmss.json`, stamped in
UTC to the second so a folder of them sorts oldest to newest; if that name is somehow
taken, the new file becomes `metronomo-yyyy-mm-dd-hhmmss (2).json` rather than
overwriting the one already there.

The file holds your **saved Groove library and nothing else**. Preferences and whatever is
currently loaded in the editor belong to the device, not the file.

## The file is JSON

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

## A Groove

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
| `alarm` | object | `{ "enabled": false }`, or `enabled` with `seconds`. It repeats on every multiple of `seconds` of practice; there is no fire-once form. 0–7259, where 7259 is 120:59 and 0 is an alarm that stays on and never sounds. |
| `pause` | object | `{ "enabled": false }`, or `enabled` with `seconds`, after which the transport stops itself. 1–7259: the same ceiling as `alarm`, but 0 switches it off rather than keeping it on. |
| `createdAt` | number | Unix milliseconds. |
| `updatedAt` | number | Unix milliseconds. |

An accent level — on a beat or a subdivision slot — is one of `strong`, `normal`, `weak`,
`tick`, or `mute`. In a `subdivisionPattern`, slot 0 is the beat’s own place in the grid and
is always `mute`, because the beat sounds from `accents` instead.

## Importing

**Settings** → **Utilities** → **Import** reads one file back. The picker accepts any file
type, because file managers routinely report a `.json` as `text/plain`; the parser is the
real gate on whether a file is one of Metronomo's.

A file that parses opens a dialog with two modes, and the dialog counts up what each one
would do before you commit to it:

- **Merge** adds the file's Grooves to your library. Nothing you have already saved is
  changed or dropped.
- **Replace** discards your library and installs the file's in its place. This cannot be
  undone.

Under either mode, the Groove you are working on is left alone and can still be saved
afterward. So are your preferences and your analytics choice — importing a file from
someone else's phone does not import their settings.

### Names and ids

A backup is a restore, not a second opinion, so nothing already on the device is
overwritten:

- An **id** the library already holds belongs to some other Groove. The incoming one is
  given a fresh id and its name becomes `<name> (imported)`, and both survive.
- A **name** already taken gets a number: `Shuffle` arriving against a `Shuffle` becomes
  `Shuffle (2)`, then `Shuffle (3)`.

### When the whole file is refused

Four conditions stop an import before anything is read. In each case nothing on the device
changes:

| What you see | What it means |
| --- | --- |
| That file isn't readable as JSON. | It did not parse. |
| That file isn't a Metronomo backup. | `format` is missing or is not `metronomo.backup`, or `version` is missing or below `1`. |
| That backup was written by a newer version of Metronomo. | `version` is above the format version this app knows. |
| That backup has no Grooves in it. | `grooves` was empty, or every Groove in it was skipped. |

The last one is a guard on **Replace** more than on Merge: replacing against a file with
no Grooves in it is a wipe, and nothing further down could tell it from a restore.

## Editing the file by hand

You can, and import repairs most of what you get wrong. A number outside its range is
clamped; a number that is missing or unreadable takes the app's default rather than the
nearest bound, so deleting `"countIn"` gives you a four-bar count-in, not none, and
deleting `"bpm"` gives you 120. An unrecognized accent level becomes `normal`, an
`accents` array of the wrong length is trimmed or padded, and keys the app does not know
are dropped rather than stored. A Groove that survives import is one the app could have
created itself.

Four things are not repaired that way.

- A Groove with no usable `name`, or no usable `beats`, is skipped entirely.
- A `subdivisionPattern` is kept only if it still describes its own count exactly. If
  `subdivision` is outside 1–8, if `levels` is not exactly that long, or if any level is
  unrecognized, the whole pattern is dropped and the Groove imports with its ticks
  undrawn. Unlike `accents`, it is never trimmed or padded to fit. Slot 0 is the one
  exception: whatever it holds is pinned back to `mute`, since the beat sounds from
  `accents`. A pattern that is only the default once that pin lands — every other slot at
  `tick` — is stored as `null`, because an undrawn pattern is no pattern.
- A file whose `format` is not `metronomo.backup` is not a backup at all, and nothing in
  it is read.
- An `alarm` or `pause` whose `seconds` is missing or unreadable is switched **off**, not
  set to a default. This is the one place the fallback goes to nothing rather than to the
  app's own value, so deleting `"seconds"` from an enabled rule loses the rule.
