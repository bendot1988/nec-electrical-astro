export interface NavLink {
	href: string;
	label: string;
}

export interface ServiceCardItem {
	title: string;
	image: string;
	description: string;
	points: string[];
	category: 'design' | 'power' | 'lighting' | 'security' | 'data';
	href?: string;
}

export interface InfoCardItem {
	title: string;
	description: string;
	image?: string;
}

export interface NewsPostItem {
	title: string;
	image: string;
	readTime: string;
	href: string;
}

export const pageTitle = 'NEC Ltd Electrical | Design and Build Electrical Services';
export const pageDescription =
	'NICEIC Approved Contractor delivering complete design and build electrical services across industrial, commercial, and educational sectors.';

export const navLinks: NavLink[] = [
	{ href: '#about', label: 'About Us' },
	{ href: '#services', label: 'Services' },
	{ href: '/projects/', label: 'Projects' },
	{ href: '/health-safety/', label: 'Health & Safety' },
	{ href: '/locations/', label: 'Locations' },
	{ href: '/contact/', label: 'Contact' },
];

export const serviceCards: ServiceCardItem[] = [
	{
		title: 'Design & Technical',
		image: '/images/service-design-technical.jpg',
		description: 'Comprehensive planning and documentation services.',
		points: ['Full in house design services', 'AutoCad drawings', 'Testing & commissioning', 'O&M documentation'],
		category: 'design',
		href: '/services/design-technical/',
	},
	{
		title: 'Power Infrastructure',
		image: '/images/service-power-infrastructure.jpg',
		description: 'Robust high and low voltage solutions.',
		points: [
			'HV distribution and switchgear',
			'LV distribution and switchgear',
			'Power installation',
			'Cable management',
			'PV installation',
			'Lightning protection',
		],
		category: 'power',
		href: '/services/power-infrastructure/',
	},
	{
		title: 'Lighting Systems',
		image: '/images/service-lighting-systems.jpeg',
		description: 'Modern, efficient lighting solutions.',
		points: ['Lighting and emergency lighting', 'Lighting control', 'External lighting'],
		category: 'lighting',
		href: '/services/lighting-systems/',
	},
	{
		title: 'Security & Safety',
		image: '/images/service-security-safety.jpg',
		description: 'Protecting your assets and people.',
		points: ['Fire alarms', 'Security alarms', 'CCTV systems', 'Access door entry systems'],
		category: 'security',
		href: '/services/security-safety/',
	},
	{
		title: 'Data & Communications',
		image: '/images/service-data-communications.jpeg',
		description: 'Connectivity and specialized systems.',
		points: ['Data containment', 'TV system', 'Hearing & Induction Loops'],
		category: 'data',
		href: '/services/data-communications/',
	},
];

export const differentiators: InfoCardItem[] = [
	{
		title: 'Complete Design and Build Expertise',
		description:
			'We deliver the complete electrical package from initial concept to practical completion. Our involvement from the tender stage ensures seamless coordination and the best long-term electrical solutions.',
	},
	{
		title: 'Unwavering Commitment to Quality',
		description:
			'As a NICEIC Approved Contractor, we pride ourselves on an exceptionally high standard of workmanship and design services for all electrical contracts. We aim to meet and excel your project expectations.',
	},
	{
		title: 'Trusted Safety and Professionalism',
		description:
			'Our sites are managed by SSSTS-credentialed supervisors and regularly audited by our Health & Safety Consultant. We are a CHAS accredited company, ensuring a safe working environment and compliant project delivery.',
	},
];

export const accreditations: InfoCardItem[] = [
	{
		title: 'NICEIC Approved Contractor',
		image: '/images/accreditation-niceic.jpg',
		description:
			'We are a registered member of the NICEIC Approved Contractor scheme. This certifies our competence in the design, installation, and commissioning of all electrical installations to the safety standard BS 7671.',
	},
	{
		title: 'CHAS Accredited Contractor',
		image: '/images/accreditation-chas.jpg',
		description:
			'Our CHAS accreditation confirms our commitment to robust health and safety procedures on every project. This assures clients that we have been independently audited and comply with the necessary H&S legislation.',
	},
	{
		title: 'ECS / CSCS',
		image: '/images/accreditation-ecs-cscs.jpg',
		description: 'Our teams are fully equipped and trained to operate safely and professionally across all site environments.',
	},
];

export const newsPosts: NewsPostItem[] = [
	{
		title: 'From Concept to Completion: The Advantage of Design and Build Electrical Services',
		image: '/images/news-design-build.jpeg',
		readTime: '1 min read',
		href: '#',
	},
	{
		title: 'Is Your Electrical System Compliant? Three Reasons to Choose a NICEIC Contractor',
		image: '/images/news-compliance.jpg',
		readTime: '1 min read',
		href: '#',
	},
	{
		title: 'Sparking Up Our Digital Presence: Welcome to the New NEC Ltd Website',
		image: '/images/news-digital-presence.jpeg',
		readTime: '1 min read',
		href: '#',
	},
];

export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'Electrician',
	name: 'NEC Ltd Electrical',
	url: 'https://dotwall.dev/nec/',
	logo: 'https://dotwall.dev/nec/images/logo-blue.svg',
	description: pageDescription,
	telephone: '+44 1536 417807',
	email: 'enquries@necltd.net',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '81A Charles Street',
		addressLocality: 'Kettering',
		addressRegion: 'Northamptonshire',
		postalCode: 'NN16 9RL',
		addressCountry: 'GB',
	},
	areaServed: 'United Kingdom',
	sameAs: ['https://dotwall.dev/nec/'],
};

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'NEC Ltd Electrical',
	url: 'https://dotwall.dev/nec/',
	publisher: {
		'@type': 'Organization',
		name: 'NEC Ltd Electrical',
	},
};
