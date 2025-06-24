import type { Item } from '../items';
import { type Region, SPINEL_REGIONS } from './regions';

type WalkEdge = {
	method: 'Walk';
};

type TaxiEdge = {
	method: 'Taxi';
	mesos: number;
};

type TimedTaxiEdge = {
	method: 'Timed Taxi';
	mesos: number;
};

type SpinelEdge = {
	method: 'Spinel';
	mesos: number;
};

type ItemEdge = {
	method: 'Item';
	item: Item;
};

type ItemTaxiEdge = {
	method: 'Item Taxi';
	item: Item;
};

export type RegionEdge = {
	to: Region;
	description?: React.ReactNode;
	weight?: number;
} & (WalkEdge | TaxiEdge | TimedTaxiEdge | SpinelEdge | ItemEdge | ItemTaxiEdge);

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
	to,
}));

const AMORIA: RegionEdges = {
	edges: [
		{
			description: 'Thomas Swift (Henesys)',
			mesos: 0,
			method: 'Taxi',
			to: 'Victoria Island',
		},
		...SPINEL_EDGES,
	],
	region: 'Amoria',
};

const AQUA_ROAD: RegionEdges = {
	edges: [
		{
			description: 'Dolphin',
			mesos: 1_500,
			method: 'Taxi',
			to: 'Korean Folk Town',
		},
		{
			description: 'Dolphin',
			mesos: 10_000,
			method: 'Taxi',
			to: 'Herb Town',
		},
		{
			method: 'Walk',
			to: 'El Nath',
		},
	],
	region: 'Aqua Road',
};

const ARIANT: RegionEdges = {
	edges: [
		{
			description: 'Camel',
			mesos: 1_500,
			method: 'Taxi',
			to: 'Magatia',
		},
		{
			description: 'Karcasa',
			mesos: 10_000,
			method: 'Taxi',
			to: 'Victoria Island',
		},
		{
			description: 'Genie',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Orbis',
		},
		...SPINEL_EDGES,
	],
	region: 'Ariant',
};

const COKE_TOWN: RegionEdges = {
	edges: [
		{
			description: 'Cokebear Administrator',
			mesos: 0,
			method: 'Taxi',
			to: 'Victoria Island',
		},
	],
	region: 'Coke Town',
};

const EL_NATH: RegionEdges = {
	edges: [
		{
			method: 'Walk',
			to: 'Aqua Road',
		},
		{
			method: 'Walk',
			to: 'Orbis',
			weight: 5,
		},
		{
			item: 'Orbis Rock Scroll',
			method: 'Item Taxi',
			to: 'Orbis',
		},
		...SPINEL_EDGES,
	],
	region: 'El Nath',
};

const ELLIN_FOREST: RegionEdges = {
	edges: [
		{
			method: 'Walk',
			to: 'Ludibrium',
		},
	],
	region: 'Ellin Forest',
};

const HERB_TOWN: RegionEdges = {
	edges: [
		{
			method: 'Walk',
			to: 'Aqua Road',
		},
		{
			description: 'Crane',
			mesos: 500,
			method: 'Taxi',
			to: 'Mu Lung',
		},
	],
	region: 'Herb Town',
};

