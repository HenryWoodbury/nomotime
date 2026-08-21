---
layout: ../layouts/Legal.astro
title: Privacy Policy
description: What Metronomo stores on your device, what anonymous usage data it sends, and how to turn that off.
updated: 20 August 2026
version: '1.0'
---

> **The short version.** Metronomo is a metronome. It works entirely offline. It has no
> account, no login, and asks for no personal information. Your grooves and settings stay
> on your phone. The one thing it sends anywhere is anonymous usage analytics, which you
> can switch off in **Settings → Analytics**.

This policy covers the Metronomo mobile app for Android (`com.nomotime.metronomo`) and
this website. Metronomo is made by Henry Woodbury, an independent developer. Contact:
[support@nomotime.com](mailto:support@nomotime.com).

## What Metronomo does not collect

Metronomo never collects, and has no technical means of collecting:

- your name, email address, phone number, or any account credentials — there are no accounts
- your location
- your contacts, calendar, messages, photos, or files
- **audio.** Metronomo produces sound; it does not record it. The app never requests
  microphone permission, and no recording code exists in it.
- any advertising identifier. There are no ads and no advertising SDKs in Metronomo.

Metronomo does not sell your data, does not share it with data brokers, and does not use it
for advertising or for tracking you across other apps or websites.

## What stays on your device

Everything you create in Metronomo is written to your phone's private app storage and is
never uploaded:

| What | What it holds |
| --- | --- |
| Your settings | Theme, beat sound, tempo-slider behaviour, pause-timer behaviour, volume |
| Your grooves | Every groove you save — its name, tempo, beats, accents, subdivisions, and timers |
| Your session lists | Ordered lists of grooves, if that feature is enabled for you |
| Your last working groove | So the app opens where you left it |

The names you give your grooves and sessions are the only free text in the app, and they
**never leave your device**. Metronomo also writes a small temporary image to your phone's
cache folder to draw the tempo marking on the lock-screen player; it is replaced each time
and never transmitted.

All of this is removed when you uninstall the app or clear its storage from Android
Settings. Metronomo has no cloud backup and no sync.

## Anonymous usage analytics

Metronomo sends anonymous usage analytics to **PostHog**, a product-analytics service
operated by PostHog, Inc. in the United States. This helps a solo developer see which
features musicians actually use and whether anything is broken. **You can turn it off at any
time in Settings → Analytics.**

### What is sent

- **Which screens you open** — the app's own screen names only, such as the main screen or
  Settings.
- **Which features you use** — for example, that the metronome was started or stopped, that
  a groove was saved, loaded, renamed, or deleted, or that you changed the theme, beat
  sound, tempo-slider range, or pause-timer behaviour.
- **Musical settings as plain numbers** — the tempo, beat count, and subdivision in use when
  the metronome starts, so it is possible to see what tempos and meters people work at.
- **Whether the app was opened, backgrounded, installed, or updated.**
- **Basic technical details** — app version and build number, Android version, device type,
  screen size, language, and time zone.
- **A random Install ID** — a meaningless string generated on your device when you first
  install Metronomo. It is not your name, your email, your phone number, or any advertising
  or device serial ID, and it is never connected to a real identity. You can see yours in
  **Settings → Install ID**.
- **Your IP address**, which PostHog's servers necessarily see when your phone connects to
  them, as with any internet request. It is not used to identify you.

### What is never sent

The names of your grooves and sessions, your saved grooves themselves, your tick patterns,
and anything else you type are **deliberately excluded** and never transmitted. Metronomo
does not record your screen, does not capture your taps automatically, and does not read
anything outside the app.

### Turning it off

Open **Settings** in Metronomo and set **Analytics** to off. Nothing further is sent from
that point, including when you next open the app. Metronomo continues to work exactly the
same way — analytics is not required for any feature to function.

## Remote feature configuration

Metronomo also uses PostHog to decide which optional features are switched on. This means a
feature may appear or disappear without you installing an update. If you turn analytics off,
optional features stay at their default setting, which for now means off.

## Permissions Metronomo requests, and why

| Permission | Why |
| --- | --- |
| Internet | Only to send the anonymous analytics described above, and only while they are enabled |
| Foreground service &amp; media playback | To keep the click playing when you switch apps or lock the phone |
| Notifications | To show the playback card with your groove's name and tempo. Metronomo never sends marketing or promotional notifications |
| Wake lock | To keep audio running accurately while the screen is off |
| Vibrate | Standard Android system permission included with the app framework |

Metronomo requests **no microphone, camera, location, contacts, or storage permissions.**

## Children

Metronomo is a general-purpose music tool and is not directed at children under 13. It
knowingly collects no personal information from anyone, children included. If you believe a
child has somehow provided personal information through Metronomo, email
[support@nomotime.com](mailto:support@nomotime.com) and it will be deleted.

## Your choices and your rights

- **Turn analytics off** — Settings → Analytics. This is the complete opt-out.
- **Delete everything local** — uninstall Metronomo, or use Android Settings → Apps →
  Metronomo → Storage → Clear storage.
- **Ask what has been collected, or have it deleted** — email
  [support@nomotime.com](mailto:support@nomotime.com) with the **Install ID** shown in
  Settings. The Install ID is the only way to locate your analytics records, since nothing
  else ties them to you. Requests are honoured within 30 days.

Depending on where you live, you may have additional rights over your data under laws such
as the GDPR or the CCPA — including access, correction, deletion, and objection. The
lawful basis for the analytics described here is legitimate interest in maintaining and
improving the app, and you may object at any time by switching analytics off. Write to the
address above to exercise any of these rights; you will not be treated differently for doing
so.

## International transfer

If you use Metronomo outside the United States and leave analytics enabled, the anonymous
data described above is processed on PostHog's servers in the United States.

## Data retention

Analytics records are retained by PostHog under its standard retention policy and are
deleted on request. Data stored on your device is kept until you delete it.

## Security

Analytics are transmitted over HTTPS. Data on your device is protected by Android's
app-sandbox isolation, which prevents other apps from reading it. No method of transmission
or storage is perfectly secure, and no absolute guarantee is offered.

## Changes to this policy

Material changes will be posted here with a new version number and date, and — where the
change affects what is collected — noted in the app's release notes. The version and date at
the top of this page always reflect the current policy.

## Contact

Henry Woodbury &middot; [support@nomotime.com](mailto:support@nomotime.com)
