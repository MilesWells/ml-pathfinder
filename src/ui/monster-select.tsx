'use client';

import { Group, Select, type SelectProps } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { MONSTER_MAP, MONSTERS, type ScrapedMonster } from '@/scraped-data/monster';

export type MonsterSelectProps = Omit<SelectProps, 'data' | 'onChange'> & {
	onChange: (monster: ScrapedMonster) => void;
};

const options = MONSTERS.map(monster => ({
	label: monster.name,
	value: monster.id,
}));

const iconProps = {
	color: 'currentColor',
	opacity: 0.6,
	size: 18,
	stroke: 1.5,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
	const monster = MONSTER_MAP[option.value];

	return (
		<Group flex="1" gap="xs">
			{monster.name}
			{checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
		</Group>
	);
};

export function MonsterSelect({ onChange, ...props }: MonsterSelectProps) {
	return (
		<Select
			comboboxProps={{ offset: 0 }}
			data={options}
			nothingFoundMessage="Nothing found..."
			onChange={value => value && onChange(MONSTER_MAP[value])}
			renderOption={renderSelectOption}
			searchable
			{...props}
		/>
	);
}
