export const mapFeatures = [
	'Altaire Camp: Small Forest',
	'Helios Tower <2nd Floor>',
	'Helios Tower <99th Floor>',
	'Helios Tower: Time Control Room',
	'Korean Folk Town: Moon Ridge',
	'Minar Forest: West Border',
	'Nautilus: Navigation Room',
	'Omega Sector: Command Center',
	"Omega Sector: Gray's Prairie",
	'Perion: Iron Boar Land',
	'The Field Up North of Ellinia',
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
	'Korean Folk Town: Moon Ridge': {
		docsLink: 'https://maplelegends.com/lib/map?id=222010310',
		image: '/images/map-features/korean-folk-town-moon-ridge.png',
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
	"Omega Sector: Gray's Prairie": {
		docsLink: 'https://maplelegends.com/lib/map?id=221040301',
		image: '/images/map-features/omega-sector-grays-prairie.png',
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
