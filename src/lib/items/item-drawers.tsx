'use client';

import { Center, Drawer } from '@mantine/core';
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
				const {
					links: { otherDocs },
				} = itemDetailsMap[item];

				return (
					<Drawer
						key={item}
						{...itemStack[item]}
						styles={{
							body: {
								flexGrow: '1',
							},
							content: {
								display: 'flex',
								flexDirection: 'column',
							},
							title: {
								fontSize: 22,
								fontWeight: 500,
							},
						}}
						title={item}
					>
						<Center h="100%" style={{ flexDirection: 'column', gap: 8 }}>
							<ItemIcon item={item} />
							{otherDocs && <ExternalLink href={otherDocs}>Docs</ExternalLink>}
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
