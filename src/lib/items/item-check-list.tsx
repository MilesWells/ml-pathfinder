'use client';

import { Checkbox, Group, Stack, Text } from '@mantine/core';
import { useMemo } from 'react';
import { ItemIcon } from '@/ui/item-icon';
import { useSelectedItems } from '../local-storage/pathfinder/selected-items';
import { type Item, items } from '.';

export function ItemCheckList() {
	const { addItem, removeItem, removeAll, selectAll, selectedItems } = useSelectedItems();

	const allSelected = useMemo(
		() => Object.entries(selectedItems).every(([, hasItem]) => hasItem),
		[selectedItems],
	);

	return (
		<Stack>
			<Checkbox
				checked={allSelected}
				label={
					<Text c={allSelected ? 'kimmy-red.5' : 'meso-yellow.5'} fw={500} fz={18}>
						{allSelected ? 'Unselect All' : 'Select All'}
					</Text>
				}
				onChange={({ currentTarget: { checked } }) => {
					if (checked) selectAll();
					else removeAll();
				}}
				styles={{ body: { alignItems: 'center' } }}
			/>

			{items.map(item => (
				<Checkbox
					checked={selectedItems[item]}
					key={item}
					label={<ItemCheckLabel item={item} />}
					onChange={({ currentTarget: { checked } }) => {
						if (checked) addItem(item);
						else removeItem(item);
					}}
					styles={{ body: { alignItems: 'center' } }}
				/>
			))}
		</Stack>
	);
}

function ItemCheckLabel({ item }: { item: Item }) {
	return (
		<Group gap="xs">
			<ItemIcon item={item} />
			<Text>{item}</Text>
		</Group>
	);
}
