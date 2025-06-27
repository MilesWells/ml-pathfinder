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
	'Return Scroll - Nearest Town',
	'Strawberry Milk',
	'VIP Ticket to Florina Beach',
	'Warp Card',
] as const;

export type Item = (typeof items)[number];

const ITEM_IMAGE_PLACEHOLDER = '/images/items/slime-sweat.png';

export type ItemDetails = {
	image: string;
	docsLink: string;
};

export const itemDetailsMap: Record<Item, ItemDetails> = {
	'Command Center Warp Capsule': {
		docsLink: 'https://bbb.hidden-street.net/items/return-scroll/command-center-warp-capsule',
		image: '/images/items/warp-capsule.png',
	},
	'Desert Coin': {
		docsLink: 'https://forum.maplelegends.com/index.php?threads/general-patch-notes-october-9-2022.47422/',
		image: ITEM_IMAGE_PLACEHOLDER,
	},
	'Energy Shard': {
		docsLink: 'https://maplelegends.com/lib/etc?id=4035060',
		image: ITEM_IMAGE_PLACEHOLDER,
	},
	'Eos Rock Scroll': {
		docsLink: 'https://bbb.hidden-street.net/items/quest/eos-rock-scroll',
		image: '/images/items/eos-rock-scroll.png',
	},
	'Fruit Milk': {
		docsLink: 'https://bbb.hidden-street.net/items/return-scroll/fruit-milk',
		image: '/images/items/fruit-milk.png',
	},
	'Gate Pass': {
		docsLink: 'https://forum.maplelegends.com/index.php?threads/neo-tokyo-guide.25729/',
		image: ITEM_IMAGE_PLACEHOLDER,
	},
	'Ludibrium Warp Capsule': {
		docsLink: 'https://bbb.hidden-street.net/items/return-scroll/ludibrium-warp-capsule',
		image: '/images/items/warp-capsule.png',
	},
	'Magic Seed': {
		docsLink: 'https://maplelegends.com/lib/npc?id=2081000',
		image: '/images/items/magic-seed.png',
	},
	'Omega Sector Warp Capsule': {
		docsLink: 'https://bbb.hidden-street.net/items/return-scroll/omega-sector-warp-capsule',
		image: '/images/items/warp-capsule.png',
	},
	'Orbis Rock Scroll': {
		docsLink: 'https://bbb.hidden-street.net/items/quest/orbis-rock-scroll',
		image: '/images/items/orbis-rock-scroll.png',
	},
	'Return Scroll - Nearest Town': {
		docsLink: 'https://bbb.hidden-street.net/items/return-scroll/return-scroll-nearest-town',
		image: '/images/items/return-scroll-nearest-town.png',
	},
	'Return to New Leaf City Scroll': {
		docsLink: 'https://bbb.hidden-street.net/items/return-scroll/return-to-new-leaf-city-scroll',
		image: '/images/items/return-to-new-leaf-city-scroll.png',
	},
	'Strawberry Milk': {
		docsLink: 'https://bbb.hidden-street.net/items/return-scroll/strawberry-milk',
		image: '/images/items/strawberry-milk.png',
	},
	'VIP Ticket to Florina Beach': {
		docsLink: 'https://bbb.hidden-street.net/items/ticket/vip-ticket-to-florina-beach',
		image: '/images/items/vip-ticket-to-florina-beach.png',
	},
	'Warp Card': {
		docsLink: 'https://bbb.hidden-street.net/items/quest/warp-card',
		image: '/images/items/warp-card.png',
	},
};
