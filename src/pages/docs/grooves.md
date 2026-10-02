---
layout: ../../layouts/Doc.astro
title: Grooves
description: Save your rhythms to named assets you can replay, modify, and export.
---

A **Groove** is literally the rhythm track on the Metronomo screen. Under the "let's groove"
experience, Metronomo allows ad hoc practice with your edits saved for the next time you
open the app.

Grooves can be named and saved to a local library on your own device.

For exporting and importing Grooves, see [Export and import](/docs/export).

## What a Groove holds

- **Name** is the title of a saved Groove; names must be unique, case insensitive
- **Tempo** of 20–480 BPM (see [Tempo](/docs/tempo))
- **Beats and accents** as the repeated bar (see [Beats and accents](/docs/beats))
- **Subdivision** as slots per beat (see [Subdivisions](/docs/subdivisions))
- **Count in** of 0–8 bars (see [Count in and timers](/docs/timers))
- **Alarm and Pause** timers (see [Count in and timers](/docs/timers))

## What belongs to the app

Some settings are stored either as device state or as your personal preferences. Loading a
Groove does not change them, and none of them appear in an [export file](/docs/export).
These include:

- **Volume and mute**, maintained as device state
- **Timbre**, percussive or tonal
- **Appearance**, system, light, or dark
- **BPM slider resolution**, a 20–100 BPM window
- **Apply changes**, when an edit reaches playback
- **Pause** behaviors: restart, alerts, and pause clear
- **Anonymous analytics** opt-out

## The working Groove

The working Groove is stored as you go and restored when you next open the app. Closing
Metronomo mid-session does not lose the rhythm you were building.

## Saved Grooves

Save a Groove via the <span class="icon icon-menu" role="img" aria-label="menu"></span>
button menu. On an unsaved Groove the menu offers **Load Groove** and **Save Groove**.

**Save Groove** asks for a name. A name already in your library is refused, case
insensitive.

Once a Groove is saved and loaded, the header carries its name and the menu provides the
following options:

| Option | What it does |
| --- | --- |
| **Save&nbsp;Groove** | Opens the Save dialog box. |
| **Rename&nbsp;Groove** | Renames the loaded Groove. Unsaved edits stay unsaved. |
| **Revert&nbsp;Groove** | Discards your edits and restores the Groove as it was last saved. Requires confirmation. Disabled until there is an edit. |
| **Delete&nbsp;Groove** | Removes the loaded Groove from the Groove library. Requires confirmation. |
| **Load&nbsp;Groove** | Opens the Groove library to select a saved Groove. |
| **Let's&nbsp;Just&nbsp;Groove** | Returns to the unloaded Groove state. Requires confirmation if there are working edits to a loaded Groove. |

### Saving a loaded Groove

**Save Groove** on a loaded Groove opens on the Groove's name and two choices:

- **Update** writes your edits over the saved Groove. Edit the name field to rename the
  Groove, with edits, or just as an overwrite.
- **Save as new Groove** saves the Groove, with or without edits, under a new name and loads
  it. The new name defaults to the old, plus an appended number, for example: *Waltz (1)*.
  This can be edited.

Either way, the name must be unique in your library.

## Loading a Groove

**Load Groove** opens your library and lists your saved Grooves. Each entry shows the
Groove's name and a summary of its settings.

Use **Find** to filter the list by name. Find is a simple text search that matches any
character sequence in a Groove name, ignoring case. For example, `huff` would find both
*Slow Shuffle* and *Huff the Haptic Dragon*.

The same screen offers **Let's Just Groove** at the top as a route to the ad hoc experience.

## Losing work

Three menu options can throw away unsaved edits to a loaded Groove: **Revert Groove**,
**Load Groove**, and **Let's Just Groove**. If there are unsaved edits, each of these
actions requires confirmation before continuing.

The Groove library is saved in Metronomo's private storage on your device. Uninstalling the
app or clearing its storage (on Android) deletes saved Grooves permanently; there is no
cloud sync. Use [Export](/docs/export) to save a copy of your library any time you want.
