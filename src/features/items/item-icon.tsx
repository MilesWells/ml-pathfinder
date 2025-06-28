import { Box } from '@mantine/core';
import { type Item, itemDetailsMap } from '.';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	return (
		<Box
			component="span"
			display="inline-flex"
			h={30}
			style={{
				verticalAlign: 'middle',
			}}
			w={30}
		>
			<img
				alt={item}
				src={itemDetailsMap[item].image}
				style={{
					margin: 'auto',
				}}
				title={item}
			/>
		</Box>
	);
}
