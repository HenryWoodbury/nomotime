---
layout: ../../layouts/Doc.astro
title: Beats and accents
description: How a bar is built in Metronomo — one to sixteen beats, each set to one of five accent levels.
---

A bar in Metronomo is a count of beats and nothing more. There is no time signature to
choose, no numerator over a denominator: you set how many beats the bar holds, then set
how hard each one lands.

## The bar

The row of vertical bars at the top of the Grooves screen is the bar itself. It holds
**1 to 16 beats**. A new Groove starts at four, with the first beat **Strong** and the
rest **Normal**.

The **+** and **−** buttons at the ends add and remove beats. Beats are always added and
removed at the **end** of the bar, and a beat added this way arrives at **Normal** —
adding a beat never disturbs the accents already drawn. The buttons disable themselves at
1 and at 16 rather than refusing a press silently.

During playback the bar animates through each beat in turn.

## The five accent levels

Tap any beat to advance it to the next level. The order wraps:

**Strong → Normal → Weak → Tick → Mute → Strong**

| Level | Height | What it is |
| --- | --- | --- |
| **Strong** | 3 | The loudest and highest. Where a downbeat goes. |
| **Normal** | 2 | The default for every beat but the first. |
| **Weak** | 1 | Present but backgrounded. |
| **Tick** | ½ | Half the height of Weak, and lower in pitch. |
| **Mute** | ½ | Silent, and drawn hollow so you can still see the beat is there. |

The levels differ in both loudness and pitch, so a bar has shape rather than one loud
click and a row of identical quiet ones. What each level actually sounds like is on
[Sound and volume](/docs/sound).

**Mute** is the one that does something a volume control cannot: it silences a beat
deliberately and leaves you to keep time across the gap.

## Meters without notation

Beats per bar and an accent on each carries the same information a time signature does,
minus the notation. A 7/8 bar accented 3+2+2 is seven beats with **Strong** on the first,
fourth, and sixth. Compound meters are built by setting
[subdivisions](/docs/subdivisions) and accenting the group heads.

The accent list always has exactly one entry per beat. Removing a beat drops its accent;
the app keeps the two in step, and a backup file that gets them out of step is trimmed or
padded on import rather than refused — see [Export and import](/docs/export).
