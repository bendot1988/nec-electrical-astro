export const SITE_ORIGIN = 'https://www.necltd.net';
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

/** Trim copy to a safe SEO length without breaking mid-word when possible. */
export function truncateSeo(text: string, maxLength: number): string {
	const normalized = text.replace(/\s+/g, ' ').trim();
	if (normalized.length <= maxLength) return normalized;

	const slice = normalized.slice(0, maxLength - 1);
	const lastSpace = slice.lastIndexOf(' ');
	return `${(lastSpace > maxLength * 0.6 ? slice.slice(0, lastSpace) : slice).trim()}…`;
}

export function resolveCanonicalUrl(pathname: string, site?: URL | string, explicit?: string): string {
	if (explicit) {
		return explicit.endsWith('/') ? explicit : `${explicit}/`;
	}

	const siteUrl = typeof site === 'string' ? site : site?.href ?? SITE_ORIGIN;
	const base = siteUrl.replace(/\/$/, '');
	let path = pathname || '/';

	if (!path.startsWith('/')) path = `/${path}`;
	if (path !== '/' && !path.endsWith('/')) path = `${path}/`;

	return `${base}${path === '/' ? '/' : path}`;
}

export function resolveOgImageUrl(imagePath: string, site?: URL | string): string {
	const siteUrl = typeof site === 'string' ? site : site?.href ?? SITE_ORIGIN;
	const base = siteUrl.replace(/\/$/, '');
	if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
	return `${base}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
}

export { DEFAULT_OG_IMAGE };
