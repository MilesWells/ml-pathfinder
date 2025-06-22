export const ITEMS = [
	'Ludibrium Warp Capsule',
	'Omega Sector Warp Capsule',
	'Command Center Warp Capsule',
	'Fruit Milk',
	'Strawberry Milk',
	'Orbis Rock Scroll',
	'Energy Shard',
	'Magic Seed',
	'VIP Ticket to Florina Beach',
	'Eos Rock Scroll',
	'Warp Card',
	'Desert Coin',
	'Return to New Leaf City Scroll',
	'Gate Pass',
] as const;

export type Item = (typeof ITEMS)[number];
