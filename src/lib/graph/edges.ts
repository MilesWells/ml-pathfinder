import type { Item } from '../items';
import type { MapFeature } from '../map-features';
import type { NPC } from '../npcs';
import { type Region, SPINEL_REGIONS } from '../regions';

export type WalkEdge = {
	method: 'Walk';
};

export type TaxiEdge = {
	method: 'Taxi' | 'Timed Taxi';
	mesos: number;
	npc: NPC;
};

export type SpinelEdge = {
	method: 'Spinel';
	mesos: number;
	npc: 'Spinel';
};

export type ItemEdge = {
	method: 'Item';
	item: Item;
};

export type ItemTaxiEdge = {
	method: 'Item Taxi';
	item: Item;
	npc: NPC;
};

export type MapFeatureEdge = {
	item: Item | null;
	method: 'Map Feature' | 'Timed Map Feature';
	mapFeature: MapFeature;
};

export type RegionEdge = {
	to: Region;
	weight?: number;
} & (WalkEdge | TaxiEdge | SpinelEdge | ItemEdge | ItemTaxiEdge | MapFeatureEdge);

export type EdgeMethod = RegionEdge['method'];
export type EdgeId = `${EdgeMethod}|${Region}|${Region}`;

export type Edge = RegionEdge & {
	from: Region;
	id: EdgeId;
};

type RegionEdges = {
	region: Region;
	edges: RegionEdge[];
};

const SPINEL_EDGES: RegionEdge[] = SPINEL_REGIONS.map(to => ({
	mesos: 3_000,
	method: 'Spinel',
	npc: 'Spinel',
	to,
}));

const AMORIA = {
	edges: [
		{
			mesos: 0,
			method: 'Taxi',
			npc: 'Thomas Swift',
			to: 'Victoria Island',
		},
		...SPINEL_EDGES,
	],
	region: 'Amoria',
} satisfies RegionEdges;

const AQUA_ROAD = {
	edges: [
		{
			mesos: 1_000,
			method: 'Taxi',
			npc: 'Dolphin (Aquarium)',
			to: 'Korean Folk Town',
		},
		{
			mesos: 10_000,
			method: 'Taxi',
			npc: 'Dolphin (Aquarium)',
			to: 'Herb Town',
		},
		{
			method: 'Walk',
			to: 'El Nath',
			weight: 0,
		},
	],
	region: 'Aqua Road',
} satisfies RegionEdges;

const ARIANT = {
	edges: [
		{
			mesos: 1_500,
			method: 'Taxi',
			npc: 'Camel Taxi',
			to: 'Magatia',
		},
		{
			mesos: 10_000,
			method: 'Taxi',
			npc: 'Karcasa',
			to: 'Victoria Island',
		},
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Syras',
			to: 'Orbis',
		},
		...SPINEL_EDGES,
	],
	region: 'Ariant',
} satisfies RegionEdges;

const COKE_TOWN = {
	edges: [
		{
			mesos: 0,
			method: 'Taxi',
			npc: 'Cokebear Administrator',
			to: 'Victoria Island',
		},
	],
	region: 'Coke Town',
} satisfies RegionEdges;

const EL_NATH = {
	edges: [
		{
			method: 'Walk',
			to: 'Aqua Road',
			weight: 0,
		},
		{
			method: 'Walk',
			to: 'Orbis',
		},
		{
			item: 'Orbis Rock Scroll',
			method: 'Item Taxi',
			npc: 'El Nath Magic Spot',
			to: 'Orbis',
		},
		...SPINEL_EDGES,
	],
	region: 'El Nath',
} satisfies RegionEdges;

const ELLIN_FOREST = {
	edges: [
		{
			item: null,
			mapFeature: 'Altaire Camp: Small Forest',
			method: 'Map Feature',
			to: 'Ludibrium',
		},
	],
	region: 'Ellin Forest',
} satisfies RegionEdges;

const HERB_TOWN = {
	edges: [
		{
			mesos: 10_000,
			method: 'Taxi',
			npc: 'Dolphin (Herb Town)',
			to: 'Aqua Road',
		},
		{
			mesos: 500,
			method: 'Taxi',
			npc: 'Hak',
			to: 'Mu Lung',
		},
	],
	region: 'Herb Town',
} satisfies RegionEdges;

const KOREAN_FOLK_TOWN = {
	edges: [
		{
			item: null,
			mapFeature: 'Helios Tower <2nd Floor>',
			method: 'Timed Map Feature',
			to: 'Ludibrium',
		},
		{
			item: 'Energy Shard',
			mapFeature: 'Korean Folk Town: Moon Ridge',
			method: 'Map Feature',
			to: 'Omega Sector',
		},
		{
			method: 'Walk',
			to: 'Aqua Road',
			weight: 0,
		},
		{
			item: 'Command Center Warp Capsule',
			method: 'Item',
			to: 'Omega Sector',
		},
		{
			item: 'Ludibrium Warp Capsule',
			method: 'Item',
			to: 'Ludibrium',
		},
		{
			item: 'Omega Sector Warp Capsule',
			method: 'Item',
			to: 'Omega Sector',
		},
	],
	region: 'Korean Folk Town',
} satisfies RegionEdges;

