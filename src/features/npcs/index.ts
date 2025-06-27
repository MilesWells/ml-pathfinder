import { IMAGE_PLACEHOLDER } from '@/ui/image-placeholder';

const mapLocations = [
	'Helios Tower Elevator (KFT)',
	'Helios Tower Elevator (Ludibrium)',
	'Magic Seed Portal (Leafre)',
	'Magic Seed Portal (Ellinia)',
	'Time Control Room',
	'Nautilus Navigation Room',
	'Command Center',
] as const;

export const NPCS = [
	'Astralis',
	'Astrum',
	'Bell',
	'Blake (Taipei 101)',
	'Blake (Ximending)',
	'Camel Taxi',
	'Cherry',
	'Cokebear Administrator',
	'Corba',
	'Crystal (Zipangu)',
	'Dolphin (Aquarium)',
	'Dolphin (Herb Town)',
	'El Nath Magic Spot',
	'First Eos Rock',
	'Fourth Eos Rock',
	'Geras',
	'Hak',
	'Irene',
	'Karcasa',
	'Nara',
	'Orbis Magic Spot',
	'Pason',
	'Ramini',
	'Rini',
	'Spinel',
	'Sunny',
	'Syras',
	'Thomas Swift',
	'Tian',
	'Tito (Taiwan)',
	'Tito (Victoria)',
	'Tommie',
	'Shalon',
	...mapLocations,
] as const;

export type NPC = (typeof NPCS)[number];

export type NPCDetails = {
	docsLink: string;
	image: string;
};

export const npcDetailsMap = {
	Astralis: {
		// located in Omega Sector
		docsLink: 'https://maplelegends.com/lib/npc?id=1052311',
		image: IMAGE_PLACEHOLDER,
	},
	Astrum: {
		// located in KFT
		docsLink: 'https://maplelegends.com/lib/npc?id=1052310',
		image: IMAGE_PLACEHOLDER,
	},
	Bell: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9201057',
		image: '/images/npcs/bell.png',
	},
	'Blake (Taipei 101)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330062',
		image: '/images/npcs/blake.png',
	},
	'Blake (Ximending)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330061',
		image: '/images/npcs/blake.png',
	},
	'Camel Taxi': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2110005',
		image: '/images/npcs/camel-taxi.png',
	},
	Cherry: {
		docsLink: 'https://maplelegends.com/lib/npc?id=1032008',
		image: '/images/npcs/cherry.png',
	},
	'Cokebear Administrator': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9001000',
		image: '/images/npcs/cokebear-administrator.png',
	},
	'Command Center': {
		docsLink: 'https://maplelegends.com/lib/map?id=221000300',
		image: IMAGE_PLACEHOLDER,
	},
	Corba: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2082003',
		image: '/images/npcs/corba.png',
	},
	'Crystal (Zipangu)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9120026',
		image: '/images/npcs/zipangu-crystal.png',
	},
	'Dolphin (Aquarium)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2060009',
		image: '/images/npcs/dolphin.png',
	},
	'Dolphin (Herb Town)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2093004',
		image: '/images/npcs/dolphin.png',
	},
	'El Nath Magic Spot': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012015',
		image: '/images/npcs/el-nath-magic-spot.png',
	},
	'First Eos Rock': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2040024',
		image: '/images/npcs/first-eos-rock.png',
	},
	'Fourth Eos Rock': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2040027',
		image: '/images/npcs/fourth-eos-rock.png',
	},
	Geras: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012025',
		image: 'images/npcs/geras',
	},
	Hak: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2090005',
		image: '/images/npcs/hak.png',
	},
	'Helios Tower Elevator (KFT)': {
		docsLink: 'https://maplelegends.com/lib/map?id=222020100',
		image: IMAGE_PLACEHOLDER,
	},
	'Helios Tower Elevator (Ludibrium)': {
		docsLink: 'https://maplelegends.com/lib/map?id=222020200',
		image: IMAGE_PLACEHOLDER,
	},
	Irene: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9270041',
		image: '/images/npcs/irene.png',
	},
	Karcasa: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2101013',
		image: '/images/npcs/karcasa.png',
	},
	'Magic Seed Portal (Ellinia)': {
		docsLink: 'https://maplelegends.com/lib/map?id=101010000',
		image: IMAGE_PLACEHOLDER,
	},
	'Magic Seed Portal (Leafre)': {
		docsLink: 'https://maplelegends.com/lib/map?id=240010100',
		image: IMAGE_PLACEHOLDER,
	},
	Nara: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2040048',
		image: '/images/npcs/nara.png',
	},
	'Nautilus Navigation Room': {
		docsLink: 'https://maplelegends.com/lib/map?id=120000101',
		image: IMAGE_PLACEHOLDER,
	},
	'Orbis Magic Spot': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012014',
		image: '/images/npcs/orbis-magic-spot.png',
	},
	Pason: {
		docsLink: 'https://maplelegends.com/lib/npc?id=1002002',
		image: '/images/npcs/payson.png',
	},
	Ramini: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012021',
		image: 'images/npcs/ramini.png',
	},
	Rini: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012001',
		image: '/images/npcs/rini.png',
	},
	Shalon: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9270038',
		image: '/images/npcs/shalon.png',
	},
	Spinel: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9000020',
		image: '/images/npcs/spinel.png',
	},
	Sunny: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012013',
		image: '/images/npcs/sunny.png',
	},
	Syras: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2102002',
		image: '/images/npcs/syras.png',
	},
	'Thomas Swift': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9201022',
		image: '/images/npcs/thomas-swift.png',
	},
	Tian: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2041000',
		image: '/images/npcs/tian.png',
	},
	'Time Control Room': {
		docsLink: 'https://maplelegends.com/lib/map?id=222020400',
		image: IMAGE_PLACEHOLDER,
	},
	'Tito (Taiwan)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330014',
		image: '/images/npcs/tito.png',
	},
	'Tito (Victoria)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330007',
		image: '/images/npcs/tito.png',
	},
	Tommie: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2082001',
		image: '/images/npcs/tommie.png',
	},
} satisfies Record<NPC, NPCDetails>;
