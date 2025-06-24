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

const ITEM_IMAGE_PLACEHOLDER = '/images/slime-sweat.png';

export type ItemDetails = {
	image: string;
};

export const itemDetailsMap: Record<Item, ItemDetails> = {
	'Command Center Warp Capsule': {
		image: '/images/warp-capsule.png',
	},
	'Desert Coin': {
		image: ITEM_IMAGE_PLACEHOLDER,
	},
	'Energy Shard': {
		image: ITEM_IMAGE_PLACEHOLDER,
	},
	'Eos Rock Scroll': {
		image: '/images/eos-rock-scroll.png',
	},
	'Fruit Milk': {
		image: '/images/fruit-milk.png',
	},
	'Gate Pass': {
		image: ITEM_IMAGE_PLACEHOLDER,
	},
	'Ludibrium Warp Capsule': {
		image: '/images/warp-capsule.png',
	},
	'Magic Seed': {
		image: '/images/magic-seed.png',
	},
	'Omega Sector Warp Capsule': {
		image: '/images/warp-capsule.png',
	},
	'Orbis Rock Scroll': {
		image: '/images/orbis-rock-scroll.png',
	},
	'Return to New Leaf City Scroll': {
		image: '/images/return-to-new-leaf-city-scroll.png',
	},
	'Strawberry Milk': {
		image: '/images/strawberry-milk.png',
	},
	'VIP Ticket to Florina Beach': {
		image: '/images/vip-ticket-to-florina-beach.png',
	},
	'Warp Card': {
		image: '/images/warp-card.png',
	},
};
