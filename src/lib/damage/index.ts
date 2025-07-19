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

export function isPhysicalWeaponType(weaponType: string): weaponType is PhysicalWeaponType {
	return PHYSICAL_WEAPON_TYPES.some(type => type === weaponType);
}

export const PHYSICAL_SWING_STAB_WEAPON_TYPES = [
	'One Handed Axe',
	'One Handed BW',
	'Two Handed Axe',
	'Two Handed BW',
	'Spear',
	'Polearm',
] as const;

export type PhysicalSwingStabWeaponType = (typeof PHYSICAL_SWING_STAB_WEAPON_TYPES)[number];

export function isPhysicalSwingStabWeaponType(
	weaponType: string,
): weaponType is PhysicalSwingStabWeaponType {
	return PHYSICAL_SWING_STAB_WEAPON_TYPES.some(type => type === weaponType);
}

export const MAGIC_WEAPON_TYPES = ['Staff', 'Wand'] as const;

export type MagicWeaponType = (typeof MAGIC_WEAPON_TYPES)[number];

export function isMagicWeaponType(weaponType: string): weaponType is MagicWeaponType {
	return MAGIC_WEAPON_TYPES.some(type => type === weaponType);
}

export const HANDED_WEAPON_TYPES = [
	'One Handed Sword',
	'Two Handed Sword',
	'One Handed Axe',
	'Two Handed Axe',
	'One Handed BW',
	'Two Handed BW',
] as const;

export type HandedWeaponType = (typeof HANDED_WEAPON_TYPES)[number];

export function isHandedWeaponType(weaponType: string): weaponType is HandedWeaponType {
	return HANDED_WEAPON_TYPES.some(type => type === weaponType);
}

export const handedCompactWeaponName: Record<HandedWeaponType, string> = {
	'One Handed Axe': '1H Axe',
	'One Handed BW': '1H BW',
	'One Handed Sword': '1H Sword',
	'Two Handed Axe': '2H Axe',
	'Two Handed BW': '2H BW',
	'Two Handed Sword': '2H Sword',
} as const;

export type MaxMin = {
	max: number;
	min: number;
};

export type StabSwingMaxMin = {
	stab: MaxMin;
	swing: MaxMin;
};
