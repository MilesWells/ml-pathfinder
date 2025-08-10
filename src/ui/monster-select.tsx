'use client';

import { Group, Select, type SelectProps, Stack, Text } from '@mantine/core';
import { useSelectedMonster } from '@/lib/jotai/selected-monster-atom';
import { formatPositiveInteger } from '@/lib/number-formatter';
import { MONSTER_MAP, SORTED_MONSTERS_BY } from '@/scraped-data/monster';

export type MonsterSelectProps = Omit<SelectProps, 'data' | 'onChange'>;

const options = SORTED_MONSTERS_BY.hp().map(monster => ({
	label: monster.name,
	value: monster.id,
}));

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
	const monster = MONSTER_MAP[option.value];

	return (
		<Stack c={checked ? 'maplelegends-blue.6' : undefined} gap={0} title={monster.name} w="100%">
			<Group wrap="nowrap">
				<Text style={{ flexGrow: 1 }} truncate>
					{monster.name}
				</Text>

				<Text c="kimmy-red.3" fs="italic" size="xs" style={{ flexShrink: 0 }}>
					{formatPositiveInteger(monster.stats.hp)} HP
				</Text>
			</Group>

			<Group justify="space-between">
				<Text c="maplelegends-blue.3" fs="italic" size="xs">
					Lv. {monster.stats.level}
				</Text>

				<Text c="meso-yellow.3" fs="italic" size="xs">
					{formatPositiveInteger(monster.stats.exp)} EXP
				</Text>
			</Group>
		</Stack>
	);
};

export function MonsterSelect(props: MonsterSelectProps) {
	const { selectedMonsterSelectOption, setSelectedMonster } = useSelectedMonster();

	return (
		<Select
			allowDeselect={false}
			comboboxProps={{ offset: 0, withinPortal: false }}
			data={options}
			nothingFoundMessage="Nothing found..."
			onChange={setSelectedMonster}
			renderOption={renderSelectOption}
			searchable
			styles={{ dropdown: { maxHeight: 300, overflowY: 'auto' } }}
			title={selectedMonsterSelectOption.label}
			value={selectedMonsterSelectOption.value}
			withScrollArea={false}
			{...props}
		/>
	);
}