const KOREAN_FOLK_TOWN: RegionEdges = {
	edges: [
		{
			description: 'Helios Tower Elevator',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Ludibrium',
		},
		{
			description: 'Requires HP Challenge Tier 3',
			item: 'Energy Shard',
			method: 'Item Taxi',
			to: 'Omega Sector',
		},
		{
			method: 'Walk',
			to: 'Aqua Road',
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
};

const LAEFRE: RegionEdges = {
	edges: [
		{
			item: 'Magic Seed',
			method: 'Item Taxi',
			to: 'Victoria Island',
		},
		{
			description: 'Airship',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Orbis',
		},
		{
			description: 'From Orbis taxi turn into dragon and fly',
			method: 'Walk',
			to: 'Temple of Time',
		},
		...SPINEL_EDGES,
	],
	region: 'Leafre',
};

const LUDIBRIUM: RegionEdges = {
	edges: [
		{
			description: 'Airship',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Orbis',
		},
		{
			description: 'Top of Helios Tower',
			method: 'Walk',
			to: 'Ellin Forest',
		},
		{
			description: 'Helios Tower Elevator',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Korean Folk Town',
		},
		{
			description: 'Nara',
			mesos: 1_500,
			method: 'Taxi',
			to: 'Florina Beach',
		},
		{
			description: 'Nara',
			item: 'VIP Ticket to Florina Beach',
			method: 'Item Taxi',
			to: 'Florina Beach',
		},
		{
			item: 'Eos Rock Scroll',
			method: 'Item Taxi',
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
			weight: 5,
		},
	],
	region: 'Ludibrium',
};

const MAGATIA: RegionEdges = {
	edges: [
		{
			description: 'Camel',
			mesos: 1_500,
			method: 'Taxi',
			to: 'Ariant',
		},
	],
	region: 'Magatia',
};

const MALAYSIA: RegionEdges = {
	edges: [
		{
			method: 'Walk',
			to: 'Singapore',
		},
		...SPINEL_EDGES,
	],
	region: 'Malaysia',
};

const MU_LUNG: RegionEdges = {
	edges: [
		{
			description: 'Crane',
			mesos: 500,
			method: 'Taxi',
			to: 'Herb Town',
		},
		{
			description: 'Airship',
			mesos: 1_500,
			method: 'Taxi',
			to: 'Orbis',
		},
		...SPINEL_EDGES,
	],
	region: 'Mu Lung',
};

const MUSHROOM_SHRINE: RegionEdges = {
	edges: [
		{
			item: 'Fruit Milk',
			method: 'Item',
			to: 'Showa',
		},
		{
			description: 'Forest of Oblivion Crystal',
			mesos: 0,
			method: 'Taxi',
			to: 'Ninja Castle',
		},
		{
			description: 'Forest of Oblivion Crystal',
			item: 'Gate Pass',
			method: 'Item Taxi',
			to: 'Neo Tokyo',
		},
	],
	region: 'Mushroom Shrine',
};

const NEO_TOKYO: RegionEdges = {
	edges: [
		{
			mesos: 0,
			method: 'Taxi',
			to: 'Mushroom Shrine',
		},
	],
	region: 'Neo Tokyo',
};

const NINJA_CASTLE: RegionEdges = {
	edges: [
		{
			mesos: 0,
			method: 'Taxi',
			to: 'Mushroom Shrine',
		},
	],
	region: 'Ninja Castle',
};

const NLC: RegionEdges = {
	edges: [
		{
			description: 'Subway (Bell)',
			mesos: 5_000,
			method: 'Timed Taxi',
			to: 'Victoria Island',
		},
	],
	region: 'NLC',
};

const OMEGA_SECTOR: RegionEdges = {
	edges: [
		{
			item: 'Ludibrium Warp Capsule',
			method: 'Item',
			to: 'Ludibrium',
		},
		{
			item: 'Eos Rock Scroll',
			method: 'Item Taxi',
			to: 'Ludibrium',
		},
		{
			method: 'Walk',
			to: 'Ludibrium',
			weight: 5,
		},
		{
			item: 'Warp Card',
			method: 'Item Taxi',
			to: 'Victoria Island',
		},
		{
			item: 'Energy Shard',
			method: 'Item Taxi',
			to: 'Korean Folk Town',
		},
	],
	region: 'Omega Sector',
};

const ORBIS: RegionEdges = {
	edges: [
		{
			item: 'Orbis Rock Scroll',
			method: 'Item',
			to: 'El Nath',
		},
		{
			method: 'Walk',
			to: 'El Nath',
		},
		{
			description: 'Airship',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Victoria Island',
		},
		{
			description: 'Airship',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Ludibrium',
		},
		{
			description: 'Genie',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Ariant',
		},
		{
			description: 'Airship',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Leafre',
		},
		{
			description: 'Crane',
			mesos: 1_500,
			method: 'Taxi',
			to: 'Mu Lung',
		},
		...SPINEL_EDGES,
	],
	region: 'Orbis',
};

const SINGAPORE: RegionEdges = {
	edges: [
		{
			method: 'Walk',
			to: 'Malaysia',
		},
		{
			description: 'Irene',
			mesos: 20_000,
			method: 'Timed Taxi',
			to: 'Victoria Island',
		},
		...SPINEL_EDGES,
	],
	region: 'Singapore',
};

const TAIWAN: RegionEdges = {
	edges: [
		{
			description: 'Tito',
			mesos: 2_000,
			method: 'Taxi',
			to: 'Victoria Island',
		},
		{
			description: 'Blake',
			mesos: 2_000,
			method: 'Taxi',
			to: 'Taipei 101',
		},
		...SPINEL_EDGES,
	],
	region: 'Taiwan',
};

const TAIPEI_101: RegionEdges = {
	edges: [
		{
			description: 'Blake',
			mesos: 2_000,
			method: 'Taxi',
			to: 'Taiwan',
		},
	],
	region: 'Taipei 101',
};

const TEMPLE_OF_TIME: RegionEdges = {
	edges: [
		{
			method: 'Walk',
			to: 'Leafre',
		},
	],
	region: 'Temple of Time',
};

const VICTORIA_ISLAND: RegionEdges = {
	edges: [
		{
			description: 'Thomas Swift (Henesys)',
			mesos: 0,
			method: 'Taxi',
			to: 'Amoria',
		},
		{
			item: 'Desert Coin',
			method: 'Item',
			to: 'Ariant',
		},
		{
			description: 'Cokebear Administrator',
			mesos: 0,
			method: 'Taxi',
			to: 'Coke Town',
		},
		{
			description: 'Airship',
			mesos: 0,
			method: 'Timed Taxi',
			to: 'Orbis',
		},
		{
			item: 'Magic Seed',
			method: 'Item Taxi',
			to: 'Leafre',
		},
		{
			description: 'Subway (Bell)',
			mesos: 5_000,
			method: 'Timed Taxi',
			to: 'NLC',
		},
		{
			description: 'Irene',
			mesos: 20_000,
			method: 'Timed Taxi',
			to: 'Singapore',
		},
		{
			description: 'Tito',
			mesos: 2_000,
			method: 'Taxi',
			to: 'Taiwan',
		},
		{
			item: 'Warp Card',
			method: 'Item',
			to: 'Omega Sector',
		},
		{
			description: 'Pason (Lith Harbor)',
			item: 'VIP Ticket to Florina Beach',
			method: 'Item Taxi',
			to: 'Florina Beach',
		},
		{
			description: 'Pason (Lith Harbor)',
			mesos: 1_500,
			method: 'Taxi',
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
	edges.map<Edge>(edge => ({
		...edge,
		from: region,
		id: `${edge.method}|${region}|${edge.to}`,
	})),
);
