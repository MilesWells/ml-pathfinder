'use client';

import { Checkbox, Group, Stack, Text } from '@mantine/core';
import { useMemo } from 'react';
import { ItemIcon } from '../../ui/item-icon';
import { type Item, items } from '.';
import { useSelectedItems } from './selected-items-context';

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
				label={<Text>Select All</Text>}
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
		<Group>
			<ItemIcon item={item} />
			<Text>{item}</Text>
		</Group>
	);
}
