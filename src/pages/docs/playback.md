---
layout: ../../layouts/Doc.astro
title: Playback
description: Press Play and Pause to start and stop like any other player.
---

Press the <span class="icon icon-play" role="img" aria-label="play"></span> button to start.
Once it shows <span class="icon icon-pause" role="img" aria-label="pause"></span>, press it
again to stop.

## How the click is timed

When you press play, Metronomo renders one whole bar of the Groove into an audio buffer, and
hands that buffer to the audio engine to loop. This avoids the drift and misfires of a
per-click timer.

The visual animation across the bar follows the audio rather than leading it: the highlight
is drawn from the playback position as reported by the audio engine.

Metronomo cannot promise absolute accuracy. Timing still depends on your device and its
audio configuration.

## Changing a Groove while it plays

A change to **Tempo**, **Beats**, or **Subs** changes the length of the bar. **Settings →
Preferences → Apply changes** sets when you hear it:

- **Restart measure** (default): Immediately starts a new bar with the change.
- **Apply at end of measure**: Allows the current bar to finish, then applies the change to
  the next.

Neither option touches the Elapsed Time clock, the alarm, or the pause timer.

During a count in, a change restarts the count in.

## When the screen sleeps

Playback continues when you leave Metronomo or your screen goes dark.

On **Android**, the app declares the audio as media playback to keep the audio alive in the
background.

On **iOS**, the app runs a playback audio session, which keeps the app scheduler running
with the screen locked.

While it plays, a card appears on your lock screen:

| Line | What it shows |
| --- | --- |
| Title | The Groove's name, or **Metronomo** if the rhythm you are playing has not been named. |
| Subtitle | The Groove's profile — for example, `4 beats · 120 BPM`. |
| Description | The tempo marking for that tempo, such as *Allegro* (see [tempo marking](/docs/tempo)). |

## Permissions

On **Android**, Metronomo asks for the `POST_NOTIFICATIONS` permission the first time the
playback card appears.

On **iOS**, no extra permissions are requested.

Metronomo does not ask for **microphone access** on either platform, and contains no
recording code.
