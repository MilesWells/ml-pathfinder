import { randomUUID, type UUID } from 'node:crypto';
import type { Item } from './items';
import { type Region, SPINEL_REGIONS } from './regions';
import type { Prettify } from './types';

// Edges represent ways to travel from one region to another
export type RegionEdge = {
	to: Region;
	description?: React.ReactNode;
} & (
	| {
			method: 'Walk' | 'Taxi' | 'Timed Taxi' | 'Spinel';
	  }
	| {
			method: 'Item';
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
			description: 'Henesys dude in a suit',
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
			method: 'Taxi',
			description: 'Orbis Rock Scroll',
		},
		...SPINEL_EDGES,
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
			method: 'Taxi',
			description: 'Energy Shards (HP Challenge Tier 3)',
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
			method: 'Taxi',
			description: 'Magic Seed',
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
			to: 'Omega Sector',
			method: 'Taxi',
			description: 'Eos Rock Scroll',
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

export const edges: Edge[] = [
	AMORIA,
	AQUA_ROAD,
	ARIANT,
	EL_NATH,
	HERB_TOWN,
	KOREAN_FOLK_TOWN,
	LAEFRE,
	LUDIBRIUM,
	MAGATIA,
	MALAYSIA,
	MU_LUNG,
].flatMap(({ edges, region }) =>
	edges.map(edge => ({ ...edge, from: region, id: randomUUID() })),
);
