export const mapFeatures = [
	'Altaire Camp: Small Forest',
	'Omega Sector: Command Center',
	'Helios Tower <2nd Floor>',
	'Helios Tower <99th Floor>',
	'Perion: Iron Boar Land',
	'Minar Forest: West Border',
	'Nautilus: Navigation Room',
	'The Field Up North of Ellinia',
	'Helios Tower: Time Control Room',
] as const;

export type MapFeature = (typeof mapFeatures)[number];

export type MapFeatureDetails = {
	docsLink: string;
	image: string | null;
};

export const mapFeatureDetailsMap = {
	'Altaire Camp: Small Forest': {
		docsLink: 'https://maplelegends.com/lib/map?id=300000100',
		image: '/images/map-features/altaire-camp-small-forest.png',
	},
	'Helios Tower <2nd Floor>': {
		docsLink: 'https://maplelegends.com/lib/map?id=222020100',
		image: '/images/map-features/helios-tower-2nd-floor.png',
	},
	'Helios Tower <99th Floor>': {
		docsLink: 'https://maplelegends.com/lib/map?id=222020200',
		image: '/images/map-features/helios-tower-99th-floor.png',
	},
	'Helios Tower: Time Control Room': {
		docsLink: 'https://maplelegends.com/lib/map?id=222020400',
		image: '/images/map-features/helios-tower-time-control-room.png',
	},
	'Minar Forest: West Border': {
		docsLink: 'https://maplelegends.com/lib/map?id=240010100',
		image: '/images/map-features/minar-forest-west-border.png',
	},
	'Nautilus: Navigation Room': {
		docsLink: 'https://maplelegends.com/lib/map?id=120000101',
		image: null,
	},
	'Omega Sector: Command Center': {
		docsLink: 'https://maplelegends.com/lib/map?id=221000300',
		image: null,
	},
	'Perion: Iron Boar Land': {
		docsLink: 'https://maplelegends.com/lib/map?id=101040003',
		image: '/images/map-features/perion-iron-boar-land.png',
	},
	'The Field Up North of Ellinia': {
		docsLink: 'https://maplelegends.com/lib/map?id=101010000',
		image: '/images/map-features/the-field-up-north-of-ellinia.png',
	},
} satisfies Record<MapFeature, MapFeatureDetails>;
