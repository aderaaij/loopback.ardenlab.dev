# loopback.ardenlab.dev

The website for [Loopback – Running Coach](https://github.com/aderaaij/loopback-training-app):
landing page, [privacy policy](https://loopback.ardenlab.dev/privacy/) and
[support](https://loopback.ardenlab.dev/support/).

An [Astro](https://astro.build) site that builds to static HTML in `dist/`. No UI
framework: the pages are Astro components and Markdown, and the animation is a small
script using [Motion](https://motion.dev).

- `src/pages/index.astro` is the landing page; `privacy.md` and `support.md` are
  Markdown rendered through `src/layouts/Doc.astro`.
- `src/layouts/Base.astro` holds the shared head, header and footer.
- `src/components/Phone.astro` draws an iPhone round an app screenshot.
- `src/scripts/motion.ts` does the entrance and scroll animation and plays the background
  footage. It is skipped under `prefers-reduced-motion`, and the pages are complete
  without it.
- `src/assets/` holds images Astro resizes at build time: the app screenshots and the
  still frames shown before a clip plays.
- `public/` holds files served as they are (fonts, logo, icons, video).

## Develop

```sh
npm install
npm run dev       # Astro dev server with live reload
npm run preview   # build, then serve dist/ through wrangler as Cloudflare would
```

## Deploy

Pushing to `main` deploys automatically through GitHub Actions
(`.github/workflows/deploy.yml`). The workflow needs two repository secrets:
`CLOUDFLARE_API_TOKEN` (a token from the "Edit Cloudflare Workers" template) and
`CLOUDFLARE_ACCOUNT_ID`.

To deploy by hand:

```sh
npm run deploy
```

Either way it deploys to Cloudflare Workers static assets with `loopback.ardenlab.dev`
as a custom domain (see `wrangler.jsonc`).

## Screenshots and footage

The screenshots in `src/assets/screens/` are copies of the plain simulator captures in
the app repository (`AppStore/raw/`, 1320 × 2868); its `AppStore/README.md` explains how
to retake them. The device frame, Dynamic Island and buttons are CSS, so a new capture
only needs to replace the file.

The clips in `public/video/` are stock footage from [Mixkit](https://mixkit.co), used
under the [Mixkit Stock Video Free License](https://mixkit.co/license/#videoFree). Mixkit
also lists clips under a Restricted License that allows personal use only, so check the
licence named on a clip's page before adding one.

| File | Where | Source |
| --- | --- | --- |
| `dusk.mp4` | Behind the hero | [Silhouette of a runner in the city](https://mixkit.co/free-stock-video/silhouette-of-a-runner-in-the-city-608/) |
| `track.mp4` | The "On the run" band | [Runner on a track in slow motion](https://mixkit.co/free-stock-video/runner-on-a-track-in-slow-motion-609/) |

Each is cut to eight seconds at 1280 pixels wide with no audio, and its last second is
cross-faded into its first so the loop has no visible cut:

```sh
ffmpeg -ss START -t 9 -i source.mp4 -filter_complex "[0:v]fps=24,scale=1280:-2,split=3[a][b][c];\
[a]trim=1:8,setpts=PTS-STARTPTS[main];[b]trim=8:9,setpts=PTS-STARTPTS[tail];\
[c]trim=0:1,setpts=PTS-STARTPTS[head];[tail][head]xfade=transition=fade:duration=1:offset=0[x];\
[main][x]concat=n=2:v=1[v]" -map "[v]" -an -c:v libx264 -preset veryslow -crf 33 \
  -pix_fmt yuv420p -movflags +faststart public/video/NAME.mp4
```

A clip's poster in `src/assets/posters/` is a frame taken from the finished file. Clips
play only while on screen, and not at all under `prefers-reduced-motion` or with data
saving on, where the poster shows instead.

## Notes

- The privacy policy has to stay consistent with the app's `PrivacyInfo.xcprivacy` and
  its App Privacy answers in App Store Connect. Update the effective date when the
  app's data handling changes.
- Fonts in `public/fonts/` are Space Grotesk, Hanken Grotesk and JetBrains Mono, each
  under the SIL Open Font License 1.1.
- The name Loopback and the logo are not covered by the app's MIT licence.
