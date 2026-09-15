---
layout: ../../layouts/Doc.astro
title: Count in and timers
description: Set count in, alarm, and pause timers to add precision to your practice.
---

Metronomo shows an Elapsed Time clock for all Grooves and provides three optional timing
functions beyond the pulse itself: a count in before the start of any timers, a periodic
alarm, and a customizable pause.

All optional timing settings are saved with a Groove.

## Elapsed Time

The Elapsed Time clock is the practice stopwatch. **Tap** the
<span class="icon icon-reset" role="img" aria-label="reset"></span> button to restart.
This restarts all timers.

## Count in

**Count in** sets how many bars of the Groove play before the Elapsed Time clock reaches
**0:00**. It runs **0 to 8 bars** with a default of **4**. Use the arrow buttons to advance
the range one number at a time in the indicated direction.

The Elapsed Time clock starts at the negative value of the count in's calculated total,
ensuring the first bar after the count in starts at 0:00. The alarm and pause timers sync
with any Elapsed Time restart.

## Alarm

**Tap** the Alarm **every** selection to enable a repeating alarm. Once enabled, **tap**
the **m:s** reading to open the **Set Time** dialog box. This allows you to set the alarm
timer from 0m, 0s to 120m, 59s.

The alarm's sound is a short rising spike, and it is always tonal regardless of the
**Beat** preference (see [Sound and volume](/docs/sound)).

## Pause

**Tap** the Pause **every** selection to enable a forced pause in playback. Once enabled,
**tap** the **m:s** reading to open the **Set Time** dialog box. This allows you to set
the pause timer from 0m, 0s to 120m, 59s.

When a pause is active, the **Pause Count** counts up to the chosen time then pauses play.

At any time you can **tap** the Pause Count
<span class="icon icon-reset" role="img" aria-label="reset"></span> button to restart the
pause timer. What that button does depends on the [Preferences](/docs/settings) setting
**Play after rest**:

- **On**: Resets the pause timer and resumes play with count in.
- **Off**: Resets the pause timer only. To resume play, **tap** the play button.

## Breaks

A pause event may be augmented with alert messaging and an enforced break. This option
is turned off by default. Use the [Preferences](/docs/settings) setting **Customize
alerts** to enable it.

When turned on, the **Set Time** dialog box for Pause includes a **Custom Alert** checkbox.

**Tap** the checkbox to enable a **Message** field and a **Forced Pause** timer. These work
as follows:

- **Message**: Key in your own alert message. Two lines, 120 characters.
- **Forced Pause**: Set a forced break from **0s** to **60s**. This sets a countdown timer
  in the Custom Alert dialog box.

The Forced Pause timer disables closing the dialog box until its countdown reaches 0:00.
The countdown can be overridden manually.

Closing the dialog box does not restart play. That is done manually by a **tap** on the
play button or the Pause Count
<span class="icon icon-reset" role="img" aria-label="reset"></span> button.

## Handling zero durations

Zero-duration settings work as follows:

- A **Pause** set to **0:00** switches itself off. A countdown with no time to run is not
  a countdown.
- An **Alarm** set to **0:00** never sounds. It is stored as an enabled rule with nothing
  to fire on.
- A **Custom Alert** saved with no message and no forced wait switches itself off. A break
  with nothing to say and nothing to hold is not a break.
