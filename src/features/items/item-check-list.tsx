'use client';

import { Checkbox, Stack } from '@mantine/core';
import { items } from '.';
import { useSelectedItems } from './selected-items-context';

export function ItemCheckList() {
	const { addItem, removeItem, selectedItems } = useSelectedItems();

	return (
		<Stack>
			{items.map(item => (
				<Checkbox
					checked={selectedItems[item]}
					key={item}
					label={item}
					onChange={({ currentTarget: { checked } }) => {
						if (checked) addItem(item);
						else removeItem(item);
					}}
				/>
			))}
		</Stack>
	);
}
