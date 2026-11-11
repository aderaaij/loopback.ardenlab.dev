import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://loopback.ardenlab.dev",
  trailingSlash: "always",
  markdown: {
    // Keep the policy text exactly as written: no automatic curly quotes or dashes.
    processor: satteri({ features: { smartPunctuation: false } }),
  },
});
