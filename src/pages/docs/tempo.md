---
layout: ../../layouts/Doc.astro
title: Tempo
description: Metronomo’s 20 to 480 BPM range, the windowed slider that reaches it, and the tempo markings each range carries.
---

Metronomo plays from **20 to 480 BPM**, in whole beats per minute. A new Groove starts at
120.

## A window on the scale

A slider that spanned the whole range would put four hundred and sixty values under one
thumb, and no useful control over any of them. The tempo slider instead shows a **window**
of the scale, and the two numbers printed under its ends are the window's bounds.

How wide that window is is a preference — **Settings → Preferences → BPM slider
resolution** offers **20, 30, 40, 50, or 60 BPM**, and it starts at 40. A narrower window
buys finer control over a shorter stretch of the scale.

Three things move you around inside and past it:

- **Drag the thumb** to set any tempo inside the window.
- **Hold past either end** to shift the window **10 BPM** at a time. The tempo rides the
  leading edge as it goes, so the thumb holds still while the scale moves under it. The
  hold stops against either end of 20–480.
- **Tap a gutter** — the space past the track at either end — to nudge the tempo 10 BPM
  without moving the window. If the nudge takes the tempo out of the window, the window
  re-frames around it.

A window you arrived at by holding keeps its position as long as it still covers the
tempo. It re-centers only when the tempo leaves it.

## When the tempo takes effect

By default the new tempo reaches the metronome when you **let go** of the thumb. Under
**Settings → Preferences → Tempo**, **Apply while sliding** changes that: while something
is playing, the tempo commits during the drag.

It commits no more often than **once a bar**, and never less than a quarter-second apart —
a bar being as long as its beat count makes it, not just its tempo. Nothing commits mid-drag
while the metronome is stopped; there would be nothing to hear.

## Tempo markings

The reading above the slider carries the conventional Italian marking for the tempo
alongside the number, so *Andante* is findable where convention places it. Each marking
applies from its own lower bound up to the next one:

| Marking | BPM |
| --- | --- |
| Larghissimo | 20–24 |
| Grave | 25–39 |
| Largo | 40–59 |
| Larghetto | 60–65 |
| Adagio | 66–75 |
| Andante | 76–107 |
| Moderato | 108–119 |
| Allegro | 120–155 |
| Vivace | 156–167 |
| Presto | 168–199 |
| Prestissimo | 200–480 |

The marking is a label on the tempo, not a control: it follows the number rather than
setting it. It also appears on the lock screen card while the metronome is playing — see
[Playing](/docs/playing).
