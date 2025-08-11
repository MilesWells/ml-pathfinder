'use client';

import {
	type ComboboxItem,
	Group,
	type OptionsFilter,
	Select,
	type SelectProps,
	Stack,
	Text,
} from '@mantine/core';
import { useSelectedMonster } from '@/lib/jotai/selected-monster-atom';
import { MONSTER_MAP, SORTED_MONSTERS_BY } from '@/lib/monster';
import { formatPositiveInteger } from '@/lib/number-formatter';

export type MonsterSelectProps = Omit<SelectProps, 'data' | 'onChange'>;

const options: ComboboxItem[] = SORTED_MONSTERS_BY.hp()
	.filter(monster => {
		const hasExp = monster.stats.exp > 0;
		const hasMinHp = monster.stats.hp >= 6;
		const hasDrops =
			monster.drops.equip.length > 0 ||
			monster.drops.etc.length > 0 ||
			monster.drops.setup.length > 0 ||
			monster.drops.use.length > 0;
		const isNotEventOrBossSpawn = monster.stats.level / monster.stats.hp < 0.14; // highest ratio for normal monsters is blue snail at 0.13333

		return hasExp && hasMinHp && hasDrops && isNotEventOrBossSpawn;
	})
	.map(monster => ({
		label: monster.name,
		value: monster.id,
	}));

const SEARCH_FOR_MORE_LABEL = 'Search to see additional results';

const SEARCH_FOR_MORE_OPTION: ComboboxItem = {
	label: SEARCH_FOR_MORE_LABEL,
	value: SEARCH_FOR_MORE_LABEL,
};

const optionsFilter: OptionsFilter = ({ options, search, limit }) => {
	const filteredOptions = options.filter(option => {
		if ('group' in option) throw new Error('Grouped Combobox items not yet supported');

		return option.label.toLowerCase().includes(search.toLowerCase());
	});

	const limited = filteredOptions.slice(0, limit);

	if (filteredOptions.length > limit) limited.push(SEARCH_FOR_MORE_OPTION);

	return limited;
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
	if (option.value === SEARCH_FOR_MORE_LABEL)
		return (
			<Text size="sm" ta="center" w="100%">
				{SEARCH_FOR_MORE_LABEL}
			</Text>
		);

	const monster = MONSTER_MAP[option.value];

	return (
		<Stack c={checked ? 'maplelegends-blue.6' : undefined} gap={0} title={monster.name} w="100%">
			<Group wrap="nowrap">
				<Text flex="1 0 0" truncate>
					{monster.name}
				</Text>

				<Text c="kimmy-red.3" flex="0 0 fit-content" fs="italic" size="xs">
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
			filter={optionsFilter}
			limit={25}
			nothingFoundMessage="Nothing found..."
			onChange={(value, option) => {
				if (option === undefined) return;

				setSelectedMonster(value);
			}}
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