const LEAFRE = {
	edges: [
		{
			item: 'Magic Seed',
			mapFeature: 'Minar Forest: West Border',
			method: 'Map Feature',
			to: 'Victoria Island',
		},
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Corba',
			to: 'Orbis',
		},
		{
			mesos: 0,
			method: 'Taxi',
			npc: 'Corba',
			to: 'Temple of Time',
		},
		...SPINEL_EDGES,
	],
	region: 'Leafre',
} satisfies RegionEdges;

const LUDIBRIUM = {
	edges: [
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Tian',
			to: 'Orbis',
		},
		{
			item: null,
			mapFeature: 'Helios Tower: Time Control Room',
			method: 'Map Feature',
			to: 'Ellin Forest',
		},
		{
			item: null,
			mapFeature: 'Helios Tower <99th Floor>',
			method: 'Timed Map Feature',
			to: 'Korean Folk Town',
		},
		{
			mesos: 1_500,
			method: 'Taxi',
			npc: 'Nara',
			to: 'Florina Beach',
		},
		{
			item: 'VIP Ticket to Florina Beach',
			method: 'Item Taxi',
			npc: 'Nara',
			to: 'Florina Beach',
			weight: 0,
		},
		{
			item: 'Eos Rock Scroll',
			method: 'Item Taxi',
			npc: 'First Eos Rock',
			to: 'Omega Sector',
		},
		{
			item: 'Command Center Warp Capsule',
			method: 'Item',
			to: 'Omega Sector',
		},
		{
			item: 'Omega Sector Warp Capsule',
			method: 'Item',
			to: 'Omega Sector',
		},
		{
			method: 'Walk',
			to: 'Omega Sector',
		},
		...SPINEL_EDGES,
	],
	region: 'Ludibrium',
} satisfies RegionEdges;

const MAGATIA = {
	edges: [
		{
			mesos: 1_500,
			method: 'Taxi',
			npc: 'Camel Taxi',
			to: 'Ariant',
		},
	],
	region: 'Magatia',
} satisfies RegionEdges;

const MALAYSIA = {
	edges: [
		{
			method: 'Walk',
			to: 'Singapore',
		},
		...SPINEL_EDGES,
	],
	region: 'Malaysia',
} satisfies RegionEdges;

const MU_LUNG = {
	edges: [
		{
			mesos: 500,
			method: 'Taxi',
			npc: 'Hak',
			to: 'Herb Town',
		},
		{
			mesos: 1_500,
			method: 'Taxi',
			npc: 'Hak',
			to: 'Orbis',
		},
		...SPINEL_EDGES,
	],
	region: 'Mu Lung',
} satisfies RegionEdges;

const MUSHROOM_SHRINE = {
	edges: [
		{
			item: 'Fruit Milk',
			method: 'Item',
			to: 'Showa',
		},
		{
			method: 'Walk',
			to: 'Showa',
		},
		{
			mesos: 0,
			method: 'Taxi',
			npc: 'Crystal (Zipangu)',
			to: 'Ninja Castle',
		},
		{
			mesos: 0,
			method: 'Taxi',
			npc: 'Crystal (Zipangu)',
			to: 'Neo Tokyo',
		},
	],
	region: 'Mushroom Shrine',
} satisfies RegionEdges;

const NLC = {
	edges: [
		{
			mesos: 5_000,
			method: 'Timed Taxi',
			npc: 'Bell',
			to: 'Victoria Island',
		},
	],
	region: 'NLC',
} satisfies RegionEdges;

const OMEGA_SECTOR = {
	edges: [
		{
			item: 'Ludibrium Warp Capsule',
			method: 'Item',
			to: 'Ludibrium',
		},
		{
			item: 'Eos Rock Scroll',
			method: 'Item Taxi',
			npc: 'Fourth Eos Rock',
			to: 'Ludibrium',
		},
		{
			method: 'Walk',
			to: 'Ludibrium',
		},
		{
			item: 'Warp Card',
			mapFeature: 'Omega Sector: Command Center',
			method: 'Map Feature',
			to: 'Victoria Island',
		},
		{
			item: 'Energy Shard',
			mapFeature: "Omega Sector: Gray's Prairie",
			method: 'Map Feature',
			to: 'Korean Folk Town',
		},
	],
	region: 'Omega Sector',
} satisfies RegionEdges;

const ORBIS = {
	edges: [
		{
			item: 'Orbis Rock Scroll',
			method: 'Item Taxi',
			npc: 'Orbis Magic Spot',
			to: 'El Nath',
		},
		{
			method: 'Walk',
			to: 'El Nath',
		},
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Rini',
			to: 'Victoria Island',
		},
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Sunny',
			to: 'Ludibrium',
		},
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Geras',
			to: 'Ariant',
		},
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Ramini',
			to: 'Leafre',
		},
		{
			mesos: 1_500,
			method: 'Timed Taxi',
			npc: 'Hak',
			to: 'Mu Lung',
		},
		{
			mesos: 1_500,
			method: 'Taxi',
			npc: 'Shuri',
			to: 'Florina Beach',
		},
		{
			item: 'VIP Ticket to Florina Beach',
			method: 'Item Taxi',
			npc: 'Shuri',
			to: 'Florina Beach',
			weight: 0,
		},
		...SPINEL_EDGES,
	],
	region: 'Orbis',
} satisfies RegionEdges;

