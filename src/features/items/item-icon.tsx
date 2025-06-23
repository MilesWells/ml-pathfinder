import { Center } from '@mantine/core';
import { type Item, itemImages } from '.';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	return (
		<Center
			styles={{
				root: {
					height: 30,
					width: 30,
				},
			}}
		>
			<img alt={item} src={itemImages[item]} />
		</Center>
	);
}
