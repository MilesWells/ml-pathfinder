'use client';

import { Anchor, Center, Drawer, Text, useDrawersStack } from '@mantine/core';
import { ExternalLink } from '@/ui/external-link';
import { ItemIcon } from '@/ui/item-icon';
import { type Item, itemDetailsMap } from '.';

export type ItemDrawerProps = {
	item: Item;
};

export function ItemDrawer({ item }: ItemDrawerProps) {
	const stack = useDrawersStack([item]);
	const { docsLink } = itemDetailsMap[item];

	return (
		<>
			<Drawer
				{...stack.register(item)}
				styles={{
					body: {
						flexGrow: '1',
					},
					content: {
						display: 'flex',
						flexDirection: 'column',
					},
				}}
				title={item}
			>
				<Center h="100%" style={{ flexDirection: 'column' }}>
					<ItemIcon item={item} />
					<Text>{item}</Text>
					<ExternalLink href={docsLink}>Docs</ExternalLink>
				</Center>
			</Drawer>

			<Anchor
				c="maplelegends-blue.6"
				component="span"
				fw="bold"
				fz="inherit"
				onClick={() => stack.open(item)}
			>
				<ItemIcon item={item} />
				{item}
			</Anchor>
		</>
	);
}
