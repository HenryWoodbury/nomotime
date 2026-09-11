---
layout: ../../layouts/Doc.astro
title: Count-in and timers
description: Metronomo’s count-in, practice clock, repeating alarm, pause countdown, and the break a pause can end in.
---

Metronomo carries three pieces of timing beyond the pulse itself: bars counted in before
practice starts, an alarm that repeats, and a pause that stops the transport. All three
are saved with the Groove, and the pause can end in a break that holds you there.

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
Count**, with its own **⟲**. What that button does depends on **Play after rest**, the
switch under **Settings → Preferences → Pause**:

| Play after rest | Stopped | Playing |
| --- | --- | --- |
| **On** (default) | Restarts the countdown and resumes play, counted in. | Counts the Groove in again, mid-run. With no count-in set, restarts the countdown only. |
| **Off** | Restarts the countdown. Nothing starts playing. | Restarts the countdown. Play carries on. |

## Breaks

A pause can end in more than a stopped transport. Switch **Customize alerts** on under
**Settings → Preferences → Pause**, and the Pause row's **mm:ss** field gains a **Custom
Alert** box with two fields under it:

| Field | What it does |
| --- | --- |
| **Message** | What the break says, in your words. Two lines, 120 characters. |
| **Forced Pause** | How long the break holds you before you can leave. Seconds, up to a minute. **0** is no hold. |

Both are saved with the Groove, so one Groove can carry a break and another none.

When the countdown reaches its length the transport stops and the break opens over the app.
**Continue** is the only way out, and it is shut until the forced wait reaches **0:00** —
the backdrop and the system back gesture do nothing. While the wait runs, a clear button
beside the countdown gives it up: the reading drops to 0:00 and Continue comes alive.

Leaving a break starts nothing. Playing again, or restarting the countdown, is done back on
the transport, where a spent countdown returns to its full length on the next play.

The wait is dated from the moment the pause was reached, not from the moment you saw the
break. A countdown that ran out with the screen off opens the break with the wait already
partly or wholly spent, and time spent away from the app while a break is open counts
toward it.

**Customize alerts** starts switched off, a break being something to opt into rather than
out of. Switching it off again hides the box and the two fields, stops any pause from
opening a break, and closes one already open — without clearing what a Groove had set.
Switch it back on and the Groove's break is there again.

## Both rows, both limits

**Alarm** and **Pause** are the same row: a **none | every** switch over an **mm:ss**
field. Switching either on for the first time offers **1:00**. Both fields top out at
**120:59**.

Two edges worth knowing:

- A **Pause** set to **0:00** switches itself off. A countdown with no time to run is not
  a countdown.
- An **Alarm** set to **0:00** stays switched on and never sounds. It is stored as an
  enabled rule with nothing to fire on.
- A **Custom Alert** saved with no message and no forced wait switches itself off. A break
  with nothing to say and nothing to hold is not a break.
