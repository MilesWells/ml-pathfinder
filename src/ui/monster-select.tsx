'use client';

import { Group, Select, type SelectProps, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useSelectedMonsterStore } from '@/lib/zustand/selected-monster-store';
import { MONSTER_MAP, SORTED_MONSTERS_BY } from '@/scraped-data/monster';

export type MonsterSelectProps = Omit<SelectProps, 'data' | 'onChange'>;

const options = SORTED_MONSTERS_BY.level().map(monster => ({
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
		<Group gap="xs">
			{checked && <IconCheck {...iconProps} />}

			<Group>
				<Text>{monster.name}</Text>
				<Text size="xs">Lv.{monster.stats.level}</Text>
			</Group>
		</Group>
	);
};

export function MonsterSelect(props: MonsterSelectProps) {
	const { selectedMonsterSelectOption, setSelectedMonster } = useSelectedMonsterStore();

	return (
		<Select
			comboboxProps={{ offset: 0 }}
			data={options}
			defaultValue={selectedMonsterSelectOption.value}
			nothingFoundMessage="Nothing found..."
			onChange={value => {
				if (!value) return;

				setSelectedMonster(MONSTER_MAP[value]);
			}}
			renderOption={renderSelectOption}
			searchable
			value={selectedMonsterSelectOption.value}
			{...props}
		/>
	);
}
