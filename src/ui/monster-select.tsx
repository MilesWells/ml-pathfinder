'use client';

import { Select, type SelectProps } from '@mantine/core';
import { MONSTER_MAP, MONSTERS, type ScrapedMonster } from '@/scraped-data/monster';

export type MonsterSelectProps = Omit<SelectProps, 'data' | 'onChange'> & {
	onChange: (monster: ScrapedMonster) => void;
};

const options = MONSTERS.map(monster => ({
	label: monster.name,
	value: monster.id,
}));

export function MonsterSelect({ onChange, ...props }: MonsterSelectProps) {
	return (
		<Select
			data={options}
			onChange={value => value && onChange(MONSTER_MAP[value])}
			searchable
			{...props}
		/>
	);
}
