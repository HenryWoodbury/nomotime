---
layout: ../../layouts/Doc.astro
title: Tempo
description: Set playback from 20 to 480 BPM using a windowed slider that makes it easy to navigate the entire scale to set the exact tempo you want.
---

Metronomo plays from **20 to 480 BPM**, in whole beats per minute. A new Groove defaults to
120 BPM.

## A window on the scale

The tempo slider shows a 20 to 60 BPM window of the full 460 BPM range. The current bounds
of the window are annotated below the slider's navigation arrows.

The width of the window is set via **Settings → Preferences → BPM slider resolution**.
The choice is **20, 30, 40, 50, or 60 BPM**, with a default of **40**.

To quickly set a desired tempo:

- **Drag** or **tap** the slider to set any tempo inside the current window.
- **Tap** the **left or right margin** of the slider to shift the window's bounds 10 BPM in
the indicated direction. The selected tempo will not change.
- **Drag and hold** to either end of the slider to repeatedly shift the window's bounds
  **10 BPM** until you end the action.

The current tempo selection will move as the window's bounds change and eventually
re-center when it falls outside the new bounds.

## When the tempo takes effect

By default the tempo selection updates playback as you slide it. The tempo change always
happens at the end of the current bar.

Under **Settings → Preferences → Tempo**, **Apply while sliding** lets you turn off this
immediate playback response. Instead the tempo change will wait for you to end your drag
action to take effect.

## Tempo markings

The conventional Italian tempo marking is presented above the slider adjacent to the BPM
number. These labels align to the following ranges:

| Marking | BPM |
| --- | --- |
| *Larghissimo* | 20–24 |
| *Grave* | 25–39 |
| *Largo* | 40–59 |
| *Larghetto* | 60–65 |
| *Adagio* | 66–75 |
| *Andante* | 76–107 |
| *Moderato* | 108–119 |
| *Allegro* | 120–155 |
| *Vivace* | 156–167 |
| *Presto* | 168–199 |
| *Prestissimo* | 200–480 |

This presentation-only label on the tempo slider also appears on the lock screen while the
metronome is playing — see [Playing](/docs/playing).
