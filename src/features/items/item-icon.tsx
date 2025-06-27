'use client';

import { Center } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import { type Item, itemDetailsMap } from '.';

export type ItemIconProps = {
	item: Item;
};

export function ItemIcon({ item }: ItemIconProps) {
	const image = itemDetailsMap[item].image;

	return (
		<ExternalLink href={itemDetailsMap[item].docsLink}>
			<Center
				styles={{
					root: {
						cursor: 'pointer',
						height: 30,
						width: 30,
					},
				}}
				title={item}
			>
				<img alt={item} src={image} />
			</Center>
		</ExternalLink>
	);
}