const SINGAPORE = {
	edges: [
		{
			method: 'Walk',
			to: 'Malaysia',
		},
		{
			mesos: 20_000,
			method: 'Timed Taxi',
			npc: 'Shalon',
			to: 'Victoria Island',
		},
		...SPINEL_EDGES,
	],
	region: 'Singapore',
} satisfies RegionEdges;

const TAIWAN = {
	edges: [
		{
			mesos: 2_000,
			method: 'Taxi',
			npc: 'Tito (Taiwan)',
			to: 'Victoria Island',
		},
		{
			mesos: 2_000,
			method: 'Taxi',
			npc: 'Blake (Ximending)',
			to: 'Taipei 101',
		},
		...SPINEL_EDGES,
	],
	region: 'Taiwan',
} satisfies RegionEdges;

const TAIPEI_101 = {
	edges: [
		{
			mesos: 2_000,
			method: 'Taxi',
			npc: 'Blake (Taipei 101)',
			to: 'Taiwan',
		},
	],
	region: 'Taipei 101',
} satisfies RegionEdges;

const TEMPLE_OF_TIME = {
	edges: [
		{
			method: 'Walk',
			to: 'Leafre',
		},
	],
	region: 'Temple of Time',
} satisfies RegionEdges;

const VICTORIA_ISLAND = {
	edges: [
		{
			mesos: 0,
			method: 'Taxi',
			npc: 'Thomas Swift',
			to: 'Amoria',
		},
		{
			item: 'Desert Coin',
			mapFeature: 'Perion: Iron Boar Land',
			method: 'Map Feature',
			to: 'Ariant',
		},
		{
			mesos: 0,
			method: 'Taxi',
			npc: 'Cokebear Administrator',
			to: 'Coke Town',
		},
		{
			mesos: 0,
			method: 'Timed Taxi',
			npc: 'Cherry',
			to: 'Orbis',
			weight: 12,
		},
		{
			item: 'Magic Seed',
			mapFeature: 'The Field Up North of Ellinia',
			method: 'Map Feature',
			to: 'Leafre',
		},
		{
			mesos: 5_000,
			method: 'Timed Taxi',
			npc: 'Bell',
			to: 'NLC',
		},
		{
			mesos: 20_000,
			method: 'Timed Taxi',
			npc: 'Irene',
			to: 'Singapore',
		},
		{
			mesos: 2_000,
			method: 'Taxi',
			npc: 'Tito (Victoria)',
			to: 'Taiwan',
		},
		{
			item: 'Warp Card',
			mapFeature: 'Nautilus: Navigation Room',
			method: 'Map Feature',
			to: 'Omega Sector',
		},
		{
			item: 'VIP Ticket to Florina Beach',
			method: 'Item Taxi',
			npc: 'Pason',
			to: 'Florina Beach',
			weight: 0,
		},
		{
			mesos: 1_500,
			method: 'Taxi',
			npc: 'Pason',
			to: 'Florina Beach',
		},
		{
			item: 'Return to New Leaf City Scroll',
			method: 'Item',
			to: 'NLC',
		},
		...SPINEL_EDGES,
	],
	region: 'Victoria Island',
} satisfies RegionEdges;

/*
	Edges must be sorted by method such that the most preferred method appears last on the list.
	This is because an edge with the same from and to as an existing edge will overwrite the
	existing edge. Sorting them in this order means more preferable travel methods will
	overwrite less preferable ones.
*/
const edgeSortWeights: Record<EdgeMethod, number> = {
	Item: 7,
	'Item Taxi': 6,
	'Map Feature': 5,
	Spinel: 4,
	Taxi: 3,
	'Timed Map Feature': 2,
	'Timed Taxi': 1,
	Walk: 0,
};

export const edges: Edge[] = [
	AMORIA,
	AQUA_ROAD,
	ARIANT,
	COKE_TOWN,
	EL_NATH,
	ELLIN_FOREST,
	HERB_TOWN,
	KOREAN_FOLK_TOWN,
	LEAFRE,
	LUDIBRIUM,
	MAGATIA,
	MALAYSIA,
	MU_LUNG,
	MUSHROOM_SHRINE,
	NLC,
	OMEGA_SECTOR,
	ORBIS,
	SINGAPORE,
	TAIWAN,
	TAIPEI_101,
	TEMPLE_OF_TIME,
	VICTORIA_ISLAND,
]
	.flatMap(({ edges, region }) =>
		edges.map<Edge>(edge => ({
			...edge,
			from: region,
			id: `${edge.method}|${region}|${edge.to}`,
		})),
	)
	.sort((a, b) => edgeSortWeights[a.method] - edgeSortWeights[b.method]);
