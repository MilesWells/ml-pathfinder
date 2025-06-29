'use client';

import { Anchor } from '@mantine/core';
import { ItemIcon } from '@/ui/item-icon';
import type { Item } from '.';
import { useItemDrawersStack } from './item-drawer-context';

export type ItemDrawerProps = {
	item: Item;
};

export function ItemDrawerLink({ item }: ItemDrawerProps) {
	const { itemStack } = useItemDrawersStack();

	return (
		<Anchor
			c="maplelegends-blue.6"
			component="span"
			fw="bold"
			fz="inherit"
			onClick={() => itemStack.open(item)}
		>
			<ItemIcon item={item} mr="2px" />
			{item}
		</Anchor>
	);
}
