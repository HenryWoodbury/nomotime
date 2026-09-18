---
layout: ../../layouts/Doc.astro
title: Sound and volume
description: Decide what Metronomo sounds like.
---

Every click Metronomo makes is synthesized. There are no samples in the app.
The click sound is based on an accent level and which of two timbres is selected.

## The five accent levels

An accent level sets both loudness and pitch. Stronger is both louder and higher, so a bar
reads as shape rather than as volume alone.

| Level | Relative loudness | Where it sits |
| --- | --- | --- |
| **Strong** | 100% | Highest in pitch. |
| **Medium** | 85% | |
| **Soft** | 60% | |
| **Tick** | 60% | Same loudness as **Soft** but lowest in pitch. |
| **Mute** | Silent | Not sounded at all. |

**Tick** and **Soft** carry the same gain deliberately. **Tick** is distinguished by
pitch, not volume, which keeps a busy subdivision row audible instead of letting
it fade under the beats.

## Two timbres

Metronomo provides a timbre choice of either **Percussive** or **Tonal**, chosen in
**Settings → Preferences → Beat**. This is an app-level setting.

**Percussive** is the default: a short, dry woodblock fundamental with an inharmonic
partial above it and a filtered noise attack, dying away in a fraction of a second.

**Tonal** is a pitched click: a triangle tone with a second tone an octave below it for
body, giving a fuller and slightly louder sound than the woodblock.

The two run on separate pitch tables, so a level's tone changes with the timbre:

| Level | Percussive | Tonal |
| --- | --- | --- |
| **Strong** | 1050 Hz | 1600 Hz |
| **Medium** | 880 Hz | 1240 Hz |
| **Soft** | 740 Hz | 960 Hz |
| **Tick** | 620 Hz | 720 Hz |

The [alarm](/docs/timers) is always tonal, with a sweep that keeps it distinct from the
click it interrupts.

## Volume

The volume slider runs from silent to full.
The <span class="icon icon-volume" role="img" aria-label="volume"></span> button to its
left mutes and unmutes. On unmute, the volume returns to its previous level.

Volume belongs to the **app** and is not saved with a Groove, either in the app or in an
export.
