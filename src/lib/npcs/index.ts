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
		docsLink: 'https://legends.ml/lib/npc?id=9201057',
		image: '/images/npcs/bell.png',
	},
	'Blake (Taipei 101)': {
		docsLink: 'https://legends.ml/lib/npc?id=9330062',
		image: '/images/npcs/blake.png',
	},
	'Blake (Ximending)': {
		docsLink: 'https://legends.ml/lib/npc?id=9330061',
		image: '/images/npcs/blake.png',
	},
	'Camel Taxi': {
		docsLink: 'https://legends.ml/lib/npc?id=2110005',
		image: '/images/npcs/camel-taxi.png',
	},
	Cherry: {
		docsLink: 'https://legends.ml/lib/npc?id=1032008',
		image: '/images/npcs/cherry.png',
	},
	'Cokebear Administrator': {
		docsLink: 'https://legends.ml/lib/npc?id=9001000',
		image: '/images/npcs/cokebear-administrator.png',
	},
	Corba: {
		docsLink: 'https://legends.ml/lib/npc?id=2082003',
		image: '/images/npcs/corba.png',
	},
	'Crystal (Zipangu)': {
		docsLink: 'https://legends.ml/lib/npc?id=9120026',
		image: '/images/npcs/zipangu-crystal.png',
	},
	'Dolphin (Aquarium)': {
		docsLink: 'https://legends.ml/lib/npc?id=2060009',
		image: '/images/npcs/dolphin.png',
	},
	'Dolphin (Herb Town)': {
		docsLink: 'https://legends.ml/lib/npc?id=2093004',
		image: '/images/npcs/dolphin.png',
	},
	'El Nath Magic Spot': {
		docsLink: 'https://legends.ml/lib/npc?id=2012015',
		image: '/images/npcs/el-nath-magic-spot.png',
	},
	'First Eos Rock': {
		docsLink: 'https://legends.ml/lib/npc?id=2040024',
		image: '/images/npcs/first-eos-rock.png',
	},
	'Fourth Eos Rock': {
		docsLink: 'https://legends.ml/lib/npc?id=2040027',
		image: '/images/npcs/fourth-eos-rock.png',
	},
	Geras: {
		docsLink: 'https://legends.ml/lib/npc?id=2012025',
		image: 'images/npcs/geras.png',
	},
	Hak: {
		docsLink: 'https://legends.ml/lib/npc?id=2090005',
		image: '/images/npcs/hak.png',
	},
	Irene: {
		docsLink: 'https://legends.ml/lib/npc?id=9270041',
		image: '/images/npcs/irene.png',
	},
	Karcasa: {
		docsLink: 'https://legends.ml/lib/npc?id=2101013',
		image: '/images/npcs/karcasa.png',
	},
	Nara: {
		docsLink: 'https://legends.ml/lib/npc?id=2040048',
		image: '/images/npcs/nara.png',
	},
	'Orbis Magic Spot': {
		docsLink: 'https://legends.ml/lib/npc?id=2012014',
		image: '/images/npcs/orbis-magic-spot.png',
	},
	Pason: {
		docsLink: 'https://legends.ml/lib/npc?id=1002002',
		image: '/images/npcs/pason.png',
	},
	Ramini: {
		docsLink: 'https://legends.ml/lib/npc?id=2012021',
		image: 'images/npcs/ramini.png',
	},
	Rini: {
		docsLink: 'https://legends.ml/lib/npc?id=2012001',
		image: '/images/npcs/rini.png',
	},
	Shalon: {
		docsLink: 'https://legends.ml/lib/npc?id=9270038',
		image: '/images/npcs/shalon.png',
	},
	Shuri: {
		docsLink: 'https://legends.ml/lib/npc?id=2010005',
		image: '/images/npcs/shuri.png',
	},
	Spinel: {
		docsLink: 'https://legends.ml/lib/npc?id=9000020',
		image: '/images/npcs/spinel.png',
	},
	Sunny: {
		docsLink: 'https://legends.ml/lib/npc?id=2012013',
		image: '/images/npcs/sunny.png',
	},
	Syras: {
		docsLink: 'https://legends.ml/lib/npc?id=2102002',
		image: '/images/npcs/syras.png',
	},
	'Thomas Swift': {
		docsLink: 'https://legends.ml/lib/npc?id=9201022',
		image: '/images/npcs/thomas-swift.png',
	},
	Tian: {
		docsLink: 'https://legends.ml/lib/npc?id=2041000',
		image: '/images/npcs/tian.png',
	},
	'Tito (Taiwan)': {
		docsLink: 'https://legends.ml/lib/npc?id=9330014',
		image: '/images/npcs/tito.png',
	},
	'Tito (Victoria)': {
		docsLink: 'https://legends.ml/lib/npc?id=9330007',
		image: '/images/npcs/tito.png',
	},
	Tommie: {
		docsLink: 'https://legends.ml/lib/npc?id=2082001',
		image: '/images/npcs/tommie.png',
	},
} satisfies Record<NPC, NPCDetails>;
