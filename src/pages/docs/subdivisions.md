---
layout: ../../layouts/Doc.astro
title: Subdivisions
description: One to eight evenly spaced slots per beat in Metronomo, each independently accented, drawn per subdivision count.
---

A subdivision divides each beat into evenly spaced slots. The **Subs** row sets how many,
and holding a count opens the editor where you draw what each slot sounds like.

## Choosing a count

**Subs** runs from **1 to 8**. The count includes the beat itself, which is always the
first slot:

| Subs | What lands between beats |
| --- | --- |
| 1 | Nothing. The beat alone — the default for a new Groove. |
| 2 | One slot, halfway. Eighths against a quarter-note pulse. |
| 3 | Two slots. Triplets. |
| 4 | Three slots. Sixteenths. |
| 5–8 | Four through seven slots, evenly spaced. |

The slots are spaced evenly across the beat. There is no swing setting; an uneven feel is
made by muting slots rather than by moving them.

The row shows **five counts at a time**. The chevrons at either end scroll it by one, and
holding a chevron jumps to that end of the scale. A chevron disables itself once the row
is against an end.

## Drawing the ticks

**Hold** a count in the **Subs** row to open **Edit Subdivisions**. Each slot in the
dialog is tapped to advance it, and the order is its own — a subdivision rests at **Tick**
where a beat rests at **Strong**:

**Tick → Weak → Normal → Strong → Mute → Tick**

Slot 0 is the beat's own place in the grid. It is drawn as an inert placeholder and cannot
be set here, because the beat already sounds from its accent in the bar. In the stored
pattern that slot always reads `mute`, which is what keeps this layer silent on it.

Changes apply live, so a pattern can be heard while it is drawn. **Cancel**, a tap on the
backdrop, and leaving the dialog all put back the ticks as they stood when the hold
landed — including the count the hold moved you off.

## A pattern belongs to one count

A drawn pattern is tied to the number of slots it was drawn for. Change **Subs** to a
different count and the pattern is not lost, only dormant: the row falls back to every
slot at **Tick**, and returning to the count it was drawn for brings the drawing back.
The **Subs** row marks the count a pattern exists for.

A Groove stores **one** pattern. While the dialog is open you can move between counts and
each drawing is held, but the one saved with the Groove is the count you end on.

Drawing every slot back to **Tick** clears the pattern rather than storing it. An undrawn
pattern is no pattern — it would mark the **Subs** row and leave the Groove looking edited
when nothing about it had changed.
