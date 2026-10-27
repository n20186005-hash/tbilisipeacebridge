# Bridge of Peace visitor guide

Independent nonprofit educational guide in Georgian, English and Russian. Astro Cloudflare SSR preserves the three existing visitor pages and supplies a real noindex error response.

Use the exact Node and pnpm versions in package.json. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`, then the existing Wrangler deployment command. The default Worker guard runs before adapter asset handling; generated configuration is in dist/server.

The page loads Google Analytics without a preference selector and embeds Google Maps. Hosting analytics are separate. Presence of a script is not evidence of successful delivery.

Photo sources and per-file rights are recorded in PHOTO-CREDITS.md and linked beside displayed images. Historical photographs do not establish current conditions.
