# loopback.ardenlab.dev

The website for [Loopback – Running Coach](https://github.com/aderaaij/loopback-training-app):
landing page, [privacy policy](https://loopback.ardenlab.dev/privacy/) and
[support](https://loopback.ardenlab.dev/support/).

Plain static HTML in `public/`, no build step.

## Preview

```sh
npx wrangler dev
```

## Deploy

Pushing to `main` deploys automatically through GitHub Actions
(`.github/workflows/deploy.yml`). The workflow needs two repository secrets:
`CLOUDFLARE_API_TOKEN` (a token from the "Edit Cloudflare Workers" template) and
`CLOUDFLARE_ACCOUNT_ID`.

To deploy by hand:

```sh
npx wrangler deploy
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
