---
layout: ../../layouts/Doc.astro
title: Count-in and timers
description: Metronomo’s count-in, practice clock, repeating alarm, and pause countdown — what each one measures and where it stops.
---

Metronomo carries three pieces of timing beyond the pulse itself: bars counted in before
practice starts, an alarm that repeats, and a pause that stops the transport. All three
are saved with the Groove.

## Count in

**Count in** sets how many bars of the Groove play before the practice clock reaches
**0:00**. It runs **0 to 8 bars** and starts at **4**. Zero is no count-in.

The count-in is not time the clock ignores — it is time the clock counts through. The
**Elapsed Time** readout starts at the count-in's full length, *negative*, and climbs to
0:00 as the count-in plays. Four bars of four beats at 120 BPM start the clock at **-0:08**. That means an
elapsed reading is always practice time: what you counted in never enters it, and the
alarm and pause below both measure from 0:00.

The row shows five counts at a time, with chevrons that scroll it and jump to either end,
the same as **Subs**.

## Elapsed Time

The left-hand clock is the practice stopwatch. The **⟲** beside it restarts timing,
putting both readouts back to the start of the count-in so they agree.

The stopwatch banks practice across runs: stopping and starting the transport does not
zero it. Only **⟲** does.

## Alarm

**Alarm** repeats. Set it to **every** and give it a time, and it sounds on each multiple
of that time in elapsed practice — every 5:00 means 5:00, 10:00, 15:00, and onward for as
long as you play.

The alarm's sound is a short rising spike, and it is always tonal regardless of the
**Beat** setting on [Sound and volume](/docs/sound). It is meant to be audible over a
percussive click rather than blend into it.

## Pause

**Pause** counts down once. Give it a time and the transport **stops itself** after that
much playing time — a way to practice a fixed stretch without watching the clock.

When a pause is set, a second readout appears to the right of the transport: **Pause
Count**, with its own **⟲**. What that button does depends on **Settings → Preferences →
Pause timer**:

| Setting | Stopped | Playing |
| --- | --- | --- |
| **Reset and play** (default) | Restarts the countdown and resumes play, counted in. | Counts the Groove in again, mid-run. With no count-in set, restarts the countdown only. |
| **Reset and wait** | Restarts the countdown. Nothing starts playing. | Restarts the countdown. Play carries on. |

## Both rows, both limits

**Alarm** and **Pause** are the same row: a **none | every** switch over an **mm:ss**
field. Switching either on for the first time offers **1:00**. Both fields top out at
**120:59**.

Two edges worth knowing:

- A **Pause** set to **0:00** switches itself off. A countdown with no time to run is not
  a countdown.
- An **Alarm** set to **0:00** stays switched on and never sounds. It is stored as an
  enabled rule with nothing to fire on.
