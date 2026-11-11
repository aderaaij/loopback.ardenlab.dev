---
layout: ../layouts/Doc.astro
title: Privacy Policy – Loopback
description: What the Loopback iOS app reads from Apple Health, where it sends it, and what the developer receives (nothing).
path: /privacy/
label: Loopback – Running Coach for iOS
heading: Privacy Policy
effective: 10 November 2026
---

<div class="summary"><p>Loopback sends your health and training data to one place: the server whose address you type into the app. That server is run by you, or by someone you trust, and not by the developer. The developer of Loopback receives none of your data, and the app contains no analytics, advertising or tracking.</p></div>

## Who this policy covers

This policy covers the Loopback iOS app ("the app"), published by Arden de Raaij ("the developer"). It does not cover the Loopback Server you connect the app to. Whoever operates that server decides how the data on it is stored, secured and shared. If that is not you, ask them.

## What the app reads from Apple Health

The app asks for read access to Apple Health, grouped into five domains. Training is required for the app to work. You choose the other four during setup and can switch them on or off later under Settings in the app. The app only requests the Health types for the domains you have turned on.

- **Training (required):** workouts of all types with their duration, distance and energy; workout routes, which contain GPS location recorded during the workout; heart rate; running speed, power, stride length, vertical oscillation and ground contact time; walking and running distance; and workout effort ratings.
- **Recovery:** sleep duration and sleep stages, resting heart rate, heart rate variability, respiratory rate and blood oxygen.
- **Body:** weight, body fat percentage, lean body mass and VO₂ max.
- **Daily activity:** step count, active energy and resting (basal) energy.
- **Nutrition:** food and drink logged in other apps: energy, protein, carbohydrates, fat, saturated fat, fibre, sugar, sodium, cholesterol, potassium, calcium, iron, magnesium, vitamin C, caffeine and water.

The App Store version of the app does not write anything to Apple Health. It does schedule planned workouts on your Apple Watch through Apple's WorkoutKit, if you allow it.

## Other information the app handles

- **Your server address and sign-in:** the address of your Loopback Server and the username and password you enter. The password is sent to your server to sign in and is not stored on the phone. The access token your server returns is stored in the iOS Keychain on your device.
- **Training plan and feedback:** the plans and workouts the app downloads from your server, and what you enter in the app, such as why you missed a workout or whether you moved or skipped one.
- **Settings:** your preferences and sync bookkeeping, stored on your device.
- **A diagnostic network log:** a record of the app's recent requests to your server, kept on your device so you can troubleshoot a connection. It is not sent anywhere.

## Where your data goes

The app sends the data above to the Loopback Server at the address you configured, and to no other destination. The developer does not operate that server and has no access to it or to your data. There is no developer-run cloud service, account system or backup behind the app.

The app does not store your Apple Health data in iCloud.

### AI coaching

The app itself does not send data to any AI provider. The Loopback Server can expose your data to an AI assistant that you, or your server's operator, choose to connect to it. If you do that, the data the assistant requests is processed by that assistant's provider under their terms. The domain choices you make in the app are passed to your server so that it can limit what the coach is offered, but the server operator ultimately controls what the server does.

### Connection security

The app lets you connect to your server over HTTPS or plain HTTP, because many self-hosted servers sit on a private network such as a home LAN or a VPN. Data sent over plain HTTP is not encrypted by the app. Use HTTPS, or an encrypted private network, whenever the connection leaves a network you control.

## What the developer collects

Nothing. The app has no analytics, no advertising, no tracking and no third-party SDKs that transmit data. Your health data is never used for advertising, marketing or data mining, and it is never sold or shared with data brokers.

Two things are handled by Apple, under Apple's own privacy policy, and reach the developer only if you choose to share them:

- If you install the app through TestFlight, Apple may share crash reports and any feedback or screenshots you submit, along with the email address you used if you were invited by email.
- If you have enabled "Share with App Developers" in iOS settings, Apple provides aggregated, non-identifying crash and usage statistics.

If you contact the developer for support, by email or through a GitHub issue, the developer sees whatever you choose to include, including your email address if you write by email. Please do not post health data or server credentials in a public issue.

## How long data is kept, and how to delete it

- **On your phone:** signing out in the app removes your access token. Deleting the app removes everything it stored on the device.
- **In Apple Health:** the app does not change or delete your Health data. You can withdraw the app's access at any time in the Health app under Sharing, or in iOS Settings.
- **On your server:** data already synced stays on your Loopback Server until it is deleted there. Turning a domain off in the app stops further syncing of that domain. Deleting what is already stored is done on the server, by you or its operator.

Because the developer holds no data about you, there is nothing for the developer to export, correct or erase. Requests about data on a server should go to the person who operates it.

## The review demo server

For App Store and TestFlight review, the developer may temporarily run a demonstration server containing synthetic data for a fictional athlete. It is intended for Apple's reviewers. Do not sign in to it with the app on a device holding your real Health data, as the app would sync that data to it.

## Children

The app is not directed at children under 13, and the developer does not knowingly collect information from anyone, including children.

## Changes to this policy

If the app starts handling data differently, this page will be updated and the effective date above will change. The history of this page is public in the project's source repository.

## Contact

Questions about this policy can be sent to [loopback@ardenlab.dev](mailto:loopback@ardenlab.dev), or raised through the [app's issue tracker on GitHub](https://github.com/aderaaij/loopback-training-app/issues). See the [support page](/support/) for other help.
