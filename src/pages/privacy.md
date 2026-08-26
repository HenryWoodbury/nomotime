---
layout: ../layouts/Legal.astro
title: Privacy Policy
description: What Metronomo stores on your device, what leaves it when you export your grooves, what anonymous usage data it collects, and how to turn that off.
updated: 25 August 2026
version: '1.0.0-beta.2'
---

> **The short version.** Metronomo is a metronome. It works entirely offline. It requires no
> account, no login, and asks for no personal information. Your grooves and settings stay
> on your phone unless you export them to a file yourself. It does collect anonymous usage
> analytics, which you can switch off in **Settings** → **About** → **Analytics**.

This policy covers the Metronomo mobile app for Android (`com.nomotime.metronomo`) and
this website. Metronomo is made by Henry Woodbury, an independent developer. Contact:
[support@nomotime.com](mailto:support@nomotime.com).

## What Metronomo does not collect

Metronomo never collects, and has no technical means of collecting:

- your name, email address, phone number, or any account credentials
- your location
- your contacts, calendar, messages, photos, or files
- **audio.** Metronomo produces sound; it does not record it. The app never requests
  microphone permission, and no recording code exists in it.
- any advertising identifier. There are no ads and no advertising SDKs in Metronomo.

Metronomo does not sell your data, does not share it with data brokers, and does not use it
for advertising or for tracking you across other apps or websites.

## What stays on your device

Everything you create in Metronomo is written to your device's private app storage and is
never uploaded:

| What | What it holds |
| --- | --- |
| Your settings | Theme, beat sound, tempo-slider behaviour, pause-timer behaviour, volume |
| Your grooves | Every groove you save — its name, tempo, beats, accents, subdivisions, and timers |
| Your working state | The app opens where you left it |

The names you give your grooves are **never transmitted** — not in analytics, not anywhere.
They leave your device only if you export them yourself, which is described below.
Metronomo does write a small temporary image to your phone's cache folder to draw the tempo
marking on the lock-screen player; it is replaced each time and never transmitted.

Local data is removed when you uninstall the app or clear its storage via Android
Settings. Metronomo has no cloud backup and no sync.

### Exporting and importing your grooves

**Settings** → **Utilities** lets you save your grooves to a file, and read one back. This
is how you move a groove library to a new phone, or keep a copy before clearing the app.

The file holds your saved grooves and nothing else — their names, tempos, beats, accents,
subdivisions, and timers. It does **not** contain your settings, your Install ID, or your
analytics choice. Importing a file never changes your analytics choice, even if the file
came from someone else's phone.

Metronomo does not upload the file, and has nowhere to upload it to. You choose the folder
it is written to, and Android grants Metronomo access to that one folder at the moment you
choose it. Importing works the same way, on the single file you pick.

Once written, that file is an ordinary file on your device and **no longer under
Metronomo's control**. It contains your groove names in readable form. It is not removed
when you uninstall Metronomo or clear the app's storage, and where you copy, sync, or send
it is your choice — including to services with their own privacy policies.

## Anonymous usage analytics

Metronomo sends anonymous usage analytics to **PostHog**, a product-analytics service
operated by PostHog, Inc. in the United States. This provides insight into which
features musicians most use and where to target product improvements. **You can turn this
off at any time in Settings** → **About** → **Analytics.**

### What is sent

- **Which screens you open** — the app's own screen names only, such as the main screen or
  Settings, together with the screen you came from.
- **Which features you use** — for example, that the metronome was started or stopped, that
  a groove was saved, loaded, renamed, or deleted, that you exported or imported your
  grooves, or that you changed the theme, beat sound, tempo-slider range or behaviour, or
  pause-timer behaviour.
- **Musical settings as plain numbers** — the tempo, beat count, and subdivision in use when
  you start the metronome or save or load a groove, so it is possible to see what tempos and
  meters people work at.
- **A random groove ID** — a meaningless string the app generates for each groove you save,
  so that repeat use of one groove can be counted. It carries nothing of the groove itself,
  and never its name.
