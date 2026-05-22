export type NewsParagraph = string | { html: string };

export interface NewsArticle {
	slug: string;
	title: string;
	image: string;
	readTime: string;
	publishedAt: string;
	excerpt: string;
	paragraphs: NewsParagraph[];
}

/** Card shape used on the homepage news grid. */
export interface NewsPostItem {
	title: string;
	image: string;
	readTime: string;
	href?: string;
}

export function getNewsHref(slug: string): string {
	return `/news/${slug}/`;
}

export const newsArticles: NewsArticle[] = [
	{
		slug: 'design-build-electrical-services',
		title: 'From Concept to Completion: The Advantage of Design and Build Electrical Services',
		image: '/images/news-design-build.jpeg',
		readTime: '1 min read',
		publishedAt: '2025-11-12',
		excerpt:
			'Why a single accountable contractor for design and installation keeps programmes tighter, interfaces clearer, and handover documentation complete.',
		paragraphs: [
			'Design and build electrical delivery puts planning, installation, and commissioning under one accountable team. For industrial and commercial clients, that means fewer gaps between drawings and site reality — and a clearer line of communication when programmes shift.',
			'When NEC Ltd leads a project from concept, we can align cable routes, containment, and distribution early with the wider build. That reduces late rework, protects access routes for other trades, and keeps testing and documentation aligned with what was actually installed.',
			'Whether you are fitting out a new facility or upgrading an existing plant, an integrated approach helps you move from tender to energisation with confidence — and a compliant installation that is ready for the long term.',
		],
	},
	{
		slug: 'niceic-contractor-compliance',
		title: 'Is Your Electrical System Compliant? Three Reasons to Choose a NICEIC Contractor',
		image: '/images/news-compliance.jpg',
		readTime: '1 min read',
		publishedAt: '2025-10-08',
		excerpt:
			'Compliance is not just paperwork — it protects people, operations, and your ability to demonstrate due diligence when it matters.',
		paragraphs: [
			'Electrical compliance underpins safe operation, insurance expectations, and duty-of-care on every site. Working with a NICEIC Approved Contractor gives you independent assurance that work is carried out to recognised standards and inspected appropriately.',
			'First, approved contractors follow robust procedures for design, installation, and verification — reducing the risk of hidden defects that only surface under load or during audit. Second, you receive clear certification and records that support handover, maintenance planning, and future modifications. Third, you gain a partner who understands when escalation, remedial works, or phased upgrades are the right commercial answer — not just the quickest fix.',
			'If you are unsure whether existing installations still meet current requirements, a structured review with a qualified contractor is the sensible starting point before scope or capital spend grows.',
		],
	},
	{
		slug: 'new-nec-website-launch',
		title: 'New website for NEC Ltd Electrical',
		image: '/images/news-new-website.png',
		readTime: '2 min read',
		publishedAt: '2025-09-18',
		excerpt:
			'We have brought our website up to date with the quality of work we deliver — with clearer services, a new projects section, and an easier way to get in touch.',
		paragraphs: [
			'We are pleased to launch a new website for NEC Ltd Electrical. Our aim was simple: bring our online presence up to date with the quality of design and build work we deliver on site, and make it easier for clients and partners to find what they need.',
			{
				html: 'You can now see <a href="/services/">all of our services</a> in one place — from <a href="/services/design-technical/">design and technical</a> through to <a href="/services/power-infrastructure/">power infrastructure</a>, <a href="/services/lighting-systems/">lighting</a>, <a href="/services/security-safety/">security</a>, and <a href="/services/data-communications/">data communications</a>. Each discipline has its own page so you can understand how we support industrial, commercial, and educational projects.',
			},
			{
				html: 'We have also added a dedicated <a href="/projects/">projects section</a>, which we will endeavour to update as and when new projects are finished. Stay tuned as fresh case studies are added over the coming months.',
			},
			{
				html: 'We hope you like the new site. Any feedback is more than welcome — please <a href="/contact/">get in touch via our contact page</a> and let us know what you think.',
			},
			{
				html: 'Thank you to <a href="https://dotwall.co.uk/" target="_blank" rel="noopener noreferrer">dotwall.co.uk</a> and the team for the new site!',
			},
		],
	},
];

export const newsPosts: NewsPostItem[] = newsArticles.map((article) => ({
	title: article.title,
	image: article.image,
	readTime: article.readTime,
	href: getNewsHref(article.slug),
}));

export function getNewsArticle(slug: string): NewsArticle | undefined {
	return newsArticles.find((article) => article.slug === slug);
}

export function getSortedNewsArticles(): NewsArticle[] {
	return [...newsArticles].sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);
}

export function formatNewsDate(isoDate: string): string {
	return new Date(isoDate).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}
