// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_ORIGIN = 'https://www.necltd.net';

// https://astro.build/config
export default defineConfig({
	site: SITE_ORIGIN,
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/style-guide'),
		}),
	],
});
