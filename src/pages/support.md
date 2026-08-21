---
layout: ../layouts/Legal.astro
title: Support
description: How to get help with Metronomo, report a bug, request a feature, or have your analytics data deleted.
updated: 20 August 2026
version: '1.0'
---

**Metronomo is in beta testing.** Some rough edges are expected, and reports of them are
the whole point — if something sounds wrong, drifts, or stops when it shouldn't, that is
worth an email even if you are not sure it is a bug.

Metronomo is built and supported by one person. Email
**[support@nomotime.com](mailto:support@nomotime.com)** and you will get a real reply —
usually within a few days, though it may take longer during a busy week. Bug reports and
feature requests are both genuinely welcome.

## Before you write

Including these four things turns most bug reports into one round trip instead of four:

1. **Metronomo version** — shown in **Settings → App version**.
2. **Your device and Android version** — for example, "Pixel 8, Android 15".
3. **Your Install ID** — in **Settings → Install ID**. Tap and hold to copy it. It is an
   anonymous string, not personal information, and it lets a report be matched to what
   actually happened.
4. **What you expected, and what happened instead** — including the tempo, beat count, and
   subdivision you were using, if the problem is about timing or sound.

## Frequently asked

### Why can't I set a time signature?

Metronomo asks for **beats per bar** (1 to 16) and lets you accent each one independently,
which is the same information a time signature carries, minus the notation. A 7/8 bar is
seven beats with the accents where you want them. Compound meters are built by setting
subdivisions and accenting the group heads. It is fewer decisions, and it handles meters
that standard notation makes awkward.

### What do the five accent levels do?

Each beat — and each subdivision within a beat — can be set to **strong**, **normal**,
**weak**, **tick**, or **mute**. They differ in both volume and tone, so a bar has real
shape rather than one loud click and a row of identical quiet ones. **Mute** is the useful
one for practice: silence beats deliberately and make yourself keep time through the gaps.

### What tempos does it cover?

**30 to 420 BPM.** The slider spans a 40-BPM window at a time so you get fine control where
you actually are, and it steps 10 BPM at a time past either end of that window. Tempos also
carry natural-language markings, so you can find *Andante* without knowing it means 80.

### Does the click keep going when I switch apps or lock the screen?

Yes. Metronomo keeps playing in the background and shows a playback card on the lock screen
with the groove's name and tempo marking, so you can start it and put the phone down.

### Is my timing accurate?

Clicks are scheduled against the device's audio hardware clock rather than JavaScript
timers, which is what keeps them from drifting audibly. That said, timing still depends on
your device and its audio configuration — see the [Terms of Use](/terms) for what that does
and does not promise.

### Does Metronomo work offline?

Completely. There is no account, no login, and no network connection required for anything
the app does. The only data it ever sends is optional anonymous analytics.

### How do I turn off analytics?

**Settings → Analytics → off.** Nothing further is sent from that point, including on the
next launch. Every feature keeps working. See the [Privacy Policy](/privacy) for exactly
what is collected while it is on.

### Where are my grooves stored, and can I back them up?

On your phone, in Metronomo's private storage. There is no cloud backup or export yet, so
uninstalling the app or clearing its storage deletes your grooves permanently. Export is on
the list.

### Does Metronomo use my microphone?

No. It requests no microphone permission and contains no recording code. It makes sound; it
never listens.

## Deleting your data

**Data on your device.** Uninstall Metronomo, or go to Android **Settings → Apps →
Metronomo → Storage → Clear storage**. That removes every groove, session, and setting
immediately and permanently.

**Analytics data.** Email [support@nomotime.com](mailto:support@nomotime.com) with the
subject **"Data deletion request"** and include the **Install ID** from Settings. The
Install ID is the only way to find your records — nothing else connects them to you, so a
request without it cannot be fulfilled. Deletion is completed within 30 days and confirmed
by reply. You can also ask what has been collected under your Install ID, and it will be
sent to you.

To stop any further collection right away, switch **Settings → Analytics** off. That takes
effect immediately and does not require emailing anyone.

## Reporting a security issue

If you have found a security or privacy problem in Metronomo, email
[support@nomotime.com](mailto:support@nomotime.com) with the details rather than posting
them publicly, and you will get a response as quickly as possible.
