export const NPCS = [
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
	'Shalon',
	'Shuri',
	'Spinel',
	'Sunny',
	'Syras',
	'Thomas Swift',
	'Tian',
	'Tito (Taiwan)',
	'Tito (Victoria)',
	'Tommie',
] as const;

export type NPC = (typeof NPCS)[number];

export type NPCDetails = {
	docsLink: string;
	image: string;
};

export const npcDetailsMap = {
	Bell: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9201057',
		image: '/images/pathfinder/npcs/bell.png',
	},
	'Blake (Taipei 101)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330062',
		image: '/images/pathfinder/npcs/blake.png',
	},
	'Blake (Ximending)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330061',
		image: '/images/pathfinder/npcs/blake.png',
	},
	'Camel Taxi': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2110005',
		image: '/images/pathfinder/npcs/camel-taxi.png',
	},
	Cherry: {
		docsLink: 'https://maplelegends.com/lib/npc?id=1032008',
		image: '/images/pathfinder/npcs/cherry.png',
	},
	'Cokebear Administrator': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9001000',
		image: '/images/pathfinder/npcs/cokebear-administrator.png',
	},
	Corba: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2082003',
		image: '/images/pathfinder/npcs/corba.png',
	},
	'Crystal (Zipangu)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9120026',
		image: '/images/pathfinder/npcs/zipangu-crystal.png',
	},
	'Dolphin (Aquarium)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2060009',
		image: '/images/pathfinder/npcs/dolphin.png',
	},
	'Dolphin (Herb Town)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2093004',
		image: '/images/pathfinder/npcs/dolphin.png',
	},
	'El Nath Magic Spot': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012015',
		image: '/images/pathfinder/npcs/el-nath-magic-spot.png',
	},
	'First Eos Rock': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2040024',
		image: '/images/pathfinder/npcs/first-eos-rock.png',
	},
	'Fourth Eos Rock': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2040027',
		image: '/images/pathfinder/npcs/fourth-eos-rock.png',
	},
	Geras: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012025',
		image: 'images/pathfinder/npcs/geras.png',
	},
	Hak: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2090005',
		image: '/images/pathfinder/npcs/hak.png',
	},
	Irene: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9270041',
		image: '/images/pathfinder/npcs/irene.png',
	},
	Karcasa: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2101013',
		image: '/images/pathfinder/npcs/karcasa.png',
	},
	Nara: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2040048',
		image: '/images/pathfinder/npcs/nara.png',
	},
	'Orbis Magic Spot': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012014',
		image: '/images/pathfinder/npcs/orbis-magic-spot.png',
	},
	Pason: {
		docsLink: 'https://maplelegends.com/lib/npc?id=1002002',
		image: '/images/pathfinder/npcs/pason.png',
	},
	Ramini: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012021',
		image: 'images/pathfinder/npcs/ramini.png',
	},
	Rini: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012001',
		image: '/images/pathfinder/npcs/rini.png',
	},
	Shalon: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9270038',
		image: '/images/pathfinder/npcs/shalon.png',
	},
	Shuri: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2010005',
		image: '/images/pathfinder/npcs/shuri.png',
	},
	Spinel: {
		docsLink: 'https://maplelegends.com/lib/npc?id=9000020',
		image: '/images/pathfinder/npcs/spinel.png',
	},
	Sunny: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2012013',
		image: '/images/pathfinder/npcs/sunny.png',
	},
	Syras: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2102002',
		image: '/images/pathfinder/npcs/syras.png',
	},
	'Thomas Swift': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9201022',
		image: '/images/pathfinder/npcs/thomas-swift.png',
	},
	Tian: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2041000',
		image: '/images/pathfinder/npcs/tian.png',
	},
	'Tito (Taiwan)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330014',
		image: '/images/pathfinder/npcs/tito.png',
	},
	'Tito (Victoria)': {
		docsLink: 'https://maplelegends.com/lib/npc?id=9330007',
		image: '/images/pathfinder/npcs/tito.png',
	},
	Tommie: {
		docsLink: 'https://maplelegends.com/lib/npc?id=2082001',
		image: '/images/pathfinder/npcs/tommie.png',
	},
} satisfies Record<NPC, NPCDetails>;
