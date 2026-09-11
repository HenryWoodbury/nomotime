---
layout: ../layouts/Legal.astro
title: Privacy Policy
description: What Metronomo stores on your device, what data you can export, what anonymous usage data it collects, and how to turn that off.
updated: 11 September 2026
version: '1.0.0-beta.3'
---

> **The short version.** Metronomo is a metronome. It works entirely offline. It requires no
> account, no login, and asks for no personal information. Your Grooves and settings stay
> on your device unless you export them to a file yourself. It does collect anonymous usage
> analytics, which you can switch off in **Settings** → **About** → **Analytics**.

This policy covers the Metronomo mobile app for iOS and Android — `com.nomotime.metronomo`
on both — and this website. Metronomo is made by Henry Woodbury, an independent developer.

## What Metronomo does not collect

Metronomo never collects, and has no technical means of collecting:

- Your name, email address, phone number, or other contact details
- Your location
- Your contacts, calendar, messages, or photos

Regarding **audio**:

- Metronomo produces sound; it does not record it
- The app never requests microphone permission, and no recording code exists in it

Regarding **files**:

- Metronomo may export or import "Groove" files, only when instructed by you

Metronomo does not sell your data, does not share it with data brokers, and does not use it
for advertising or for tracking you across other apps or websites.
There are no ads and no advertising SDKs in Metronomo.

## What stays on your device

Everything you create in Metronomo is written to your device's private app storage and is
never uploaded:

| What | What it holds |
| --- | --- |
| Your settings | Theme, beat sound, tempo-slider behavior, pause-timer behavior, volume |
| Your Grooves | Name, tempo, beats, accents, subdivisions, timers |
| Your working state | The app opens where you left it |

The names and settings you give your Grooves are **never transmitted without your permission**.
They leave your device only if you export them yourself (described below).
Metronomo does write a small temporary image to your device's cache folder to draw the tempo
marking on the lock-screen player. The system may clear it at any time as cache.

Local data is removed when you uninstall the app; on Android you can also clear it in
place, via Settings. Metronomo has no cloud backup and no sync.

### Exporting and importing your Grooves

**Settings** → **Utilities** lets you save your Grooves to a file, and read one back. This
is how you move a Groove library to a new device, or keep a copy before clearing the app.

The file holds your saved Grooves and nothing else. It does **not** contain your settings or
Install ID, and will not overwrite settings when imported into a new or existing app install.

Metronomo does not upload the file, and has nowhere to upload it to.

Once written, the Grooves file is **no longer under
Metronomo's control**. It contains your Groove names and settings in readable form. It is not removed
when you uninstall Metronomo or clear the app's storage, and where you copy or back it up
is your choice. Note that other services will have their own privacy policies.

## Anonymous usage analytics

Metronomo sends anonymous usage analytics to **PostHog**, a product-analytics service
operated by PostHog, Inc. in the United States. This provides insight into which
features musicians most use and thus where to target product improvements. You can turn analytics
off at any time in **Settings** → **About** → **Analytics.**

### What is sent

- **Which screens you open** — the app's own screen names only, such as the main screen or
  Settings, along with the name of the screen you came from
- **Which actions you trigger** — metronome start and stop; Groove save, load, rename,
  and delete; data export and import; changes to settings
- **Musical settings as plain numbers** — the tempo, beat count, and subdivision in use when
  you start the metronome or save or load a Groove
- **A random Groove ID** — a meaningless string the app generates for each Groove you save,
  to count repeated use. This ID carries no information about the Groove itself
- **Export and import** — analytics track a count of export and import
  actions and a count of entries in each file, but not the actual file names or locations
- **Whether the app was opened, backgrounded, installed, or updated**
- **Basic technical details** — app version and build number, operating system and its
  version, device type, screen size, language, and time zone
- **A random Install ID** — a meaningless string generated on your device when you first
  install Metronomo
- **Your IP address**, which PostHog's servers necessarily see when your device connects to
  them, as with any internet request. It is not used to identify you

The **Install ID** is never connected to a real identity. You can see yours in **Settings** → **About** → **Install ID**.

### What is never sent

The names of your Grooves, your saved Grooves themselves, beat and subdivision patterns, and anything
else you enter or select are **deliberately excluded**. Metronomo does not record your screen,
does not capture your audio output, and does not read anything outside the app.

### Remote configuration

Metronomo may use PostHog to enable optional features on a case by case basis, using the app install
ID when the app starts. Turning analytics off stops these requests, and optional features
stay at their default setting.

### Turning analytics off

To turn off analytics, open **Settings** → **About** in Metronomo and choose **Don't share** under **Analytics**. Nothing
further is sent from that point, including when you next open the app. Metronomo continues
to work as expected; analytics is not required for any feature to function.

## Permissions Metronomo requests, and why

**On iOS, Metronomo asks you for nothing.** Playing in the background and showing the
player on your lock screen and in Control Center come from the audio session the app
declares, which needs no permission from you. Nothing else in the app has a permission to
ask for, so iOS never prompts you at all.

On Android, Metronomo declares the permissions below. Notification access is the only one
it ever asks you to grant:

| Permission | Why |
| --- | --- |
| Internet | Only to send the anonymous analytics records described above, and only while they are enabled |
| Foreground service &amp; media playback | To keep the click playing when you switch apps or lock the screen |
| Notifications | To show the playback card with your Groove's name and tempo. Metronomo never sends marketing or promotional notifications |
| Draw over other apps &amp; Vibrate | Metronomo uses neither |

On neither platform does Metronomo request **microphone, camera, location, or contacts
access.**

## Children

Metronomo is a general-purpose music tool and is not directed at children under 13. It
knowingly collects no personal information from anyone, children included. If you believe a
child has somehow provided personal information through Metronomo, email
[support@nomotime.com](mailto:support@nomotime.com) and it will be deleted.

## Your choices and your rights

- **Turn analytics off** — Settings → About → Analytics; the complete opt-out
- **Delete everything local** — uninstall Metronomo, which on iOS removes its data with it;
  on Android you can instead use Settings → Apps → Metronomo → Storage → Clear storage.
  Exported files are outside this scope; delete them yourself if you no longer want them
- **Ask what has been collected, or have it deleted** — email
  [support@nomotime.com](mailto:support@nomotime.com) with the **Install ID** shown in
  Settings → About

The Install ID is the only way to locate your analytics records, since nothing else ties them to you. Requests are honored within 30 days.

Depending on where you live, you may have additional rights over your data under laws such
as the GDPR or the CCPA — including access, correction, deletion, and objection. The
lawful basis for the analytics described here is legitimate interest in maintaining and
improving the app. You may switch analytics tracking off at any time and request captured data be
deleted as described above; you will not be treated differently for doing so.

## International transfer

If you use Metronomo outside the United States and leave analytics enabled, the anonymous
data described above is processed on PostHog's servers in the United States.

## Data retention

Analytics records are retained by PostHog under its standard retention policy and are
deleted on request. Data stored on your device is kept until you delete it, and a backup
file you exported is kept until you delete that file.

## Security

Analytics are transmitted over HTTPS. Data on your device is protected by the app sandbox
that iOS and Android each enforce, which prevents other apps from reading it. No method of
transmission or storage is perfectly secure, and no absolute guarantee is offered.

## Changes to this policy

Material changes will be posted here with a new version number and date. The version and date at
the top of this page always reflect the current policy.

## Contact

[support@nomotime.com](mailto:support@nomotime.com)
