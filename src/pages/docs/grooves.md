---
layout: ../../layouts/Doc.astro
title: Grooves
description: What a Groove holds in Metronomo, what belongs to the device instead, and how saving, loading, renaming, and deleting work.
---

A **Groove** is a named rhythm you can come back to. Everything you set on the Grooves
screen is part of one, and the app always has exactly one Groove open — the *working*
Groove — whether or not it has been saved.

## What a Groove holds

| | |
| --- | --- |
| Name | What you called it. Names are unique in your library, ignoring case and surrounding spaces. |
| Tempo | 20–480 BPM. See [Tempo](/docs/tempo). |
| Beats and accents | 1–16 beats, one accent level each. See [Beats and accents](/docs/beats). |
| Subdivision | 1–8 slots per beat, and the drawn tick pattern if there is one. See [Subdivisions](/docs/subdivisions). |
| Count in | 0–8 bars. See [Count-in and timers](/docs/timers). |
| Alarm and Pause | Off, or a time each. |

It also carries an id, and the times it was created and last updated.

## What belongs to the device instead

These are yours, not the Groove's. Loading a Groove does not change any of them, and none
of them appear in an [export file](/docs/export):

- Volume and mute
- The **Beat** timbre, percussive or tonal
- **Appearance** — system, light, or dark
- **BPM slider resolution**, and whether tempo applies while sliding
- What the **Pause timer** reset button does
- Whether you share anonymous analytics

The rule is that a Groove describes a rhythm, and a rhythm sounds the same on any device.
How loud it is, and what it looks like while it plays, are properties of where you are
sitting.

## The working Groove

Edits apply immediately — there is no edit mode to enter and no change to commit. The
working Groove is stored as you go and restored when you next open the app, so closing
Metronomo mid-thought does not lose the rhythm you were building.

Until you save it, the working Groove has no name. The header reads **Nomo says, "let's
groove!"**, and the menu offers **Load Groove** and **Save Groove**.

## Saving

**Save Groove** asks for a name. A name already in your library is refused — Metronomo
does not keep two Grooves you cannot tell apart.

Once a Groove is saved and loaded, the header carries its name and two buttons appear:

- **Save Groove** writes your edits back over the saved copy.
- **Reset** throws your edits away and puts back the Groove as it was last saved.

Both stay disabled until there is actually an unsaved edit, so the screen tells you
whether you have diverged without your having to remember.

The menu on a loaded Groove offers more:

| Item | What it does |
| --- | --- |
| **Rename Groove** | Changes the name, nothing else. |
| **Save as New Groove** | Saves the current state under a new name, leaving the original as it was. The name field is offered as `Saved from <name>`. |
| **Delete Groove** | Removes it from the library, after a confirmation. |
| **Load Groove** | Opens the library. |
| **Let's Just Groove** | Starts over from the factory default — 120 BPM, four beats, accent on the first — with nothing loaded and nothing to be unsaved against. |

## Loading

**Load Groove** opens your library as a list. Each entry shows its name and its profile —
`4 beats · 120 BPM` — and marks whether it carries an alarm or a pause.

The **Find** field filters the list by name. It matches anywhere in the name and ignores
case, so `shuf` finds *Slow Shuffle*.

The same screen offers **Let's Just Groove** at the top, for when you opened the library
and decided you would rather start clean.

## Losing work, and not

Three actions on the Grooves screen would throw away unsaved edits: **Reset**, **Load
Groove**, and **Let's Just Groove**. Each stops and asks first — **Abandon Unsaved
Changes?** — and each asks only when there is something to abandon.

The question is asked on the way *into* the library. The **Let's Just Groove** button on the
library screen itself acts immediately, on the grounds that you already answered for it to
get there.

Grooves live in Metronomo's private storage on your phone. Uninstalling the app or
clearing its storage deletes them permanently; there is no cloud copy. That is what
[Export](/docs/export) is for.
