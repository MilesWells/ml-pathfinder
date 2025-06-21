export const ITEMS = [
	'Ludibrium Warp Capsule',
	'Omega Sector Warp Capsule',
	'Command Center Warp Capsule',
] as const;

export type Item = (typeof ITEMS)[number];
