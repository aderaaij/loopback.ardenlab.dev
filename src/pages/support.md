---
layout: ../layouts/Doc.astro
title: Support – Loopback
description: "Help with the Loopback iOS app: connecting to your server, Apple Health permissions, Apple Watch workouts, and where to report a problem."
path: /support/
label: Loopback – Running Coach for iOS
heading: Support
---

<div class="summary"><p>Loopback is a client for a server you host yourself. If you don't have a Loopback Server yet, start with the <a href="https://github.com/aderaaij/loopback-training-server#quick-start">server quick start</a>. The app cannot be used without one.</p></div>

## Report a problem or ask a question

Loopback is maintained by one person in the open, and support happens on GitHub:

- [App issues](https://github.com/aderaaij/loopback-training-app/issues), for anything in the iPhone app: sign-in, syncing, Apple Health, Apple Watch workouts.
- [Server issues](https://github.com/aderaaij/loopback-training-server/issues), for installing or running the server, the dashboard, or connecting an AI assistant.

It helps to include your iOS version, the app version and your server version. Please leave out health data, server addresses and passwords, since issues are public.

If you would rather not post publicly, email [loopback@ardenlab.dev](mailto:loopback@ardenlab.dev).

## Common questions

### The app can't reach my server

- Check the scheme in the sign-in screen. Choose `http` or `https` to match how your server is exposed, and include the port if it isn't the default, for example `8001`.
- On a home network, iOS asks for permission to find devices on your local network the first time. If you declined, turn it on in iOS Settings → Privacy & Security → Local Network → Loopback.
- On a VPN or tailnet, make sure the phone is connected to it. Open the server's dashboard address in Safari on the phone to confirm it is reachable.

### I don't have an account

The app does not create accounts. Whoever runs your Loopback Server creates one for you in the server dashboard, and you sign in with those details.

### My workouts or health data aren't syncing

- Open the Health app → Sharing → Apps → Loopback and check the categories you expect are turned on. iOS doesn't tell the app when read access is denied, so the app can't always warn you.
- In the app's Settings, check that the data domain (Recovery, Body, Daily activity, Nutrition) is switched on.
- Background sync depends on iOS. Opening the app triggers a sync straight away.

### Planned workouts don't appear on my Apple Watch

- Allow workout scheduling when the app asks. Without that permission the app can't place workouts on the watch.
- Scheduled workouts show up in the Workout app on the watch. Give it a minute after the phone syncs and keep the watch near the phone.

### The app says my server is out of date

Newer app features need a newer server. Update the server image and restart it; the [server README](https://github.com/aderaaij/loopback-training-server) covers upgrading.

### How do I delete my data?

Sign out to remove your access token from the phone, or delete the app to remove everything it stored. Data already synced lives on your server and is deleted there. The [privacy policy](/privacy/) has the details.

## TestFlight builds

If you installed Loopback through TestFlight, you can also send feedback from the TestFlight app. Beta builds expire after 90 days; update from TestFlight when a new build is offered.
