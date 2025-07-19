export const PHYSICAL_WEAPON_TYPES = [
	'One Handed Sword',
	'Two Handed Sword',
	'Dagger',
	'Claw',
	'Bow',
	'Crossbow',
	'Knuckle',
	'Gun',
] as const;

export type PhysicalWeaponType = (typeof PHYSICAL_WEAPON_TYPES)[number];

export const PHYSICAL_SWING_STAB_WEAPON_TYPES = [
	'One Handed Axe',
	'One Handed BW',
	'Two Handed Axe',
	'Two Handed BW',
	'Spear',
	'Polearm',
] as const;

export type PhysicalSwingStabWeaponType = (typeof PHYSICAL_SWING_STAB_WEAPON_TYPES)[number];

export const MAGIC_WEAPON_TYPES = ['Staff', 'Wand'] as const;

export type MagicWeaponType = (typeof MAGIC_WEAPON_TYPES)[number];

export type MaxMin = {
	max: number;
	min: number;
};

export type StabSwingMaxMin = {
	stab: MaxMin;
	swing: MaxMin;
};
