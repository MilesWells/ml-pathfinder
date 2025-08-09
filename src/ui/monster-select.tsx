'use client';

import { Select, type SelectProps, Stack, Text } from '@mantine/core';
import { useSelectedMonsterStore } from '@/lib/zustand/selected-monster-store';
import { MONSTER_MAP, SORTED_MONSTERS_BY } from '@/scraped-data/monster';

export type MonsterSelectProps = Omit<SelectProps, 'data' | 'onChange'>;

const options = SORTED_MONSTERS_BY.level().map(monster => ({
	label: monster.name,
	value: monster.id,
}));

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
	const monster = MONSTER_MAP[option.value];

	return (
		<Stack c={checked ? 'maplelegends-blue.6' : undefined} gap={0}>
			<Text>{monster.name}</Text>
			<Text fs="italic" size="xs">
				Lv.{monster.stats.level}
			</Text>
		</Stack>
	);
};

export function MonsterSelect(props: MonsterSelectProps) {
	const setSelectedMonster = useSelectedMonsterStore(state => state.setSelectedMonster);
	const selectedMonsterSelectOption = useSelectedMonsterStore(
		state => state.selectedMonsterSelectOption.value,
	);

	return (
		<Select
			comboboxProps={{
				offset: 0,
				position: 'bottom-start',
				width: 'fit-content',
			}}
			data={options}
			defaultValue={selectedMonsterSelectOption}
			nothingFoundMessage="Nothing found..."
			onChange={value => {
				if (!value) return;

				setSelectedMonster(MONSTER_MAP[value]);
			}}
			renderOption={renderSelectOption}
			searchable
			value={selectedMonsterSelectOption}
			{...props}
		/>
	);
}
