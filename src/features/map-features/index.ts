export const mapFeatures = [
	'Altaire Camp: Small Forest',
	'Omega Sector: Command Center',
	'Helios Tower <2nd Floor>',
	'Helios Tower <99th Floor>',
	'Perion: Iron Boar Land',
	'Minar Forest : West Border',
	'Nautilus: Navigation Room',
	'The Field Up North of Ellinia',
	'Helios Tower: Time Control Room',
] as const;

export type MapFeature = (typeof mapFeatures)[number];

export type MapFeatureDetails = {
	description: string;
	docsLink: string;
};

export const mapFeatureDetailsMap = {
	'Altaire Camp: Small Forest': {
		description: 'Enter the green portal',
		docsLink: 'https://maplelegends.com/lib/map?id=300000100',
	},
	'Helios Tower <2nd Floor>': {
		description: 'Enter the elevator when the shutter is open',
		docsLink: 'https://maplelegends.com/lib/map?id=222020100',
	},
	'Helios Tower <99th Floor>': {
		description: 'Enter the elevator when the shutter is open',
		docsLink: 'https://maplelegends.com/lib/map?id=222020200',
	},
	'Helios Tower: Time Control Room': {
		description: 'Enter the time machine',
		docsLink: 'https://maplelegends.com/lib/map?id=222020400',
	},
	'Minar Forest : West Border': {
		description: 'Enter the green portal',
		docsLink: 'https://maplelegends.com/lib/map?id=240010100',
	},
	'Nautilus: Navigation Room': {
		description: 'Enter the warp device',
		docsLink: 'https://maplelegends.com/lib/map?id=120000101',
	},
	'Omega Sector: Command Center': {
		description: 'Enter the warp device',
		docsLink: 'https://maplelegends.com/lib/map?id=221000300',
	},
	'Perion: Iron Boar Land': {
		description: 'Enter the red portal',
		docsLink: 'https://maplelegends.com/lib/map?id=101040003',
	},
	'The Field Up North of Ellinia': {
		description: 'Enter the green portal',
		docsLink: 'https://maplelegends.com/lib/map?id=101010000',
	},
} satisfies Record<MapFeature, MapFeatureDetails>;
