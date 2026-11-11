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
- `src/scripts/motion.ts` does the entrance and scroll animation. It is skipped under
  `prefers-reduced-motion`, and the pages are complete without it.
- `public/` holds files served as they are (fonts, logo, icons).

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

## Notes

- The privacy policy has to stay consistent with the app's `PrivacyInfo.xcprivacy` and
  its App Privacy answers in App Store Connect. Update the effective date when the
  app's data handling changes.
- Fonts in `public/fonts/` are Space Grotesk, Hanken Grotesk and JetBrains Mono, each
  under the SIL Open Font License 1.1.
- The name Loopback and the logo are not covered by the app's MIT licence.
