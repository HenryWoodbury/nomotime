---
layout: ../../layouts/Doc.astro
title: Export and import
description: Save your Grooves to an external file for backup, transfer, restore.
---

Metronomo does not sync to the cloud, but it does provide **Export** and **Import**
capability via a simple text file JSON schema. This allows you to back up and restore your
Grooves and transport them between devices and app installs. The JSON file also makes
Grooves programmatically accessible, for whatever possibilities that opens up.

## Exporting

**Settings** → **Utilities** → **Export** writes your **saved Groove library** to a file.
The file is named `metronomo-yyyy-mm-dd-hhmmss.json`, stamped in UTC to the second so a
folder of export files sorts chronologically. If the default name is taken, the new file
appends a count, e.g. `metronomo-yyyy-mm-dd-hhmmss (2).json`.

## The export file

The export file is a plain UTF-8 JSON document. You can open it in any text editor.

### The library schema

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
| `version` | number | Format version. Guards against breaking changes in the file format. |
| `exportedAt` | string | ISO 8601 timestamp of the export. Informational. |
| `appVersion` | string | The app version and build that wrote the file. Also informational. |
| `grooves` | array | The saved Grooves. Import fails if this is empty. |

### The Groove schema

Each entry in the `grooves` array defines a Groove:

```json
{
  "id": "mt1d6i07-4f2a91",
  "name": "Shuffle",
  "bpm": 96,
  "beats": 4,
  "accents": [
    "strong",
    "medium",
    "soft",
    "medium"
  ],
  "subdivision": 3,
  "subdivisionPatterns": {
    "3": [
      "mute",
      "tick",
      "soft"
    ],
    "4": [
      "mute",
      "tick",
      "strong",
      "tick"
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
| `id` | string | Unique within the library. A collision on import gives the incoming one a fresh id and renames it, so both Grooves survive. |
| `name` | string | The name of the Groove. A Groove with no name is skipped on import. |
| `bpm` | number | Tempo, 20–480. |
| `beats` | number | Beats per bar, 1–16. |
| `accents` | array | One level per beat; the length matches `beats`. |
| `subdivision` | number | Slots per beat, 1–8. |
| `subdivisionPatterns` | object | The tick patterns for each subdivision count. |
| `countIn` | number | Bars counted in before the practice clock starts, 0–8. `0` is no count in. |
| `alarm` | object | `{ "enabled": false }`, or `enabled` with `seconds`. 0–7259 in seconds. |
| `pause` | object | `{ "enabled": false }`, or `enabled` with `seconds`, 1–7259 in seconds. |
| `createdAt` | number | Unix milliseconds. |
| `updatedAt` | number | Unix milliseconds. |

An accent level on a beat or a subdivision slot is one of `strong`, `medium`, `soft`,
`tick`, or `mute`. In a `subdivisionPatterns` entry, slot 0 is the beat’s own place in the
grid and is always `mute`.

## Importing

**Settings** → **Utilities** → **Import** imports any UTF-8 file that observes the Grooves
JSON schema.

A file that parses opens a dialog with two modes:

- **Merge** adds the file's Grooves to your library. Nothing you have already saved is
  changed or dropped.
- **Replace** discards your library and installs the import in its place. This cannot be
  undone.

Under either mode, the Groove you are working on is left alone and can still be saved after
the import even if its saved version is replaced. Settings and Preferences are unaffected.

### Names and id collisions

Collisions under **Merge**, or between Grooves in the same file:

- An **id** already taken forces the duplicate to a fresh id and the name
  `<name> (imported)`.
- A **name** already taken forces the duplicate to a new name with a number: `Shuffle`
  arriving against `Shuffle` becomes `Shuffle (2)`, then `Shuffle (3)`.

### Parse failures

Four conditions stop an import before anything is read. In each case nothing on the device
changes:

| What you see | What it means |
| --- | --- |
| That file isn't readable as JSON. | The file did not parse. |
| That file isn't a Metronomo backup. | `format` is missing or is not `metronomo.backup`, or `version` is missing or below `1`. |
| That backup was written by a newer version of Metronomo. | `version` is above the format version for your app install. |
| That backup has no Grooves in it. | `grooves` was empty, or every Groove in it was skipped. |

The last one is a guard on **Replace** more than Merge; it prevents you from replacing your
Groove library with an empty set.

## Import repairs

Given that a Metronomo Grooves file can be created and edited outside of Metronomo, the
**Import** process is designed to repair boundary issues, unrecognized values, and
unrecognized keys:

- A number outside the range for a known property is clamped.
- A number that is missing or unreadable for a numeric property takes the app's default.
- An unrecognized accent level label becomes `medium`.
- An `accents` array that does not match the beat count is trimmed or padded.
- Keys the app does not know are dropped.

In short, a Groove that survives import is one the app could have created itself.

Four things are not repaired by Import:

- A Groove with no usable `name`, or no usable `beats`, is skipped entirely.
- A `subdivisionPatterns` entry is kept only if it describes its own count exactly. If any
  level is unrecognized, that entry is dropped and replaced by the default tick level.
  - Unlike `accents`, a `subdivisionPatterns` entry is never trimmed or padded to fit.
  - Slot 0 is always pinned back to `mute`, since the beat sounds from `accents`.
- A file whose `format` is not `metronomo.backup` is not importable.
- An `alarm` or `pause` whose `seconds` is missing or unreadable is switched **off**, rather
  than set to a default.