- **How many grooves an export or import moved** — how many were written to the file, and
  how many an import added or renamed, together with which of the two import options you
  chose. Counts and that choice only: never their names, and never the file's location.
- **Whether the app was opened, backgrounded, installed, or updated.**
- **Basic technical details** — app version and build number, Android version, device type,
  screen size, language, and time zone.
- **A random Install ID** — a meaningless string generated on your device when you first
  install Metronomo. It is not your name, your email, your phone number, or any advertising
  or device serial ID, and it is never connected to a real identity. You can see yours in
  **Settings** → **About** → **Install ID**.
- **Your IP address**, which PostHog's servers necessarily see when your phone connects to
  them, as with any internet request. It is not used to identify you.

### What is never sent

The names of your grooves, your saved grooves themselves, your tick patterns — the app
records only whether a groove has one, never what it is — and anything else you type are
**deliberately excluded** and never transmitted. Metronomo does not record your screen,
does not capture your taps automatically, and does not read anything outside the app.

A backup file you export yourself does contain your groove names, because that is its
purpose. Metronomo never sends that file anywhere; see
[Exporting and importing your grooves](#exporting-and-importing-your-grooves).

### Remote configuration

Metronomo also asks PostHog which optional features are switched on, using the same Install
ID. This happens when the app starts. Turning analytics off stops these requests, and optional features
stay at their default setting.

### Turning it off

Open **Settings** → **About** in Metronomo and choose **Don't share** under **Analytics**. Nothing
further is sent from that point, including when you next open the app. Metronomo continues
to work exactly the same way — analytics is not required for any feature to function.

## Permissions Metronomo requests, and why

| Permission | Why |
| --- | --- |
| Internet | Only to send the anonymous analytics described above, and only while they are enabled |
| Foreground service &amp; media playback | To keep the click playing when you switch apps or lock the phone |
| Notifications | To show the playback card with your groove's name and tempo. Metronomo never sends marketing or promotional notifications |
| Draw over other apps &amp; Vibrate | Declared by the Android app framework Metronomo is built with; Metronomo uses neither |
| Legacy storage access (Android 12 and earlier) | Declared by a file-handling library and capped at Android 12. Metronomo never asks you to grant it at runtime: exporting and importing use Android's own file picker, which grants access to the single folder or file you choose, when you choose it |

Notifications is the only permission Metronomo ever asks you to grant. Metronomo requests
**no microphone, camera, location, or contacts access.**

## Children

Metronomo is a general-purpose music tool and is not directed at children under 13. It
knowingly collects no personal information from anyone, children included. If you believe a
child has somehow provided personal information through Metronomo, email
[support@nomotime.com](mailto:support@nomotime.com) and it will be deleted.

## Your choices and your rights

- **Turn analytics off** — Settings → About → Analytics. This is the complete opt-out.
- **Delete everything local** — uninstall Metronomo, or use Android Settings → Apps →
  Metronomo → Storage → Clear storage. Any backup file you exported is a separate file and
  is not removed by either; delete it yourself if you no longer want it.
- **Ask what has been collected, or have it deleted** — email
  [support@nomotime.com](mailto:support@nomotime.com) with the **Install ID** shown in
  Settings → About. The Install ID is the only way to locate your analytics records, since nothing
  else ties them to you. Requests are honoured within 30 days.

Depending on where you live, you may have additional rights over your data under laws such
as the GDPR or the CCPA — including access, correction, deletion, and objection. The
lawful basis for the analytics described here is legitimate interest in maintaining and
improving the app. You may switch analytics off at any time and request captured data be
deleted as described above; you will not be treated differently for doing so.

## International transfer

If you use Metronomo outside the United States and leave analytics enabled, the anonymous
data described above is processed on PostHog's servers in the United States.

## Data retention

Analytics records are retained by PostHog under its standard retention policy and are
deleted on request. Data stored on your device is kept until you delete it, and a backup
file you exported is kept until you delete that file.

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
