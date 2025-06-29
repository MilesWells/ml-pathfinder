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

export type ItemDetails = {
	image: string;
	links: {
		bbb: string | null;
		library: string | null;
		otherDocs: string | null;
	};
};

const IMAGE_PLACEHOLDER = '/images/slime-sweat.png';

export const itemDetailsMap = {
	'Command Center Warp Capsule': {
		image: '/images/items/warp-capsule.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/return-scroll/command-center-warp-capsule',
			library: 'https://maplelegends.com/lib/use?id=2030011',
			otherDocs: null,
		},
	},
	'Desert Coin': {
		image: IMAGE_PLACEHOLDER,
		links: {
			bbb: null,
			library: 'https://maplelegends.com/lib/etc?id=4031889',
			otherDocs:
				'https://forum.maplelegends.com/index.php?threads/general-patch-notes-october-9-2022.47422/',
		},
	},
	'Energy Shard': {
		image: IMAGE_PLACEHOLDER,
		links: {
			bbb: null,
			library: 'https://maplelegends.com/lib/etc?id=4035060',
			otherDocs:
				'https://forum.maplelegends.com/index.php?threads/travel-guide-sishous-maplelegends-navigation-guide-and-tips.57168/',
		},
	},
	'Eos Rock Scroll': {
		image: '/images/items/eos-rock-scroll.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/quest/eos-rock-scroll',
			library: 'https://maplelegends.com/lib/etc?id=4001020',
			otherDocs: null,
		},
	},
	'Fruit Milk': {
		image: '/images/items/fruit-milk.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/return-scroll/fruit-milk',
			library: 'https://maplelegends.com/lib/use?id=2030010',
			otherDocs: null,
		},
	},
	'Gate Pass': {
		image: IMAGE_PLACEHOLDER,
		links: {
			bbb: null,
			library: null,
			otherDocs: 'https://forum.maplelegends.com/index.php?threads/neo-tokyo-guide.25729/',
		},
	},
	'Ludibrium Warp Capsule': {
		image: '/images/items/warp-capsule.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/return-scroll/ludibrium-warp-capsule',
			library: 'https://maplelegends.com/lib/use?id=2030012',
			otherDocs: null,
		},
	},
	'Magic Seed': {
		image: '/images/items/magic-seed.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/quest/magic-seed-2',
			library: 'https://maplelegends.com/lib/npc?id=2081000',
			otherDocs: null,
		},
	},
	'Omega Sector Warp Capsule': {
		image: '/images/items/warp-capsule.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/return-scroll/omega-sector-warp-capsule',
			library: 'https://maplelegends.com/lib/etc?id=4031221',
			otherDocs: null,
		},
	},
	'Orbis Rock Scroll': {
		image: '/images/items/orbis-rock-scroll.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/quest/orbis-rock-scroll',
			library: 'https://maplelegends.com/lib/etc?id=4001019',
			otherDocs: null,
		},
	},
	'Return Scroll - Nearest Town': {
		image: '/images/items/return-scroll-nearest-town.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/return-scroll/return-scroll-nearest-town',
			library: 'https://maplelegends.com/lib/use?id=2030000',
			otherDocs: null,
		},
	},
	'Return to New Leaf City Scroll': {
		image: '/images/items/return-to-new-leaf-city-scroll.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/return-scroll/return-to-new-leaf-city-scroll',
			library: 'https://maplelegends.com/lib/use?id=2030020',
			otherDocs: null,
		},
	},
	'Strawberry Milk': {
		image: '/images/items/strawberry-milk.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/return-scroll/strawberry-milk',
			library: 'https://maplelegends.com/lib/use?id=2030009',
			otherDocs: null,
		},
	},
	'VIP Ticket to Florina Beach': {
		image: '/images/items/vip-ticket-to-florina-beach.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/ticket/vip-ticket-to-florina-beach',
			library: 'https://maplelegends.com/lib/etc?id=4031134',
			otherDocs: null,
		},
	},
	'Warp Card': {
		image: '/images/items/warp-card.png',
		links: {
			bbb: 'https://bbb.hidden-street.net/items/quest/warp-card',
			library: 'https://maplelegends.com/lib/etc?id=4031890',
			otherDocs: null,
		},
	},
} satisfies Record<Item, ItemDetails>;
