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

const PLACEHOLDER = '🟨';

export const itemImages: Record<Item, string> = {
	'Command Center Warp Capsule': '/images/warp-capsule.png',
	'Desert Coin': PLACEHOLDER,
	'Energy Shard': PLACEHOLDER,
	'Eos Rock Scroll': '/images/eos-rock-scroll.png',
	'Fruit Milk': '/images/fruit-milk.png',
	'Gate Pass': PLACEHOLDER,
	'Ludibrium Warp Capsule': '/images/warp-capsule.png',
	'Magic Seed': '/images/magic-seed.png',
	'Omega Sector Warp Capsule': '/images/warp-capsule.png',
	'Orbis Rock Scroll': '/images/orbis-rock-scroll.png',
	'Return to New Leaf City Scroll':
		'/images/return-to-new-leaf-city-scroll.png',
	'Strawberry Milk': '/images/strawberry-milk.png',
	'VIP Ticket to Florina Beach': '/images/vip-ticket-to-florina-beach.png',
	'Warp Card': '/images/warp-card.png',
};
