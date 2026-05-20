/**
 * Prefix `import.meta.env.BASE_URL` so `/videos/...` and `/images/...` resolve when the site is
 * hosted under a subpath (see `base` in `astro.config.mjs`).
 */
export function withBaseUrl(path: string): string {
	if (!path || path.startsWith('http://') || path.startsWith('https://')) return path;
	const base = import.meta.env.BASE_URL;
	if (!base || base === '/') {
		return path.startsWith('/') ? path : `/${path}`;
	}
	const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
	const p = path.startsWith('/') ? path : `/${path}`;
	return `${trimmed}${p}`;
}
