import { Center } from '@mantine/core';
import { ITEM_IMAGE_PLACEHOLDER, type Item, itemDetailsMap } from '.';

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
		>
			{image ? <img alt={item} src={image} /> : ITEM_IMAGE_PLACEHOLDER}
		</Center>
	);
}
