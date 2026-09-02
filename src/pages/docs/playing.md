---
layout: ../../layouts/Doc.astro
title: Playing
description: Metronomo’s transport, how the click is scheduled against the audio hardware, and what keeps playing when you put the phone down.
---

The transport is one button between the two clocks it governs: **Elapsed Time** on the
left, and **Pause Count** on the right whenever a [pause](/docs/timers) is set. Press it to
start, press it again to stop.

## How the click is timed

Metronomo does not schedule clicks one at a time. When you press play, it renders **one
whole bar of the Groove** — every beat and every subdivision slot, at their exact offsets —
into an audio buffer, and hands that buffer to the audio engine to loop.

The spacing between clicks is therefore fixed when the bar is rendered, and the loop is
driven by the device's audio hardware clock. Nothing re-decides each beat's moment while
you play, so nothing accumulates the drift that per-click scheduling on a general-purpose
timer would.

A master limiter sits at the end of the chain, so a bar with many loud slots in it
compresses rather than clipping.

The animation across the bar follows the audio rather than leading it: the highlight is
drawn from the playback position the audio engine reports.

This is not a promise of absolute accuracy. Timing still depends on your device and its
audio configuration — see the [Terms of Use](/terms) for what that does and does not
promise.

## When the screen sleeps

Playback continues when you leave Metronomo or your screen goes dark. Two things keep it
going. The app runs its audio as media playback, which is what stops Android from killing
it in the background; and while the transport is running it holds a *partial* wake lock,
which keeps the CPU clocked so the scheduler does not freeze when the screen turns off.

A partial wake lock holds the processor, not the display. Your screen still sleeps on its
own schedule — that is the point of taking a partial one rather than a full one — and the
click keeps going after it does. The lock is taken when you press play and released when
you stop.

While it plays, a card appears on your lock screen and in your notification shade, with
three lines:

| Line | What it shows |
| --- | --- |
| Title | The Groove's name, or **Metronome** if the one you are playing has not been named. |
| Subtitle | The Groove's profile — for example, `4 beats · 120 BPM`. |
| Third line | The [tempo marking](/docs/tempo) for that tempo, such as *Allegro*. |

## Permissions

Metronomo's Android manifest declares nine permissions. None of them prompt you except
`POST_NOTIFICATIONS`, which Android asks about the first time the playback card appears.

| Permission | Why it is there |
| --- | --- |
| `FOREGROUND_SERVICE` | Playing while the app is not in front of you. |
| `FOREGROUND_SERVICE_MEDIA_PLAYBACK` | The same, declared as the media-playback kind. |
| `POST_NOTIFICATIONS` | The playback card on the lock screen and in the shade. |
| `WAKE_LOCK` | The partial wake lock described above. |
| `INTERNET` | Sending [anonymous analytics](/privacy), and nothing else. It is unused when you switch analytics off. |
| `VIBRATE` | Nothing in Metronomo. It arrives from the libraries the app is built on. |
| `SYSTEM_ALERT_WINDOW` | The same — a framework default, not a feature. |
| `READ_EXTERNAL_STORAGE`, `WRITE_EXTERNAL_STORAGE` | The same, and both capped at Android 12. [Export and import](/docs/export) use the system file picker, which needs no storage permission. |

It declares **no microphone permission** and contains no recording code. It makes sound; it
never listens.
