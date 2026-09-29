import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production origin: set the final domain in this one place only.
const site = 'https://tbilisipeacebridge.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ka',
        locales: { ka: 'ka-GE', en: 'en-US', ru: 'ru-RU' }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
