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
		slug: 'dc9',
		title: 'DC9',
		subtitle: 'Technical electrical and mechanical services delivery for a large warehouse facility',
		sector: 'Logistics & Industrial',
		value: 'Major distribution facility project',
		duration: 'Phased delivery',
		location: 'United Kingdom',
		heroImage: '/images/projects/dc9/featured-interior.png',
		excerpt:
			'DC9 included the installation of lighting, emergency lighting, fire alarm systems, and mechanical power infrastructure across a large-scale warehouse environment.',
		scope: [
			{
				title: 'Lighting',
				description:
					'Main lighting installation designed for clear visibility, operational safety, and efficient coverage throughout warehouse zones.',
				icon: 'light',
			},
			{
				title: 'Emergency Lighting',
				description:
					'Emergency lighting systems installed to support compliant evacuation routes and continuity during power disruption scenarios.',
				icon: 'light',
			},
			{
				title: 'Fire Alarm Systems',
				description:
					'Fire detection and alarm infrastructure installed to provide life-safety protection across operational areas.',
				icon: 'fire',
			},
			{
				title: 'Mechanical Power',
				description:
					'Mechanical power supplies delivered to support warehouse plant and associated building services infrastructure.',
				icon: 'power',
			},
		],
		galleryImages: [
			{
				src: '/images/projects/dc9/featured-interior.png',
				alt: 'DC9 warehouse interior with high-level service installation',
			},
		],
		tags: ['Lighting', 'Emergency Lighting', 'Fire Alarms', 'Mechanical Power'],
		href: '/projects/dc9/',
	},
	{
		slug: 'steris',
		title: 'Steris',
		subtitle: 'NHS-focused sterilization facility electrical infrastructure',
		sector: 'Healthcare Infrastructure & Medical Processing',
		value: 'Multi-project partnership',
		duration: 'Third project phase',
		location: 'United Kingdom',
		heroImage: '/images/projects/steris/facility-interior-1.png',
		excerpt:
			'Steris is a global healthcare partner delivering sterilization services for NHS hospital equipment. NEC is currently delivering the third project phase, supporting large-scale warehouse operations with controlled temperature requirements.',
		scope: [
			{
				title: 'Sterilization Facility Support',
				description:
					'Electrical infrastructure supporting incoming and outgoing NHS equipment workflows, including processing spaces where endoscopies and related devices are prepared for return to hospitals.',
				icon: 'power',
			},
			{
				title: 'High-Ceiling Environment Services',
				description:
					'Power and building services coordinated within high-ceiling warehouse areas to maintain reliable operation in controlled-temperature storage and processing zones.',
				icon: 'light',
			},
			{
				title: 'Operational Continuity Infrastructure',
				description:
					'Robust distribution and services planning designed for continuous throughput in a mission-critical healthcare operation with national NHS dependencies.',
				icon: 'cable',
			},
			{
				title: 'Scalable Multi-Phase Delivery',
				description:
					'Delivery model aligned to an ongoing programme of works, enabling repeatable standards and phased expansion across multiple Steris projects.',
				icon: 'fire',
			},
		],
		galleryImages: [
			{
				src: '/images/projects/steris/facility-interior-1.png',
				alt: 'Steris facility interior showing high-ceiling technical workspace and equipment lines',
			},
		],
		tags: ['Sterilization', 'NHS Support', 'Healthcare', 'Warehouse'],
		href: '/projects/steris/',
	},
	{
		slug: 'metalcraft',
		title: 'Metalcraft Medical Lab',
		subtitle: 'Electrical and life-safety infrastructure for an NHS-critical medical laboratory',
		sector: 'Medical Laboratory & Healthcare',
		value: 'Multi-phase programme',
		duration: 'Ongoing (third project)',
		location: 'United Kingdom',
		heroImage: '/images/projects/metalcraft/exterior-lab-building.png',
		excerpt:
			'A staged electrical package for Metalcraft’s medical laboratory operations, delivering LV distribution, emergency lighting data, CCTV, fire alarms, mechanical power, and external lighting for NHS equipment sterilization services.',
		scope: [
			{
				title: 'Emergency Lighting Data',
				description:
					'Emergency lighting and supporting data infrastructure installed to maintain compliance, visibility, and control throughout laboratory and warehouse zones.',
				icon: 'light',
			},
			{
				title: 'CCTV & Security',
				description:
					'Integrated CCTV coverage to protect critical medical equipment flows and provide secure monitoring for inbound and outbound hospital service operations.',
				icon: 'camera',
			},
			{
				title: 'Fire Alarms & LV Distribution',
				description:
					'Life-safety fire alarm systems and low-voltage distribution designed to support resilient operation of a high-dependency medical processing environment.',
				icon: 'fire',
			},
			{
				title: 'Mechanical Power & External Lighting',
				description:
					'Mechanical power supplies and external lighting installations supporting operational reliability, safe circulation, and high-ceiling controlled-temperature storage spaces.',
				icon: 'power',
			},
		],
		galleryImages: [
			{
				src: '/images/projects/metalcraft/exterior-lab-building.png',
				alt: 'Metalcraft medical laboratory and warehouse facility exterior',
			},
		],
		tags: ['Medical Lab', 'NHS Support', 'LV Distribution', 'Fire Alarms'],
		href: '/projects/metalcraft/',
	},
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
