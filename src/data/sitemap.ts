import { serviceCards } from './home';

export interface SitemapPage {
	label: string;
	href: string;
	description?: string;
}

export interface SitemapColumn {
	kicker: string;
	title: string;
	intro?: string;
	pages: SitemapPage[];
}

const servicePages: SitemapPage[] = [
	...serviceCards.map((s) => ({
		label: s.title,
		href: s.href ?? '/#services',
		description: s.description,
	})),
	{
		label: 'Custom electrical work',
		href: '/custom-electrical-work/',
		description: 'Tell us what you need for bespoke electrical scopes.',
	},
];

export const sitemapColumns: SitemapColumn[] = [
	{
		kicker: 'Start here',
		title: 'Home & sections',
		intro: 'Jump into the main homepage story, services grid, and enquiry form.',
		pages: [
			{ label: 'Homepage', href: '/', description: 'Hero, services overview, accreditations, and news.' },
			{ label: 'About us', href: '/#about', description: 'Who we are and how we work with clients.' },
			{ label: 'Services overview', href: '/#services', description: 'Filterable cards for every capability.' },
			{ label: 'Projects', href: '/projects/', description: 'Featured case studies and previous NEC work.' },
			{ label: 'Contact', href: '/contact/', description: 'Project enquiry form and direct contact routes.' },
		],
	},
	{
		kicker: 'Capabilities',
		title: 'Service detail pages',
		intro: 'Dedicated pages for each core electrical discipline.',
		pages: servicePages,
	},
	{
		kicker: 'Organisation',
		title: 'Company & policies',
		intro: 'Safety culture, coverage, and formal site policies.',
		pages: [
			{
				label: 'Health & safety',
				href: '/health-safety/',
				description: 'Accreditations, site standards, and training commitments.',
			},
			{
				label: 'Locations',
				href: '/locations/',
				description: 'UK coverage map and regional project presence.',
			},
			{ label: 'Privacy', href: '/privacy/', description: 'How we handle personal data.' },
			{ label: 'Terms', href: '/terms/', description: 'Terms of use for this website.' },
			{ label: 'Cookies', href: '/cookies/', description: 'Cookie usage and preferences.' },
		],
	},
];
