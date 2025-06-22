import { randomUUID, type UUID } from 'node:crypto';
import type { Prettify } from '../types';
import type { Item } from './items';
import { type Region, SPINEL_REGIONS } from './regions';

// Edges represent ways to travel from one region to another
export type RegionEdge = {
	to: Region;
	description?: React.ReactNode;
} & (
	| {
			method: 'Walk' | 'Taxi' | 'Timed Taxi' | 'Spinel';
	  }
	| {
			method: 'Item' | 'Item Taxi';
			item: Item;
	  }
);

export type Edge = Prettify<
	RegionEdge & {
		from: Region;
		id: UUID;
	}
>;

export type RegionEdges = {
	region: Region;
	edges: RegionEdge[];
};

const SPINEL_EDGES: RegionEdge[] = SPINEL_REGIONS.map(to => ({
	method: 'Spinel',
	to,
}));

const AMORIA: RegionEdges = {
	region: 'Amoria',
	edges: [
		{
			to: 'Victoria Island',
			method: 'Taxi',
			description: 'Thomas Swift (Henesys)',
		},
		...SPINEL_EDGES,
	],
};

const AQUA_ROAD: RegionEdges = {
	region: 'Aqua Road',
	edges: [
		{
			to: 'Korean Folk Town',
			method: 'Taxi',
			description: 'Dolphin',
		},
		{
			to: 'Herb Town',
			method: 'Taxi',
			description: 'Dolphin',
		},
		{
			to: 'El Nath',
			method: 'Walk',
		},
	],
};

const ARIANT: RegionEdges = {
	region: 'Ariant',
	edges: [
		{
			to: 'Magatia',
			method: 'Taxi',
			description: 'Camel',
		},
		{
			to: 'Victoria Island',
			method: 'Taxi',
			description: 'Karcasa',
		},
		{
			to: 'Orbis',
			method: 'Timed Taxi',
			description: 'Genie',
		},
		...SPINEL_EDGES,
	],
};

const EL_NATH: RegionEdges = {
	region: 'El Nath',
	edges: [
		{
			to: 'Aqua Road',
			method: 'Walk',
		},
		{
			to: 'Orbis',
			method: 'Item Taxi',
			item: 'Orbis Rock Scroll',
		},
		...SPINEL_EDGES,
	],
};

const ELLIN_FOREST: RegionEdges = {
	region: 'Ellin Forest',
	edges: [
		{
			to: 'Ludibrium',
			method: 'Walk',
		},
	],
};

const HERB_TOWN: RegionEdges = {
	region: 'Herb Town',
	edges: [
		{
			to: 'Aqua Road',
			method: 'Walk',
		},
		{
			to: 'Mu Lung',
			method: 'Taxi',
			description: 'Crane',
		},
	],
};

const KOREAN_FOLK_TOWN: RegionEdges = {
	region: 'Korean Folk Town',
	edges: [
		{
			to: 'Ludibrium',
			method: 'Timed Taxi',
			description: 'Helios Tower Elevator',
		},
		{
			to: 'Omega Sector',
			method: 'Item Taxi',
			item: 'Energy Shard',
			description: 'Requires HP Challenge Tier 3',
		},
		{
			to: 'Aqua Road',
			method: 'Walk',
		},
		{
			to: 'Omega Sector',
			method: 'Item',
			item: 'Command Center Warp Capsule',
		},
		{
			to: 'Ludibrium',
			method: 'Item',
			item: 'Ludibrium Warp Capsule',
		},
		{
			to: 'Omega Sector',
			method: 'Item',
			item: 'Omega Sector Warp Capsule',
		},
	],
};

const LAEFRE: RegionEdges = {
	region: 'Leafre',
	edges: [
		{
			to: 'Victoria Island',
			method: 'Item Taxi',
			item: 'Magic Seed',
		},
		{
			to: 'Orbis',
			method: 'Timed Taxi',
			description: 'Airship',
		},
		{
			to: 'Temple of Time',
			method: 'Walk',
			description: 'From Orbis taxi turn into dragon and fly',
		},
		...SPINEL_EDGES,
	],
};

