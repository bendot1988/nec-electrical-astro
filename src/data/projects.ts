export interface ProjectItem {
	slug: string;
	title: string;
	subtitle: string;
	sector: string;
	value: string;
	duration: string;
	location: string;
	heroImage: string;
	galleryImages: { src: string; alt: string }[];
	excerpt: string;
	scope: { title: string; description: string; icon: string }[];
	href: string;
	tags: string[];
}

export const projects: ProjectItem[] = [
	{
		slug: 'navara-mill',
		title: 'Navara Mill',
		subtitle: 'Full LV electrical installation for a large-scale gluten-free mill',
		sector: 'Food Processing & Industrial',
		value: '£2 million',
		duration: '2 years',
		location: 'Crich, Derbyshire',
		heroImage: '/images/projects/navara-mill/exterior-site-1.png',
		excerpt:
			"A £2 million, two-year electrical installation on one of the UK's leading gluten-free mills — delivering full LV distribution, emergency lighting, fire alarms, and small power across a massive purpose-built facility.",
		scope: [
			{
				title: 'Emergency Lighting & Data',
				description:
					'Full emergency lighting installation across all zones of the facility, designed and installed to BS 5266 compliance, with supporting data infrastructure for control and monitoring.',
				icon: 'light',
			},
			{
				title: 'Fire Alarm Systems',
				description:
					'Addressable fire detection and alarm systems installed throughout the building to BS 5839, ensuring life-safety compliance across the entire production and administration areas.',
				icon: 'fire',
			},
			{
				title: 'Small Power',
				description:
					'Comprehensive small power distribution throughout the facility, serving production machinery, office areas, plant rooms, and specialist equipment supplied by the German machinery contractor.',
				icon: 'power',
			},
			{
				title: 'LV Distribution',
				description:
					'Design and installation of the complete low voltage distribution network, including switchgear, distribution boards, and cable management systems serving a building of significant scale.',
				icon: 'cable',
			},
		],
		galleryImages: [
			{
				src: '/images/projects/navara-mill/exterior-site-1.png',
				alt: 'Navara Mill exterior — green cladded building during construction phase',
			},
			{
				src: '/images/projects/navara-mill/exterior-workers.png',
				alt: 'NEC engineers on site outside the Navara Mill building',
			},
			{
				src: '/images/projects/navara-mill/switchgear-team.png',
				alt: 'NEC Ltd engineers commissioning switchgear panels inside the mill',
			},
			{
				src: '/images/projects/navara-mill/switchgear-engineer.png',
				alt: 'Engineer carrying out switchgear commissioning works',
			},
			{
				src: '/images/projects/navara-mill/cable-tray-curved.png',
				alt: 'Neat cable tray installation with curved bend inside the mill',
			},
			{
				src: '/images/projects/navara-mill/interior-machinery.png',
				alt: 'Interior of the Navara Mill showing Schulze milling machinery and cable containment',
			},
			{
				src: '/images/projects/navara-mill/interior-services.png',
				alt: 'Galvanised steelwork and pipework inside the completed mill building',
			},
			{
				src: '/images/projects/navara-mill/3d-model.png',
				alt: 'Autodesk Navisworks 3D coordination model used during design phase',
			},
			{
				src: '/images/projects/navara-mill/interior-monitor.png',
				alt: 'Site monitor showing progress of interior fit-out at Navara Mill',
			},
			{
				src: '/images/projects/navara-mill/exterior-site-2.png',
				alt: 'Navara Mill exterior showing building scale during construction',
			},
		],
		tags: ['LV Distribution', 'Fire Alarms', 'Emergency Lighting', 'Industrial'],
		href: '/projects/navara-mill/',
	},
];
