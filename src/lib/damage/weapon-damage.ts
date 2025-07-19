import type { MaxMin, PhysicalSwingStabWeaponType, PhysicalWeaponType, StabSwingMaxMin } from '.';

export type MaxMinWeaponDamageOptions = {
	dex: number;
	int: number;
	luk: number;
	str: number;
	weaponAttack: number;
	weaponMastery: number;
};

type GeneralMaxMinOptions = {
	primary: number;
	secondary: number;
	weaponAttack: number;
	weaponMastery: number;
};

function generalMaxMin({
	primary,
	secondary,
	weaponAttack,
	weaponMastery,
}: GeneralMaxMinOptions): MaxMin {
	return {
		max: Math.round(((primary + secondary) * weaponAttack) / 100),
		min: Math.round(((primary * 0.9 * weaponMastery + secondary) * weaponAttack) / 100),
	};
}

export const minMaxWeaponDamageMap = {
	Bow: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: dex * 3.4,
			secondary: str,
			weaponAttack,
			weaponMastery,
		}),
	Claw: ({ luk, str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: luk * 3.6,
			secondary: str + dex,
			weaponAttack,
			weaponMastery,
		}),
	Crossbow: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: dex * 3.6,
			secondary: str,
			weaponAttack,
			weaponMastery,
		}),
	Dagger: ({ luk, str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: luk * 3.6,
			secondary: str + dex,
			weaponAttack,
			weaponMastery,
		}),
	Gun: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: dex * 3.6,
			secondary: str,
			weaponAttack,
			weaponMastery,
		}),
	Knuckle: ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: str * 4.8,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	'One Handed Axe': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMaxMin({
			primary: str * 3.2,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMaxMin({
			primary: str * 4.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'One Handed BW': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMaxMin({
			primary: str * 3.2,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMaxMin({
			primary: str * 4.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'One Handed Sword': ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: str * 4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	Polearm: ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMaxMin({
			primary: str * 3,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMaxMin({
			primary: str * 5,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	Spear: ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMaxMin({
			primary: str * 5,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMaxMin({
			primary: str * 3,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'Two Handed Axe': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMaxMin({
			primary: str * 3.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMaxMin({
			primary: str * 4.8,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'Two Handed BW': ({ str, dex, weaponAttack, weaponMastery }) => ({
		stab: generalMaxMin({
			primary: str * 3.4,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
		swing: generalMaxMin({
			primary: str * 4.8,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
	}),
	'Two Handed Sword': ({ str, dex, weaponAttack, weaponMastery }) =>
		generalMaxMin({
			primary: str * 4.6,
			secondary: dex,
			weaponAttack,
			weaponMastery,
		}),
} satisfies {
	[k in PhysicalWeaponType]: (options: MaxMinWeaponDamageOptions) => MaxMin;
} & {
	[k in PhysicalSwingStabWeaponType]: (options: MaxMinWeaponDamageOptions) => StabSwingMaxMin;
};
