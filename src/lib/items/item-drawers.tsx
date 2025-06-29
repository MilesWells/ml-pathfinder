'use client';

import { Center, Drawer, Text } from '@mantine/core';
import { itemDetailsMap, items } from '@/lib/items';
import { ExternalLink } from '@/ui/external-link';
import { ItemIcon } from '@/ui/item-icon';
import { ItemCheckList } from './item-check-list';
import { useItemDrawersStack } from './item-drawer-context';

export function ItemDrawers() {
	const itemStack = useItemDrawersStack();

	return (
		<>
			{items.map(item => {
				const { docsLink } = itemDetailsMap[item];

				return (
					<Drawer key={item} {...itemStack[item]} title={item}>
						<Center h="100%" style={{ flexDirection: 'column' }}>
							<ItemIcon item={item} />
							<Text>{item}</Text>
							<ExternalLink href={docsLink}>Docs</ExternalLink>
						</Center>
					</Drawer>
				);
			})}

			<Drawer {...itemStack['item-selection']} title="Select Items to Use">
				<ItemCheckList />
			</Drawer>
		</>
	);
}
