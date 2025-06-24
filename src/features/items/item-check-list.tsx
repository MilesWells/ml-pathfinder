'use client';

import { Checkbox, Group, Stack, Text } from '@mantine/core';
import { type Item, items } from '.';
import { ItemIcon } from './item-icon';
import { useSelectedItems } from './selected-items-context';

export function ItemCheckList() {
	const { addItem, removeItem, selectedItems } = useSelectedItems();

	return (
		<Stack>
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
