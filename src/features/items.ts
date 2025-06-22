export const items = [
	'Command Center Warp Capsule',
	'Desert Coin',
	'Energy Shard',
	'Eos Rock Scroll',
	'Fruit Milk',
	'Gate Pass',
	'Ludibrium Warp Capsule',
	'Magic Seed',
	'Omega Sector Warp Capsule',
	'Orbis Rock Scroll',
	'Return to New Leaf City Scroll',
	'Strawberry Milk',
	'VIP Ticket to Florina Beach',
	'Warp Card',
] as const;

export type Item = (typeof items)[number];
