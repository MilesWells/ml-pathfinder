import { Text } from '@mantine/core';
import type { Item } from '@/lib/items';

export type ItemConsumptionProps = {
	item: Item;
};

export function ItemConsumption({ item }: ItemConsumptionProps) {
	if (item === 'VIP Ticket to Florina Beach' || item === 'Gate Pass')
		return (
			<Text c="meso-yellow.6" fs="italic">
				Item kept on use
			</Text>
		);

	return (
		<Text c="kimmy-red.5" fs="italic">
			Item consumed on use
		</Text>
	);
}