const LUDIBRIUM: RegionEdges = {
	region: 'Ludibrium',
	edges: [
		{
			to: 'Orbis',
			method: 'Timed Taxi',
			description: 'Airship',
		},
		{
			to: 'Ellin Forest',
			method: 'Walk',
			description: 'Top of Helios Tower',
		},
		{
			to: 'Korean Folk Town',
			method: 'Timed Taxi',
			description: 'Helios Tower Elevator',
		},
		{
			to: 'Florina Beach',
			method: 'Taxi',
			description: 'Nara',
		},
		{
			to: 'Florina Beach',
			method: 'Item Taxi',
			item: 'VIP Ticket to Florina Beach',
			description: 'Nara',
		},
		{
			to: 'Omega Sector',
			method: 'Item Taxi',
			item: 'Eos Rock Scroll',
		},
		{
			to: 'Omega Sector',
			method: 'Item',
			item: 'Command Center Warp Capsule',
		},
		{
			to: 'Omega Sector',
			method: 'Item',
			item: 'Omega Sector Warp Capsule',
		},
	],
};

const MAGATIA: RegionEdges = {
	region: 'Magatia',
	edges: [
		{
			to: 'Ariant',
			method: 'Taxi',
			description: 'Camel',
		},
	],
};

const MALAYSIA: RegionEdges = {
	region: 'Malaysia',
	edges: [
		{
			to: 'Singapore',
			method: 'Walk',
		},
		...SPINEL_EDGES,
	],
};

const MU_LUNG: RegionEdges = {
	region: 'Mu Lung',
	edges: [
		{
			to: 'Herb Town',
			method: 'Taxi',
			description: 'Crane',
		},
		{
			to: 'Orbis',
			method: 'Taxi',
			description: 'Airship',
		},
		...SPINEL_EDGES,
	],
};

const MUSHROOM_SHRINE: RegionEdges = {
	region: 'Mushroom Shrine',
	edges: [
		{
			to: 'Showa',
			method: 'Item',
			item: 'Fruit Milk',
		},
		{
			to: 'Ninja Castle',
			method: 'Taxi',
			description: 'Forest of Oblivion Crystal',
		},
		{
			to: 'Neo Tokyo',
			method: 'Item Taxi',
			item: 'Gate Pass',
			description: 'Forest of Oblivion Crystal',
		},
	],
};

const NEO_TOKYO: RegionEdges = {
	region: 'Neo Tokyo',
	edges: [
		{
			to: 'Mushroom Shrine',
			method: 'Taxi',
		},
	],
};

const NINJA_CASTLE: RegionEdges = {
	region: 'Ninja Castle',
	edges: [
		{
			to: 'Mushroom Shrine',
			method: 'Taxi',
		},
	],
};

const NLC: RegionEdges = {
	region: 'NLC',
	edges: [
		{
			to: 'Victoria Island',
			method: 'Timed Taxi',
			description: 'Subway (Bell)',
		},
	],
};

const OMEGA_SECTOR: RegionEdges = {
	region: 'Omega Sector',
	edges: [
		{
			to: 'Ludibrium',
			method: 'Item',
			item: 'Ludibrium Warp Capsule',
		},
		{
			to: 'Ludibrium',
			method: 'Item Taxi',
			item: 'Eos Rock Scroll',
		},
		{
			to: 'Victoria Island',
			method: 'Item Taxi',
			item: 'Warp Card',
		},
		{
			to: 'Korean Folk Town',
			method: 'Item Taxi',
			item: 'Energy Shard',
		},
	],
};

