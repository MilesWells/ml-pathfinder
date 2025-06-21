import { randomUUID, type UUID } from 'node:crypto';
import { type Region, SPINEL_REGIONS } from './regions';
// Edges represent ways to travel from one region to another
export type Edge = {
	from: Region;
	to: Region;
	id: UUID;
	description?: React.ReactNode;
	method: 'Walk' | 'Taxi' | 'Timed Taxi' | 'Spinel';
};

type RegionEdge = Omit<Edge, 'from' | 'id'>;

export type RegionEdges = {
	region: Region;
	edges: RegionEdge[];
};

const SPINEL_EDGES: RegionEdges['edges'] = SPINEL_REGIONS.map(to => ({
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
	],
};

export const edges: Edge[] = [
	AMORIA,
	AQUA_ROAD,
	ARIANT,
	EL_NATH,
	HERB_TOWN,
	KOREAN_FOLK_TOWN,
].flatMap(({ edges, region }) =>
	edges.map(edge => ({ ...edge, from: region, id: randomUUID() })),
);
