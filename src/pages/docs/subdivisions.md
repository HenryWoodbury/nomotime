---
layout: ../../layouts/Doc.astro
title: Subdivisions
description: Insert a tick track between beats; customize it to generate specific rhythms.
---

A subdivision divides each beat into evenly spaced ticks. The **Subs** row sets that count.
**Tap** a count to immediately apply that number of ticks. **Press and hold** a count to set
a custom accent pattern.

## Choosing a count

**Subs** runs from **1 to 8** ticks, the beat itself included as the first:

| Subs | What lands between beats |
| --- | --- |
| 1 | Nothing. The beat alone (the default for a new Groove). |
| 2 | One tick, halfway between beats. Eighths against a quarter-note. |
| 3 | Two ticks. Triplets. |
| 4 | Three ticks. Sixteenths. |
| 5–8 | Four through seven ticks. |

The ticks are spaced evenly across the beat. There is no swing setting; a swing rhythm is
created by muting selected ticks and/or beats rather than by changing their timing.

The row shows five counts at a time. **Tap** the arrow at either end of the row to advance
or retreat by one count, or **press and hold** an arrow to jump to that end of the scale. If
the currently selected count has moved out of view, a dot above an arrow indicates in which
direction it lies.

## Customizing the accents

**Press and hold** a count in the **Subs** row to open the **Edit Subdivisions** dialog.
Except for the first, each tick in the subdivision can be tapped to advance it through the
same accent levels as beats:

**Tick → Soft → Medium → Strong → Mute → Tick**

The first tick is the beat’s own place in the pattern. To change it, use [the
bar](/docs/beats).

Changes preview live, so a pattern can be heard while it is drawn. Select **Cancel** to
return to the previous pattern, **Save** to update.

## Every count keeps its own pattern

A tick pattern is tied to the count it modified, and a Groove saves each subdivision
separately.
