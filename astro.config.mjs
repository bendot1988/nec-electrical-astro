// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_ORIGIN = 'https://dotwall.dev/nec';

// https://astro.build/config
export default defineConfig({
	site: 'https://dotwall.dev/nec',
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/style-guide'),
			serialize(item) {
				const pathname = new URL(item.url).pathname;
				const stripped = pathname.replace(/^\/nec(?=\/|$)/, '') || '/';
				const normalized = stripped.endsWith('/') ? stripped : `${stripped}/`;
				return {
					...item,
					url: `${SITE_ORIGIN}${normalized === '/' ? '/' : normalized}`,
				};
			},
		}),
	],
});
