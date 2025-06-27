'use client';

import { Center } from '@mantine/core';
import { type Item, itemDetailsMap } from '.';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	const image = itemDetailsMap[item].image;

	return (
		<Center
			styles={{
				root: {
					height: 30,
					width: 30,
				},
			}}
			title={item}
		>
			<img alt={item} src={image} />
		</Center>
	);
}
