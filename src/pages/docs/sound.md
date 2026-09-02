---
layout: ../../layouts/Doc.astro
title: Sound and volume
description: What Metronomo’s five accent levels sound like, the two beat timbres, and how volume works.
---

Every click Metronomo makes is synthesized on the spot — there are no samples in the app.
What a click sounds like comes from two things: the accent level of the slot it lands on,
and which of the two timbres is selected.

## The five levels

An accent level sets both loudness and pitch. Louder is also higher, so a bar reads as
shape rather than as volume alone.

| Level | Relative loudness | Where it sits |
| --- | --- | --- |
| **Strong** | 100% | Highest in pitch. |
| **Normal** | 85% | |
| **Weak** | 60% | |
| **Tick** | 60% | As loud as **Weak**, and the lowest in pitch. |
| **Mute** | Silent | Not sounded at all. |

**Tick** and **Weak** carry the same gain deliberately. **Tick** is distinguished by
pitch, not by being quieter, which keeps a busy subdivision row audible instead of letting
it fade under the beats.

## Two timbres

**Settings → Preferences → Beat** picks between them, and the choice belongs to the device
rather than to a Groove.

**Percussive** is the default: a short, dry woodblock — a fundamental with an inharmonic
partial above it and a filtered noise attack, ringing out in well under a tenth of a
second.

**Tonal** is a pitched click: a triangle tone with a second tone an octave below it for
body, giving a fuller and slightly louder sound than the woodblock.

The two run on separate pitch tables, so a level's tone changes with the timbre:

| Level | Percussive | Tonal |
| --- | --- | --- |
| **Strong** | 1050 Hz | 1600 Hz |
| **Normal** | 880 Hz | 1240 Hz |
| **Weak** | 740 Hz | 960 Hz |
| **Tick** | 620 Hz | 720 Hz |

The [alarm](/docs/timers) is the exception to all of this. It is always tonal — a short
tone sweeping upward — whichever timbre is set, so it stays distinct from the click it
interrupts.

## Volume

The volume slider runs from silent to full, with a switch at its left that mutes and
unmutes. Muting remembers where the slider was and puts it back on unmute, so the switch
is not a way to lose your level.

Volume belongs to the **device, not the Groove**. It is not part of what a Groove saves,
it does not change when you load one, and it is not in the [export
file](/docs/export). A Groove that was loud on your phone is not loud by definition when
it lands somewhere else.