const ORBIS: RegionEdges = {
	region: 'Orbis',
	edges: [
		{
			to: 'El Nath',
			method: 'Item',
			item: 'Orbis Rock Scroll',
		},
		{
			to: 'Victoria Island',
			method: 'Timed Taxi',
			description: 'Airship',
		},
		{
			to: 'Ludibrium',
			method: 'Timed Taxi',
			description: 'Airship',
		},
		{
			to: 'Ariant',
			method: 'Timed Taxi',
			description: 'Genie',
		},
		{
			to: 'Leafre',
			method: 'Timed Taxi',
			description: 'Airship',
		},
		{
			to: 'Mu Lung',
			method: 'Taxi',
			description: 'Airship',
		},
		...SPINEL_EDGES,
	],
};

const SINGAPORE: RegionEdges = {
	region: 'Singapore',
	edges: [
		{
			to: 'Malaysia',
			method: 'Walk',
		},
		{
			to: 'Victoria Island',
			method: 'Timed Taxi',
			description: 'Irene',
		},
		...SPINEL_EDGES,
	],
};

const TAIWAN: RegionEdges = {
	region: 'Taiwan',
	edges: [
		{
			to: 'Victoria Island',
			method: 'Taxi',
			description: 'Tito',
		},
		{
			to: 'Taipei 101',
			method: 'Taxi',
			description: 'Blake',
		},
		...SPINEL_EDGES,
	],
};

const TAIPEI_101: RegionEdges = {
	region: 'Taipei 101',
	edges: [
		{
			to: 'Taiwan',
			method: 'Taxi',
			description: 'Blake',
		},
	],
};

const TEMPLE_OF_TIME: RegionEdges = {
	region: 'Temple of Time',
	edges: [
		{
			to: 'Leafre',
			method: 'Walk',
		},
	],
};

const VICTORIA_ISLAND: RegionEdges = {
	region: 'Victoria Island',
	edges: [
		{
			to: 'Amoria',
			method: 'Taxi',
			description: 'Thomas Swift (Henesys)',
		},
		{
			to: 'Ariant',
			method: 'Item',
			item: 'Desert Coin',
		},
		{
			to: 'Orbis',
			method: 'Timed Taxi',
			description: 'Airship',
		},
		{
			to: 'Leafre',
			method: 'Item Taxi',
			item: 'Magic Seed',
		},
		{
			to: 'NLC',
			method: 'Timed Taxi',
			description: 'Subway (Bell)',
		},
		{
			to: 'Singapore',
			method: 'Timed Taxi',
			description: 'Irene',
		},
		{
			to: 'Taiwan',
			method: 'Taxi',
			description: 'Tito',
		},
		{
			to: 'Omega Sector',
			method: 'Item',
			item: 'Warp Card',
		},
		{
			to: 'Florina Beach',
			method: 'Item Taxi',
			item: 'VIP Ticket to Florina Beach',
			description: 'Pason (Lith Harbor)',
		},
		{
			to: 'Florina Beach',
			method: 'Taxi',
			description: 'Pason (Lith Harbor)',
		},
		{
			to: 'NLC',
			method: 'Item',
			item: 'Return to New Leaf City Scroll',
		},
		...SPINEL_EDGES,
	],
};

export const edges: Edge[] = [
	AMORIA,
	AQUA_ROAD,
	ARIANT,
	EL_NATH,
	ELLIN_FOREST,
	HERB_TOWN,
	KOREAN_FOLK_TOWN,
	LAEFRE,
	LUDIBRIUM,
	MAGATIA,
	MALAYSIA,
	MU_LUNG,
	MUSHROOM_SHRINE,
	NEO_TOKYO,
	NINJA_CASTLE,
	NLC,
	OMEGA_SECTOR,
	ORBIS,
	SINGAPORE,
	TAIWAN,
	TAIPEI_101,
	TEMPLE_OF_TIME,
	VICTORIA_ISLAND,
].flatMap(({ edges, region }) =>
	edges.map(edge => ({ ...edge, from: region, id: randomUUID() })),
);
